import express from 'express';
import PushNotificationService from './push-notifications.js';

const router = express.Router();
const notificationService = new PushNotificationService();


// Use mysql later
let alerts = [
  {
    id: 1,
    title: "Road Blockage",
    message: "Main Street is blocked due to an accident. Avoid the area.",
    segment: "user",
    createdAt: new Date("2024-10-18T10:30:00Z"),
  },
  {
    id: 2,
    title: "Severe Weather Warning",
    message: "A severe thunderstorm is expected in the area. Stay indoors.",
    segment: "user",
    createdAt: new Date("2024-10-19T08:45:00Z"),
  },
  {
    id: 3,
    title: "Police Activity",
    message: "Law enforcement is investigating a case on Oak Street. Stay alert.",
    segment: "law-enforcement",
    createdAt: new Date("2024-10-19T14:00:00Z"),
  },
  {
    id: 4,
    title: "Power Outage",
    message: "There's a power outage affecting several neighborhoods. Crews are working to restore power.",
    segment: "user",
    createdAt: new Date("2024-10-20T07:15:00Z"),
  },
];


router.post('/alerts', async (req, res) => {
  const { title, message, segment} = req.body;

  if (!title || !message) {
    return res.status(400).json({ error: 'Title and message are required.' });
  }

  // if (!segment) {
  //   return res.status(400).json({ error: 'Segment is required.' });
  // }

  // Create new alert object
  const newAlert = {
    id: alerts.length + 1,
    title,
    message,
    segment,
    createdAt: new Date(),
  };

  const filters = segment === 'law-enforcement' ? notificationService.filters.lawEnforcementFilter : segment === 'user' ? notificationService.filters.userFilter : null;

  // Add the new alert to the alerts array
  alerts.push(newAlert);


  // Send push notification targeting the specified segment
  try {
    const response = await notificationService.pushNotification({
      heading: title,
      content: message,
      segment: segment,
      filters: []
    });
    console.log('Notification sent:', response);
    res.status(201).json({ alert: newAlert, notificationResponse: response });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send notification', details: error.message });
  }
});

/**
 * GET route to fetch all alerts.
 */
router.get('/alerts', (req, res) => {
  res.status(200).json(alerts);
});

export default router;

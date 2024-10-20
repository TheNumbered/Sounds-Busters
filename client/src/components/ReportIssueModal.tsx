import React, { useState } from 'react';
import { Modal, Box, Typography, TextField, Select, MenuItem, Button } from '@mui/material';

const ReportIssueModal: React.FC<{ open: boolean, handleClose: () => void }> = ({ open, handleClose }) => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [segment, setSegment] = useState('');

  // Handle form submission to post the alert
  const handleSubmit = async () => {
    const newAlert = { title, message, segment };

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/alerts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAlert),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Alert posted:', result);
        handleClose(); // Close the modal after successful submission
      } else {
        console.error('Failed to post alert:', response.statusText);
      }
    } catch (error) {
      console.error('Error posting alert:', error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose} aria-labelledby="report-issue-modal">
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, bgcolor: 'background.paper', p: 4, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Report an Issue
        </Typography>
        <TextField
          fullWidth
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          margin="normal"
          multiline
          rows={4}
        />
        <Select
          fullWidth
          value={segment}
          onChange={(e) => setSegment(e.target.value)}
          displayEmpty
        >
          <MenuItem value="" disabled>
            Select Segment
          </MenuItem>
          <MenuItem value="user">User</MenuItem>
          <MenuItem value="law-enforcement">Law Enforcement</MenuItem>
        </Select>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          onClick={handleSubmit} // Submit form
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </Box>
    </Modal>
  );
};

export default ReportIssueModal;

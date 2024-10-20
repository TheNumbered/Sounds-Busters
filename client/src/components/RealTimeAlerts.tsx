import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Box, IconButton, CircularProgress } from '@mui/material';
import { Notifications } from '@mui/icons-material';

const RealTimeAlerts: React.FC = () => {
  const [alerts, setAlerts] = useState<any[]>([]); // State to store alerts
  const [loading, setLoading] = useState<boolean>(true); // State for loading
  const [error, setError] = useState<string | null>(null); // State for error handling

  // Fetch alerts from the API when component mounts
  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/alerts`);

        if (!response.ok) {
          throw new Error('Failed to fetch alerts');
        }

        const data = await response.json();
        setAlerts(data); // Update alerts state
      } catch (err: any) {
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchAlerts(); // Call the function
  }, []); // Empty dependency array to run only once on mount

  return (
    <Card sx={{ height: '400px' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" gutterBottom>
            Real-time Alerts
          </Typography>
          <IconButton>
            <Notifications color="primary" />
          </IconButton>
        </Box>

        {/* Loading State */}
        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <CircularProgress />
          </Box>
        )}

        {/* Error State */}
        {error && (
          <Typography variant="body2" color="error">
            {error}
          </Typography>
        )}
        <div style={{ overflowY: 'auto', height: '300px' }}>
        {/* Alerts List */}
        {!loading && !error && alerts.length > 0 ? (
          alerts.map((alert) => (
            <Box key={alert.id} sx={{ mb: 2 }}>
              <Typography variant="body1">
                <strong>{alert.title}</strong>
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {alert.message}
              </Typography>
              <Typography variant="caption" color="textSecondary">
                {new Date(alert.createdAt).toLocaleString()}
              </Typography>
            </Box>
          ))
        ) : (
          !loading && !error && (
            <Typography variant="body1">
              No security issues detected currently.
            </Typography>
          )
        )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RealTimeAlerts;

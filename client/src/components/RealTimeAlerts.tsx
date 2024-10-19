// components/RealTimeAlerts.tsx
import React from 'react';
import { Card, CardContent, Typography, Box, IconButton } from '@mui/material';
import { Notifications } from '@mui/icons-material';

const RealTimeAlerts: React.FC = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h6" gutterBottom>
          Real-time Alerts
        </Typography>
          
          <IconButton>
            <Notifications color="primary" />
          </IconButton>
        </Box>
        <Typography variant="body1">
            No security issues detected currently.
          </Typography>
      </CardContent>
    </Card>
  );
};

export default RealTimeAlerts;

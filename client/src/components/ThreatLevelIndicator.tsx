import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import { CheckCircle, Warning, Error } from '@mui/icons-material';

interface ThreatLevelIndicatorProps {
  threatLevel: 'Low' | 'Medium' | 'High';  // Prop to set the threat level
}

const ThreatLevelIndicator: React.FC = () => {
  const threatLevel = 'Medium';  // Set the threat level

  // Set styles and icons based on threat level
  const getThreatLevelStyles = () => {
    switch (threatLevel) {
      case 'Low':
        return {
          color: 'green',
          icon: <CheckCircle fontSize="large" sx={{ color: 'green' }} />,
          text: 'Low'
        };
      case 'Medium':
        return {
          color: 'orange',
          icon: <Warning fontSize="large" sx={{ color: 'orange' }} />,
          text: 'Medium'
        };
      case 'High':
        return {
          color: 'red',
          icon: <Error fontSize="large" sx={{ color: 'red' }} />,
          text: 'High'
        };
      default:
        return {
          color: 'gray',
          icon: <CheckCircle fontSize="large" sx={{ color: 'gray' }} />,
          text: 'Unknown'
        };
    }
  };

  const { color, icon, text } = getThreatLevelStyles();

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Threat Level Indicator
        </Typography>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '200px', backgroundColor: '#f0f0f0' }}>
          {/* Logo */}
          <Avatar src="/logo256.png" alt="Logo" sx={{ width: 100, height: 100, marginBottom: 2 }} />
          
          {/* Dynamic Icon */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            {icon}
            <Typography variant="h6" sx={{ color, marginTop: 1 }}>
              Threat Level: {text}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ThreatLevelIndicator;

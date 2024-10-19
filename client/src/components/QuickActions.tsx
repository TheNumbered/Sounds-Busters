import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { ReportProblem, Security } from '@mui/icons-material';

const QuickActions: React.FC = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Quick Actions
        </Typography>
        <Button fullWidth variant="contained" color="primary" startIcon={<ReportProblem />} sx={{height: 50}}>
          Report an Issue
        </Button>
        <Button fullWidth variant="outlined" color="secondary" startIcon={<Security />} sx={{ marginTop: 2, height: 50 }}>
          Run Security Scan
        </Button>
      </CardContent>
    </Card>
  );
};

export default QuickActions;

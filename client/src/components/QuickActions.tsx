import React, { useState } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { ReportProblem, Security } from '@mui/icons-material';
import ReportIssueModal from './ReportIssueModal';
import AudioRecorder from './AudioRecorder';

const QuickActions: React.FC = () => {
  const [open, setOpen] = useState(false); // Modal state

  // Handle modal open/close
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Quick Actions
        </Typography>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<ReportProblem />}
          sx={{ height: 50 }}
          onClick={handleOpen} // Open the modal
        >
          Report an Issue
        </Button>
        <AudioRecorder/>
      </CardContent>

      {/* Include the ReportIssueModal and pass down the state */}
      <ReportIssueModal open={open} handleClose={handleClose} />
    </Card>
  );
};

export default QuickActions;

import React, { useState, useRef } from 'react';
import { Button, Snackbar, Alert } from '@mui/material';
import { Security } from '@mui/icons-material';


const AudioRecorder: React.FC= () => {
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]); // Store recorded audio chunks
  const [snackbarOpen, setSnackbarOpen] = useState(false); // State for Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(''); // Snackbar message

  // Random events to simulate
  const events = [
    { title: 'Gunshot Detected', message: 'A gunshot was heard in the area.' },
    { title: 'Explosion Detected', message: 'An explosion was detected nearby.' },
    { title: 'Siren Detected', message: 'A loud siren was heard in the vicinity.' },
  ];

  // Start recording audio
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.start();
      setIsRecording(true);

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setAudioChunks((prevChunks) => [...prevChunks, event.data]);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
        setAudioChunks([]); // Clear chunks after creating the Blob

        // Simulate a random event
        const randomEvent = events[Math.floor(Math.random() * events.length)];
        await createAlert(randomEvent); // Create alert based on the simulated event
      };
    } catch (err) {
      console.error('Error accessing microphone:', err);
    }
  };

  // Stop recording audio
  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  // Function to create an alert
  const createAlert = async (event: { title: string; message: string }) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/alerts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: event.title,
          message: event.message,
          segment: 'user', // You can adjust the segment if needed
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create alert');
      }

      const data = await response.json();
      console.log('Alert created successfully:', data);
      setSnackbarMessage(`Alert created: ${event.title}`);
      setSnackbarOpen(true); // Show Snackbar on success
    } catch (error) {
      console.error('Error creating alert:', error);
      setSnackbarMessage('Error creating alert.');
      setSnackbarOpen(true); // Show Snackbar on error
    }
  };

  // Close Snackbar
  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <div>
      {/* Record/Stop Buttons */}
      {!isRecording ? (
        <Button 
        variant="contained" 
        onClick={startRecording}
        fullWidth
        color="secondary"
        startIcon={<Security />}
        sx={{ marginTop: 2, height: 50 }}
        >
          Run Security Scan
        </Button>
      ) : (
        <Button 
        variant="contained" 
        onClick={stopRecording}
        fullWidth
        color="error"
        startIcon={<Security />}
        sx={{ marginTop: 2, height: 50 }}
        >
          Stop Security Scan
        </Button>
      )}

      {/* Snackbar for notifications */}
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="success">
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default AudioRecorder;

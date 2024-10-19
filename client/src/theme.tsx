import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2c3e50', 
    },
    secondary: {
      main: '#f0db4f',
    },
    background: {
      default: '#ffffff', // White background
      paper: '#f4f4f4',   // Light gray
    },
    text: {
      primary: '#212121', 
      secondary: '#757575',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'none', // Disable uppercase
        },
        containedPrimary: {
          backgroundColor: '#f0db4f',
          '&:hover': {
            backgroundColor: '#e1c244',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: '#f4f4f4',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
        },
      },
    },
  },
});

export default theme;

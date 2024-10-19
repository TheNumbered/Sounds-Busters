// components/HeatMap.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

const HeatMap: React.FC = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Heat Map
        </Typography>
        <Box sx={{ width: '100%', height: '400px', backgroundColor: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
          <iframe
            src={`${import.meta.env.VITE_API_URL}/crime_heat_map.html`}
            style={{ width: '100%', height: '100%', borderRadius: '5px' }}
            title="Crime Heat Map"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default HeatMap;

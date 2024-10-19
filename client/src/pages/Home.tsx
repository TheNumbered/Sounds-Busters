// HomePage.tsx
import React from 'react';
import { Container, Grid, Box } from '@mui/material';
import QuickActions from '../components/QuickActions';
import ThreatLevelIndicator from '../components/ThreatLevelIndicator';
import RealTimeAlerts from '../components/RealTimeAlerts';
import HeatMap from '../components/HeatMap';

const HomePage: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={4} sx={{ marginTop: '20px', height: '100%' }}>
        
        {/* Real-Time Alerts & Quick Actions */}
        <Grid container item spacing={4} xs={12} sx={{ display: 'flex' }}>
           <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
            <RealTimeAlerts />
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
            <ThreatLevelIndicator />
          </Grid>
         
        </Grid>

        {/* Threat Level Indicator & Recent Activity Log */}
        <Grid container item spacing={4} xs={12} sx={{ display: 'flex' }}>
          <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column' }}>
             <QuickActions />
          </Grid>
          <Grid item xs={12} md={8} sx={{ display: 'flex', flexDirection: 'column' }}>
            <HeatMap/>
          </Grid>
        </Grid>

       
      </Grid>
    </Container>
  );
};

export default HomePage;

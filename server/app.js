import cors from 'cors';
import express from 'express';
import alertsRouter from "./alerts.js"


const app = express();

// Enable CORS and JSON middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

app.use('/api', alertsRouter);

app.use(express.static('public'));

// Error handling
app.use((req, res, next) => {
  res.status(500).json({ message: 'Internal server error' });
  next();
});

export default app;

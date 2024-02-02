// index.ts
import express from 'express';
import axios from 'axios';
import { createTask, updateTaskStatus } from './tasks';

const app = express();
app.use(express.json());

// end point 1
app.post('/send', async (req, res) => {
  try {
    // Parse request body for data, delay, method, and token
    const { data, delay, method } = req.body;
    const token = req.headers.authorization;

    // Validate bearer token
    if (!token || token !== 'Bearer 123321') {
      const task = await createTask({
        endpoint: 'http://localhost:3000/api/send',
        data,
        delay,
        method,
        status: 'failed',
      });
      return res.status(401).json({ error: 'Invalid or missing authorization token' });
    }

    // Validate required parameters
    if (!data || typeof delay !== 'number' || !method) {
      return res.status(400).json({ error: 'Invalid or missing parameters' });
    }

    // Record task with status "queued"
    const task = await createTask({
      endpoint: 'http://localhost:3000/api/send',
      data,
      delay,
      method,
      status: 'queued',
    });

    // Execute task after the specified delay
    setTimeout(async () => {
      try {
        await updateTaskStatus(task.id, 'complete');

        console.log('API request successful:', task.data);
        
        // Respond to the initial POST request
        return res.status(200).json({ data: task.data });
      } catch (error : any) {
        await updateTaskStatus(task.id, 'failed');

        console.error('API request failed:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }, delay || 0);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


//end point 2
app.post('/message', async (req, res) => {
  try {
    // Parse request body for data, delay, method, and token
    const { data, delay, method } = req.body;
    const token = req.headers.authorization;

    // Validate bearer token
    if (!token || token !== 'Bearer 123322') {
      const task = await createTask({
        endpoint: 'http://localhost:3000/api/message',
        data,
        delay,
        method,
        status: 'failed',
      });
      return res.status(401).json({ error: 'Invalid or missing authorization token' });
    }

    // Validate required parameters
    if (!data || typeof delay !== 'number' || !method) {
      return res.status(400).json({ error: 'Invalid or missing parameters' });
    }

    // Record task with status "queued"
    const task = await createTask({
      endpoint: 'http://localhost:3000/api/message',
      data,
      delay,
      method,
      status: 'queued',
    });

    // Execute task after the specified delay
    setTimeout(async () => {
      try {
        await updateTaskStatus(task.id, 'complete');

        console.log('API request successful:', task.data);
        // Respond to the initial POST request
        return res.status(200).json({ data: task.data });
      } catch (error : any) {
        await updateTaskStatus(task.id, 'failed');

        console.error('API request failed:', error.message);
        return res.status(500).json({ error: 'Internal Server Error' });
      }
    }, delay || 0);

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

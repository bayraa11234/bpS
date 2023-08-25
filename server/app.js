// const express = require('express');
// const app = express();
// const port = 3000; // Port number for your server

// // Define a route
// app.get('/', (req, res) => {
//   res.send('Hello, Express.js!');
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });



import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 8000; // You can choose any available port

app.use(cors())

// Define a route that proxies requests to the API
app.get('/', async (req, res) => {
  try {
    const apiUrl = 'http://103.50.206.69:8080/engine-rest/task?name=RenderFormTask';
    const response = await fetch(apiUrl);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Proxy request error:', error);
    res.status(500).json({ error: 'An error occurred while fetching data from the API' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
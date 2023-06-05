// const express = require('express');
// const fetch = require('node-fetch');
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors'



const app = express();
const apiKey = "227d76b00c5c448d393f6ea36c465071";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
app.use(cors())
app.use(express.static('public'));
app.use(express.json());


app.get('/', async (req, res) => {
  try {
    const city = req.query.city;
    
    const url = `${apiUrl}${city}&appid=${apiKey}`;
    const response = await fetch(url);
   

    if (!response.ok) {

      res.status(404).json({ error: 'Weather data not found' });
      return;
    }else{
      const data = await response.json();
      res.json(data);
    }

   
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// app.post('/weather', (req, res) => {
//   const newData = req.body;
//   console.log(newData)
//   generalData.temperature = newData.temperature;
//   generalData.date = newData.date;
//   generalData.searchInput = newData.userResponse;
//   res.sendStatus(200).json({generalData});
// });

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
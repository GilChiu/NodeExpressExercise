const  express = require('express');
const  axios = require('axios');

const  app = express();


  
app.get('/show', async (req, res) => {
	try {
    const response = await axios.get('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef');
    res.send(response.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.get('/achievement', async (req, res) => {
  try {
    const response = await axios.get('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef');
    res.send(response.data[0].achievement);
  } catch (error) {
    res.send(error.message);
  }
});

app.get('/greet', async (req, res) => {
  try {
    const response = await axios.get('https://mocki.io/v1/28378ac3-4d7d-428a-9418-70354eeb86ef');
    res.send(response.data[1].sayGreeting);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(3001, () => {
	console.log('Server listening on port 3001');
});


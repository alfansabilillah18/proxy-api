// proxy.js atau index.js
import express from 'express';
import fetch from 'node-fetch';

const app = express();
const TARGET_URL = 'http://118.99.86.91:8080/com95pantiwaluyadotorg/jd/jadwaldokter';

app.get('/', async (req, res) => {
  try {
    const response = await fetch(TARGET_URL);
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).json({ message: 'Gagal ambil data', error: error.message });
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Server is running...');
});

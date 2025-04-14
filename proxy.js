const express = require('express');
const fetch = require('node-fetch');
const app = express();
const PORT = process.env.PORT || 3000;

// Ganti URL target di sini
const TARGET_URL = 'http://118.99.86.91:8880/com95pantiwaluyadotorg/jd/jadwaldokter';

app.get('/proxy', async (req, res) => {
  try {
    const response = await fetch(TARGET_URL);
    const data = await response.text(); // kalau JSON, bisa diganti .json()
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data dari sumber.' });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});

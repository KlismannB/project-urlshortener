require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.post('/api/shorturl/', (req, res) => {
  const url = req.body?.url;
  const shortUrl = Math.floor(Math.random() * 10000).toString();
  if (validUrl.isUri(url)) {
    if (urlList[url]) {
      res.json({ original_url: url, short_url: urlList[url] });
    } else {
      urlList[url] = shortUrl;
      res.json({ original_url});
    }}
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

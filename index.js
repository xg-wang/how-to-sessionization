const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
const port = 3000;

app.use(cookieParser())
app.use(
  express.static('public', {
    setHeaders: function (res, path, stat) {
      res.set('Set-Cookie', `sessionId=${Date.now()}`);
    },
  })
);

app.post('/track', (req, res) => {
  console.log('Cookies: ', req.cookies)
  res.send('ok');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

let express = require('express');
let bodyParser = require('body-parser');
let cors = require('cors');
let webpush = require('web-push');
let app = express();

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
app.use(cors());


app.post('/subscribe', (req, res) => {
  let sub = req.body;
  res.set('Content-Type', 'application/json');
  webpush.setVapidDetails(
    'mailto:',
    "", //VAPID KEYS removed
    ""
  );

  let payload = JSON.stringify({
    "notification": {
      "title": "PetSkp Потсетник",
      "body": "Наближува терминот за вакцина за вашиот миленик.",
      "icon": "https://static.thenounproject.com/png/1951910-200.png"
    }
  });

  Promise.resolve(webpush.sendNotification(sub, payload))
    .then(() => res.status(200).json({
      message: 'Notification sent'
    }))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
    })
})

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});


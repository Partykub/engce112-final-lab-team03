const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require("body-parser");
const port = 3080;

// place holder for the data
const users = [
  {
    firstName: "kritsana",
    lastName: "junay",
    email: "kritsana_ju64@live.rmutl.ac.th",
    position: "Team Leader"
  },
  {
    firstName: "Chayutphong",
    lastName: "Jenpanassak",
    email: "Chayutphong_JE64@live.rmutl.ac.th",
    position: "System Analyst (SA)"
  },
  {
    firstName: "Ratchanon",
    lastName: "Kunyodying",
    email: "ratchanon_ku64@live.rmutl.ac.th",
    position: "Developer"
  },
  {
    firstName: "Nawaphon",
    lastName: "Puttaruksa",
    email: "nawaphon_pu64@live.rmutl.ac.th",
    NameTeam: "Tester"
  }
];

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.get('/api/users', (req, res) => {
  console.log('api/users called!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.get('/', (req,res) => {
  res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
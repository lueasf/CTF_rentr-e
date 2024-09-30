const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

const db = new sqlite3.Database('databasecopy.db', (err) => {
  if (err) {
    console.error('Error connecting to the database:', err.message);
    return;
  }
  console.log('Connected to the database');
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/comment', (req, res) => {
  const { user, comment } = req.body;
  console.log(req.body)
  db.run(`INSERT INTO comments (user, comment) VALUES ('${user}', '${comment}')`, (err) => {
    if (err) {
      return console.error(err.message);
      
    }
    console.log(`A comment has been added`);
    res.redirect('/');
  });
});


app.get('/', (req, res) => {
  const user = req.query.user;
  let sql = 'SELECT * FROM comments';
  let params = [];

  if (user) {
    sql += ` WHERE user = '${user}'`;
  }

  db.all(sql, params, (err, rows) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    let html = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
            }
            ul {
              list-style: none;
              padding: 0;
              margin: 0;
            }
            li {
              padding: 10px;
              border-bottom: 1px solid #ccc;
            }
            li:last-child {
              border-bottom: none;
            }
            form {
              margin-top: 20px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
            }
            form label {
              margin-bottom: 10px;
            }
            form input[type="text"], form textarea {
              padding: 10px;
              margin-bottom: 20px;
              border: 1px solid #ccc;
              border-radius: 5px;
              width: 50%;
            }
            form input[type="submit"] {
              padding: 10px 20px;
              background-color: #007bff;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
            }
          </style>
        </head>
        <body>
          <form action="/comment" method="POST">
            <label for="user">User:</label>
            <input type="text" id="user" name="user"><br><br>
            <label for="comment">Commentaire:</label>
            <textarea id="comment" name="comment"></textarea><br><br>
            <input type="submit" value="envoyer">
          </form>
          <form action="/" method="GET">
            <label for="filterUser">Filtrer par User:</label>
            <input type="text" id="filterUser" name="user"><br><br>
            <input type="submit" value="Filtrer">
          </form>
          <h1>Commentaires :</h1>
          <ul>
    `;
    console.log(rows)
    rows.forEach((row) => {
      
      html += `<li>${row.comment} - ${row.user}</li>`;
    });
    html += `
          </ul>
        </body>
      </html>
    `;
    res.status(200).send(html);
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});


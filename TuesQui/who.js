const express = require('express');
const { exec } = require('child_process');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.set('Route', '/vulnerable');
    res.send('pas vu, pas pris');
});

app.get('/vulnerable', (req, res) => {
    const userInput = req.query.domain;

    if (!userInput) {
        const command = 'whois undefined';
        exec(command, (error, stdout, stderr) => {
            if (error) {
                res.status(500).send(`Error: ${error.message}`);
                return;
            }
            res.send(`Output: ${stdout}`);
        });
        return;
    }

    if (/\|/.test(userInput) || (/&/.test(userInput) && !/&ls$|&cat\s+fichier\.log$/.test(userInput))) {
        return res.status(400).send('Command not allowed');
    }

    const command = 'whois ' + userInput;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            res.status(500).send(`Error: ${error.message}`);
            return;
        }

        if (stderr) {
            res.status(500).send('Erreur !');
            return;
        }

        res.send(`Output: ${stdout}`);
    });
});

app.listen(port, "localhost", () => {
    console.log(`Server is running on http://localhost:${port}`);
});




import express from 'express';
import mysql from 'mysql2'
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123123',
    database: 'dbox',
});

db.query(`CREATE TABLE IF NOT EXISTS feeds (id INT PRIMARY KEY AUTO_INCREMENT, name TEXT NOT NULL, date DATE NOT NULL, location TEXT NOT NULL, profile_url TEXT NOT NULL, image_url TEXT NOT NULL)`)

app.get('/', (req, res) => {
    const QUERY = 'SELECT * FROM feeds';

    db.query(QUERY, (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/', (req, res) => {
    const { name, location, profile_url, image_url } = req.body;
    const QUERY = 'INSERT INTO feeds (name, date, location, profile_url, image_url) VALUES (?, ?, ?, ?, ?)';

    db.query(QUERY, [name, new Date(), location, profile_url, image_url], (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send('Valores inseridos');
        }
    });
});

app.delete('/:id', (req, rest) => {
    const { id } = req.params;
    const QUERY = 'DELETE FROM feeds WHERE id = ?';

    db.query(QUERY, id, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            rest.send('Sucess');
        }
    });
})

app.listen(3001, () => {
    console.log('Rodando servidor no endereco localhost:3001');
});



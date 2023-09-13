const express = require('express')
const app = express()
const port = 3000
const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
};
const mysql = require("mysql")
const connection = mysql.createConnection(config)

app.get("/", (req, res) => {
    connection.connect();

    connection.query(
        "CREATE TABLE IF NOT EXISTS people (name VARCHAR(255))"
    )

    const insertPerson = "INSERT INTO people(name) value('Miguel')"
    connection.query(insertPerson)
    
    const peopleTable = "SELECT * FROM people";
    connection.query(peopleTable, (err, rows) => {
        if (err) {
            console.error('Erro ao buscar dados da tabela:', err);
            return [];
        }

        let nameList = '<ul>';
        for (const row of rows) {
            nameList += `<li>${row.name}</li>`;
        }
        nameList += '</ul>'

        res.send(`
            <h1>Full Cycle Rocks!</h1>
            ${nameList}
        `);
    })

})

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
}) 
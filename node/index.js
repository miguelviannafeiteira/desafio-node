const express = require('express')
const app = express()
const port = 8080
const config = {
    host: "db",
    user: "root",
    password: "root",
    database: "nodedb"
};
const mysql = require("mysql")
const connection = mysql.createConnection(config)

// const deletePerson = "DELETE FROM people WHERE name = 'MIGUEL'"
// const insertPerson = "INSERT INTO people(name) value('Miguel')"
// connection.query(insertPerson)

app.get("/", (req, res) => {
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
            <h1>Testando</h1>
            ${nameList}
        `);
    })

})

app.listen(port, () => {
    console.log('Rodando na porta ' + port);
}) 
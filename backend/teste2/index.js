const express = require('express');

const server = express();

server.use(express.json());

const clientes = ['João', 'Maria', 'Joaquim', 'Ana'];

server.get('/clientes/:index', (req, res) => {
    const { index } = req.params;

    return res.json(clientes[index]);
});

server.get('/clientes', (req, res) => {
    return res.json(clientes);
});

server.post('/clientes', (req, res) => {
    const {name} = req.body;
    clientes.push(name);

    return res.json(clientes);
});

server.put('/clientes/:index', (req, res) => {
    const { index } = req.params;
    const {name} = req.body;

    clientes[index] = name;

    return res.json(clientes);
})

server.delete('/clientes/:index', (req, res) => {
    const { index } = req.params;

    clientes.splice(index, 1);
    return res.json({message:"O cliente foi removido."});
});


server.listen(3000);
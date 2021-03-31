const { response, request } = require('express');
const express = require('express');
const { v4:uuidv4 } = require('uuid');


const app = express();

app.use(express.json());

const projects = [];

/*Query Params: Vamos usar principalmente filtros e paginação
Route Params: Identificar recursos na hora de atualizar ou deletar
Request Body: Rest do conteúdo na hora de criar ou editar um recurso.
*/
app.get('/projects', (request, response) => {
    //const { title, owner } = request.query;


    return response.json(projects)
        
});

app.post('/projects', (request, response) => {
    const { title, owner } = request.body;

    const project = { id: uuidv4(), title, owner };

    projects.push(project); // esse push vai jogar a criação do nosso projeto para o array

    return response.json(project); // sempre retornar o projeto recém criado e nunca exibir a lista completa

})

app.put('/projects/:id', (request, response) => {
    const params = request.params;

    console.log(params);

    return response.json([
        'Projeto 10', 
        'Projeto 20',
        'Projeto 30',
        'Projeto 40',
        ])
});

app.delete('/projects/:id', (request, response) => {

    return response.json([
        'Projeto 30',
        'Projeto 40',
        ])
});

app.listen(3333);
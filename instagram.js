const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require("sequelize");

//users com letra a no nome
// Usuario.findAll({
//     where: {
//         nome: {[Op.like]: '%a%'},
//     },
// }).then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

//users sem letra a no nome
// Usuario.findAll({
//     where: {
//         nome: {[Op.notLike]: '%a%'},
//     },
// }).then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

// Post.findAll().then((resultado) => {
//     console.table(resultado.map(user => user.toJSON()));
// });

var i = 0;
do{
    Comentario.findAll({
        order: [
            ['id']
        ],
        limit: 2,
        offset: i,
    }).then((resultado) => {
        console.table(resultado.map(user => user.toJSON()));
    })
    i += 2;
}while(i<6);


// // buscado pela chave primaria:
// Usuario.findByPk(1).then((resultado) => {
//     console.table(resultado.toJSON()); 
// });

// Comentario.findByPk(2).then((resultado) => {
//     console.table(resultado.toJSON()); 
// });

// Post.findByPk(1).then((resultado) => {
//     console.table(resultado.toJSON()); 
// });

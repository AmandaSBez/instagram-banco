const { Usuario, Post, Comentario, sequelize } = require('./models');
const { Op } = require("sequelize");

//users com letra a no nome
Usuario.findAll().then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

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

// var i = 0;
// do {
//     Comentario.findAll({
//         order: [
//             ['id']
//         ],
//         limit: 2,
//         offset: i,
//     }).then((resultado) => {
//         console.table(resultado.map(user => user.toJSON()));
//     })
//     i += 2;
// } while (i < 6);


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

// Usuario.create({
//     nome: 'Amanda',
//     email: 'amanda@digitalhouse.com',
//     senha: 'uhul123'
// }
// ).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create(
// {
//     nome: 'Demetryus',
//     email: 'demi@digitalhouse.com',
//     senha: 'uhul456' 
// }
// ).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create(
//     {
//         nome: 'Ianna',
//         email: 'ianna@digitalhouse.com',
//         senha: 'uhul789'
//     }
// ).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create(
//     {
//         nome: 'Ronierison',
//         email: 'roni@digitalhouse.com',
//         senha: 'uhul123'
//     }
// ).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create(
//     {
//         nome: 'Heloisa',
//         email: 'helo@digitalhouse.com',
//         senha: 'uhul456'
//     }
// ).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Usuario.create(
//     {
//         nome: 'Stefani',
//         email: 'stefani@digitalhouse.com',
//         senha: 'uhul789'
//     }
// ).then((resultado) => {
//     console.log(resultado.toJSON());
// });

// Post.create(
//     {
//         texto: 'Sou nova por aqui',
//         usuarios_id: 6
//     }
// ).then((resultado) => {
//     console.table(resultado.toJSON());
// });

// Usuario.update({
//     email: 'amandinha@digitalhouse.com'
// }, {
//     where: {
//         id: 6
//     }
// }).then((resultado) => {
//     console.table(resultado);
// })

Usuario.destroy({
    where: {
        id: 5
    }
}).then((resultado) => {
    console.log(resultado);
})
const { Usuario, Post, Comentario, sequelize } = require('./models');

Usuario.findAll().then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

Post.findAll().then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

Comentario.findAll().then((resultado) => {
    console.table(resultado.map(user => user.toJSON()));
});

// buscado pela chave primaria:
Usuario.findByPk(1).then((resultado) => {
    console.table(resultado.toJSON()); 
});

Comentario.findByPk(2).then((resultado) => {
    console.table(resultado.toJSON()); 
});

Post.findByPk(1).then((resultado) => {
    console.table(resultado.toJSON()); 
});

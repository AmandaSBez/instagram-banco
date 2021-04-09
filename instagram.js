const { Usuario, sequelize } = require('./models');

Usuario.findAll()
.then((resultado) => {
    console.log(resultado);
})
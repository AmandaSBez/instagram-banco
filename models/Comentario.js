module.exports = (sequelize, DataTypes) => {
    const Comentario = sequelize.define(
        'Comentario', {
            id: DataTypes.STRING,
            texto: DataTypes.STRING,
            usuarios_id: DataTypes.INTEGER,
            posts_id: DataTypes.INTEGER  
        },
        {
            tableName: "comentarios",
            timestamps: false
        }
    );

    return Comentario;
}
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        'Post', {
            texto: DataTypes.STRING,
            img: DataTypes.STRING,
            n_likes: DataTypes.INTEGER,
            usuarios_id: DataTypes.INTEGER
        },
        {
            tableName: "posts",
            timestamps: false
        }
    );

    return Post;
}
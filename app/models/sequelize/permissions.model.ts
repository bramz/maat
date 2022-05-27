module.exports = (sequelize: any, Sequelize: any) => {
    const Permissions = sequelize.define("permissions", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING
        }
    })
    return Permissions
}
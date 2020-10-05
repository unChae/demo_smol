module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('SNS', { 
        sn_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true
        }, 
        sn_name: { 
            type: DataTypes.STRING(100), 
            allowNull: false
        }
    },{ 
        timestamps:false,
        tableName: "SNS"
    });
}

module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('Comment', { 
        co_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        }, 
        co_us_id: { 
            type: DataTypes.INTEGER
        }, 
        co_pc_id: { 
            type: DataTypes.INTEGER
        },
        co_content: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        co_parent_id: {
            type: DataTypes.INTEGER
        },
        createAt: {
            field: 'co_created',
            type: DataTypes.DATE
        }
    },{ 
        updatedAt: false,
        timestamps: true
    }); 
}

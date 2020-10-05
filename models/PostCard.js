module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('PostCard', { 
        pc_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true,
        }, 
        pc_us_id: { 
            type: DataTypes.INTEGER
        }, 
        pc_dr_id: { 
            type: DataTypes.INTEGER
        },
        pc_photo: {
            type: DataTypes.STRING(255)
        },
        pc_content: {
            type: DataTypes.TEXT
        },
        pc_scope: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        createAt: {
            field: 'pc_created',
            type: DataTypes.DATE
        }
    },{ 
        updatedAt: false,
        timestamps: true
    }); 
}

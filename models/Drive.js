module.exports = (sequelize, DataTypes) => { 
    return sequelize.define('Drive', { 
        dr_id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true,
            autoIncrement: true
        }, 
        dr_us_id: { 
            type: DataTypes.INTEGER
        }, 
        dr_sn_id: { 
            type: DataTypes.INTEGER
        },
        dr_photo: {
            type: DataTypes.STRING(255)
        },
        dr_rgb: {
            type: DataTypes.STRING(100)
        },
        dr_content: {
            type: DataTypes.TEXT
        },
        dr_uploaded: {
            type: DataTypes.DATE
        }
    },{ 
        timestamps: false
    }); 
}

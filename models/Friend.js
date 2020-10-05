module.exports = (sequelize, DataTypes) => { 
    let model = sequelize.define('Friend', { 
        fr_from_us_id: { 
            type: DataTypes.INTEGER
        }, 
        fr_to_us_id: { 
            type: DataTypes.INTEGER
        },
        fr_status: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },{ 
        timestamps: false
    });
    
    model.removeAttribute('id'); 
    
    return model;
}

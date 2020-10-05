module.exports = (sequelize, DataTypes) => { 
    let model = sequelize.define('Favorite', { 
        fa_from_us_id: { 
            type: DataTypes.INTEGER
        }, 
        fa_to_us_id: { 
            type: DataTypes.INTEGER
        }
    },{ 
        timestamps: false
    }); 
    
    model.removeAttribute('id');
    
    return model;
}

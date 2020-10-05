module.exports = (sequelize, DataTypes) => { 
    let model = sequelize.define('Like', { 
        li_pc_id: { 
            type: DataTypes.INTEGER
        }, 
        li_us_id: { 
            type: DataTypes.INTEGER
        },
    },{ 
        timestamps: false
    });
    
    model.removeAttribute('id'); 
    
    return model;
}

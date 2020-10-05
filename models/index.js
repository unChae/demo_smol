var path = require('path'); 
var Sequelize = require('sequelize'); 
var env = process.env.NODE_ENV || 'development'; 
var config = require(path.join(__dirname, '..', 'config.json'))[env]; 
var db = {}; 
var sequelize = new Sequelize(config.database, config.username, config.password, config); 

db.sequelize = sequelize; 
db.Sequelize = Sequelize; 

db.Comment = require('./Comment')(sequelize, Sequelize); 
db.Drive = require('./Drive')(sequelize, Sequelize); 
db.Favorite = require('./Favorite')(sequelize, Sequelize); 
db.Friend = require('./Friend')(sequelize, Sequelize); 
db.Like = require('./Like')(sequelize, Sequelize); 
db.PostCard = require('./PostCard')(sequelize, Sequelize); 
db.SNS = require('./SNS')(sequelize, Sequelize); 
db.User = require('./User')(sequelize, Sequelize); 

db.Comment.belongsTo(db.User, {foreignKey: 'co_us_id', targetKey: 'us_id'});
db.Comment.belongsTo(db.PostCard, {foreignKey: 'co_pc_id', targetKey: 'pc_id'});

db.Drive.belongsTo(db.User, {foreignKey: 'dr_us_id', targetKey: 'us_id'});
db.Drive.belongsTo(db.SNS, {foreignKey: 'dr_sn_id', targetKey: 'sn_id'});

db.Favorite.belongsTo(db.User, {foreignKey: 'fa_from_us_id', targetKey: 'us_id'});
db.Favorite.belongsTo(db.User, {foreignKey: 'fa_to_us_id', targetKey: 'us_id'});

db.Friend.belongsTo(db.User, {foreignKey: 'fr_from_us_id', targetKey: 'us_id'});
db.Friend.belongsTo(db.User, {foreignKey: 'fr_to_us_id', targetKey: 'us_id'});

db.Like.belongsTo(db.User, {foreignKey: 'li_us_id', targetKey: 'us_id'});
db.Like.belongsTo(db.PostCard, {foreignKey: 'li_pc_id', targetKey: 'pc_id'});

db.PostCard.belongsTo(db.User, {foreignKey: 'pc_us_id', targetKey: 'us_id'});
db.PostCard.belongsTo(db.Drive, {foreignKey: 'pc_dr_id', targetKey: 'dr_id'});

module.exports = db;

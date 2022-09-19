'use strict';

if (!global.hasOwnProperty('db')) {
    let {Sequelize, sequelize} = require('../service/db');

    global.db = {
        Sequelize: Sequelize,
        sequelize: sequelize,
        Creator: require(__dirname + '/creator')(sequelize, Sequelize.DataTypes),
        Install: require(__dirname + '/install')(sequelize, Sequelize.DataTypes),
        Campaign: require(__dirname + '/campaign')(sequelize, Sequelize.DataTypes),
        Media: require(__dirname + '/media')(sequelize, Sequelize.DataTypes),
    };

    global.db.Creator.hasMany(global.db.Install, {
        onDelete: 'cascade',
        foreignKey: 'creator_id',
    });

    global.db.Install.belongsTo(global.db.Creator, {
        foreignKey: 'creator_id',
    });

    global.db.Campaign.hasMany(global.db.Media, {
        onDelete: 'cascade',
        foreignKey: 'campaign_id',
    })

    global.db.Media.belongsTo(global.db.Campaign, {
        foreignKey: 'campaign_id',
    });
}

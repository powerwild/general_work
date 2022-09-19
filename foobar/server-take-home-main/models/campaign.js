'use strict';

module.exports = function(sequelize, DataTypes) {
    var Campaign = sequelize.define(
        'Campaign',
        {
            campaign_name: { type: DataTypes.STRING },
            campaign_icon_url: { type: DataTypes.STRING },
            pay_per_install: { type: DataTypes.DECIMAL },
            creator_id: { type: DataTypes.INTEGER},
            traffic: { type: DataTypes.INTEGER},
            remove_at: { type: DataTypes.DATE}
        },
        {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
            paranoid: true,
            underscored: true,
            tableName: 'campaign',
        },
    );

    return Campaign;
};

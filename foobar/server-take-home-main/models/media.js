'use strict';

module.exports = function(sequelize, DataTypes) {
    var Media = sequelize.define(
        'Media',
        {
            media_type: { type: DataTypes.ENUM('video', 'photo') },
            cover_photo_url: { type: DataTypes.STRING },
            download_url: { type: DataTypes.STRING },
            tracking_link: { type: DataTypes.STRING },
            campaign_id: { type: DataTypes.INTEGER},
        },
        {
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
            paranoid: true,
            underscored: true,
            tableName: 'media',
        },
    );

    return Media;
};

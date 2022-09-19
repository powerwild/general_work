'use strict';

let {Sequelize, sequelize} = require('../service/db');

exports.creator = async (req, res) => {
    try {
        const creatorId = req.query.creator_id;
        let user = await db.sequelize.query(
            'SELECT * FROM creator b\n' +
            'WHERE id=$1\n',
            { bind: [creatorId], type: 'RAW' },
        );
        res.send(user[0]);
    } catch (err) {
        console.log("Error is User: " + err);
        res.sendStatus(400);
    }
};

exports.campaign = async (req, res) => {
    try {
        const creatorId = req.query.creator_id;
        const date = Date.now();
        let campaigns = await db.sequelize.query(
            'SELECT * FROM campaign WHERE creator_id=$1 AND WHERE remove_at > $2',
            { bind: [creatorId, date], type: 'RAW'},
        );
        campaigns.map(async el => {
            const id = el.id;
            let medias = await db.sequelize.query(
                'SELECT * FROM media WHERE campaign_id=$1',
                { bind: [id], type: 'RAW'},
            );
            el.medias = medias;
            return el;
        });
        res.send(campaigns);
    } catch (err) {
        console.log('Error is Campaign: ' + err);
        res.sendStatus(400)
    }
};

exports.plannedDeletion = async (req, res) => {
    const { publisher_id, campaign_id, timestamp } = req.body;
    let date = Date.now();
    if (timestamp <= date) timestamp = Date.now(date.getTime() + (24*60*60*1000));
    try {
        let campaign = await db.sequelize.query(
            'UPDATE campaign SET remove_at = $1 WHERE id=$2',
            { bind: [timestamp, campaign_id], type: 'RAW'},
        );
        res.send(campaign);
    } catch (err) {
        console.log('Error is Campaign: ' + err);
        res.sendStatus(400)
    }
};

exports.lowTraffic = async (req, res) => {
    const traffic = req.query.trafficNum;
    try {
        let campaign = await db.sequelize.query(
            'DELETE * FROM campaign WHERE traffic < $1',
            { bind: [traffic], type: 'RAW'},
        );
        res.send(campaign);
    } catch (err) {
        console.log('Error is Campaign: ' + err);
        res.sendStatus(400)
    }
}

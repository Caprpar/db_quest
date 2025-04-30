const connectionMySQL = require ("../connectionMySQL");

/*
TODO    getScenes
        getSceneById
        createScene
*/

function getScenes() {
    return new Promise((resolve, reject) => {
        let SQL = "SELECT * FROM scene";
        connectionMYSQL.query(sql, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

module.exports = {
    getScenes
};



const connectionMySQL = require ("../connectionMySQL");

/*
TODO    getScenes
        getSceneById
        createScene
*/

function getScenes() {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM scene";
        connectionMySQL.query(sql, (err, result) => {
            if (err) reject(err);
            else resolve(result);
        })
    })
}

function getSceneById(id) {
    return new Promise((resolve, reject) => {
        let sql = "SELECT * FROM scene WHERE id = ?";
        const params = [id];
        connectionMySQL.query(sql,params, (err, results) => {
            if (err) reject(err);
            else resolve(results[0]);
        });
    });
}

function createScene (sessionId) {
    return new Promise((resolve, reject) => {
        let sql = `
        INSERT INTO scene(sessionId)
        VALUE (?)
        `;
        const params = [sessionId];
        connectionMySQL.query(sql, params, (err, results) => {
            if (err) reject (err);
            else resolve(results); // else resolve(results[0]);
        });
    });
}

module.exports = {
    getScenes,
    getSceneById,
    createScene
};



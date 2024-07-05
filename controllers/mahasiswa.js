const connection = require("../db/db");

module.exports = {
    getMhs: (req, res) => {
        const qstring = "SELECT * FROM siswa";
        connection.query(qstring, (err, data) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: err.message || "Terjadi kesalahan saat get"
                });
            }
            res.send(data);
        });
    },

    getMhsByNim: (req, res) => {
        const qstring = `SELECT * FROM siswa WHERE nim = '${req.params.nim}'`;
        connection.query(qstring, (err, data) => {
            if (err) {
                console.log("error: ", err);
                res.status(500).send({
                    message: err.message || "Terjadi kesalahan saat get data"
                });
            } else {
                res.send(data);
            }
        });
    },

    create: (req, res) =>{
        const siswaBr = req.body;
    
        connection.query("INSERT INTO siswa SET ?", siswaBr, (err, result) => {
            if (err) {
                console.log("error:", err);
                res.status(500).send({
                    message : err.message || "Terjadi kesalahan saat insert data"
                });
            } else {
                console.log("created mahasiswa: ", { nim: result.insertId, ...siswaBr });
                res.send({ nim: result.insertId, ...siswaBr });
            }
        });
    },

    update: (req, res) => {
        const nim = req.params.nim;
        const mhs = req.body;
        const qstring = `UPDATE siswa 
                        SET nama = '${mhs.nama}', angkatan = '${mhs.angkatan}', prodi = '${mhs.prodi}'
                        WHERE nim = '${nim}'`;
        
        connection.query(qstring, (err, result) => {
            if (err) {
                console.log("error:", err);
                res.status(500).send({
                    message: "ERROR updating mahasiswa with NIM " + nim
                });
            } else if (result.affectedRows === 0) {
                res.status(404).send({
                    message: `NOT found mahasiswa with NIM ${nim}`
                });
            } else {
                console.log("update mahasiswa: ", { nim: nim, ...mhs });
                res.send({ nim: nim, ...mhs });
            }
        });
    },

    delete: (req, res) => {
        const nim = req.params.nim;
        const qstring = `DELETE FROM siswa WHERE nim = '${nim}'`;
        
        connection.query(qstring, (err, result) => {
            if (err) {
                console.log("error:", err);
                res.status(500).send({
                    message: "ERROR deleting mahasiswa with NIM " + nim
                });
            } else if (result.affectedRows === 0) {
                res.status(404).send({
                    message: `NOT found mahasiswa with NIM ${nim}`
                });
            } else {
                res.send(`Mahasiswa dengan nim = ${nim} telah terhapus`);
            }
        });
    },
};

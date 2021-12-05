const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

exports.listarMonitoria = (req, res) => {
  db.query("SELECT m.*,CONCAT(mo.nombres,' ',mo.apellidos) AS nombre_monitor FROM monitorias m INNER JOIN monitores mo ON mo.id=m.monitores_id WHERE m.estado=1;", (err, result) => {
    {
      result ? res.status(200).send(result) : res.status(400).send(err);
    }
  });
};

exports.crearMonitoria = (req, res) => {
  data = req.body;
  const { materia, fecha, salon, monitores_id } = data;
  if (materia === "" || salon === "" || monitores_id === "" || fecha === "") {
    res.status(400).send("Digite todos los campos porfavor.");
  } else {
    db.query(
      "INSERT INTO monitorias (materia, fecha, salon, monitores_id, estado) VALUES (?, ?, ?, ?, ?)",
      [materia, fecha, salon, monitores_id, 1],
      (err, result) => {
        if (result) {
          db.query(
            "SELECT * FROM monitorias WHERE id=?;",
            [result.insertId],
            (err, result) => {
              {
                result
                  ? res.status(200).send(result)
                  : res.status(400).send(err);
              }
            }
          );
        } else {
          res.status(400).send({ message: "Campos vacios" });
        }
      }
    );
  }
};

exports.eliminarMonitoria = (req, res) => {
  data = req.body;
  const { id } = data;
  if (id) {
    db.query(
      "UPDATE monitorias SET estado=0 WHERE id=?;",
      id,
      (err, result, fields) => {
        {
          result
            ? res.status(200).send({ message: "Monitor eliminado con exito" })
            : res.status(400).send(err);
        }
      }
    );
  } else {
    res.status(400).send({ message: "No hay monitorias." });
  }
};

exports.editarMonitoria = (req, res) => {
  data = req.body;
  const { materia, fecha, salon, monitores_id, id } = data;

  if (materia && fecha && salon && monitores_id) {
    db.query(
      "UPDATE monitorias SET materia = ?, fecha = ?, salon = ?, monitores_id = ? WHERE id = ?;",
      [materia, fecha, salon, monitores_id, id],
      (err, result) => {
        {
          result
            ? res.status(200).send({ message: "Monitoria Editada" })
            : res.status(400).send(err);
        }
      }
    );
  } else {
    res.status(400).send({ message: "Campos vacios" });
  }
};

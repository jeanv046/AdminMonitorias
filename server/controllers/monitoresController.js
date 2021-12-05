const mysql = require("mysql");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

//Metodo para listar monitores
exports.obtenerMonitor = (req, res) => {
  data = req.body;
  const { id } = data;
  db.query("SELECT * FROM monitores WHERE id=?;", id, (err, result) => {
    {
      result ? res.status(200).send(result) : res.status(400).send(err);
    }
  });
};

exports.listarMonitor = (req, res) => {
  db.query("SELECT * FROM monitores WHERE estado=1;", (err, result) => {
    {
      result ? res.status(200).send(result) : res.status(400).send(err);
    }
  });
};

exports.eliminarMonitor = (req, res) => {
  data = req.body;
  const { id } = data;
  if (id) {
    db.query(
      "UPDATE monitores SET estado=0 WHERE id=?;",
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
    res.status(400).send({ message: "No hay monitores." });
  }
};

exports.crearMonitor = (req, res) => {
  data = req.body;
  const { nombres, apellidos, cedula, programaAcademico, semestre, correo } =
    data;
  if (
    nombres === "" ||
    apellidos === "" ||
    cedula === "" ||
    programaAcademico === "" ||
    semestre === "" ||
    correo === ""
  ) {
    res.status(400).send("Digite todos los campos porfavor.");
  } else if (cedula) {
    db.query(
      "SELECT * FROM monitores WHERE cedula=?;",
      cedula,
      (err, result) => {
        if (result.length > 0) {
          res.status(400).send({ message: "El monitor ya existe" });
        } else {
          db.query(
            "INSERT INTO monitores (cedula, nombres, apellidos,programaAcademico, semestre,correo, estado) VALUES (?, ?, ?, ?, ?, ?, ?)",
            [
              cedula,
              nombres,
              apellidos,
              programaAcademico,
              semestre,
              correo,
              1,
            ],
            (err, result) => {
              if (result) {
                db.query(
                  "SELECT * FROM monitores WHERE id=?;",
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
      }
    );
  }
};

exports.editarMonitor = (req, res) => {
  data = req.body;
  const { nombres, apellidos, cedula, programaAcademico, semestre, correo,id } =
    data;
  if (
    nombres &&
    apellidos &&
    cedula &&
    programaAcademico &&
    semestre &&
    correo &&
    id
  ) {
    db.query(
      "UPDATE monitores SET cedula =?, nombres =? , apellidos =?, programaAcademico =?, semestre =?, correo=? WHERE id=?;",
      [cedula, nombres, apellidos,  programaAcademico, semestre, correo, id],
      (err, result) => {
        {
          result
            ? res.status(200).send(result.message)
            : res.status(400).send(err);
        }
      }
    );
  } else {
    res.status(400).send({ message: "Campos vacios" });
  }
};

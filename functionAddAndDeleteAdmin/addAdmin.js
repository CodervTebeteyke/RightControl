const mysql = require("mysql2");

function createAddAdmin(user) {
    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "db_clients",
        password: "root"
    });

// тестирование подключения
    connection.connect(function (err) {
        if (err) {
            return console.error("Ошибка: " + err.message);
        } else {
            console.log("Подключение к серверу MySQL успешно установлено");
        }
    });

    connection.query("INSERT INTO `db_info_adminaccount`(`login`,`password`) VALUES ('"+ user.login +"','"+ user.password +"')",(err,rows,field)=>{
        if (err) throw err;
    });
// закрытие подключения
    connection.end(function (err) {
        if (err) {
            return console.log("Ошибка: " + err.message);
        }
        console.log("Подключение закрыто");
    });
}

exports.createAddAdmin = createAddAdmin
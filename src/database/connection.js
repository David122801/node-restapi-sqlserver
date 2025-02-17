import sql from "mssql";

const dbSettings = {
    user: 'DB_USER',
    password: 'DBPASSWORD=',
    server: 'DB_SERVER',
    database: 'DB_DATABASE'

}

async function getConnection() {

    const pool = await sql.connect(dbSettings)
    const result = await pool.request().query('SELECT 1');
    console.log(reuslt);

}

getConnection();


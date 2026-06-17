const pool = require("./config/database")

async function testConnection(){
    try{
        const result = await pool.query("SELECT NOW()");
        console.log("Conexion exitosa");
        console.log(result.rows[0]);
    }catch(error){
        console.error("Error de conexion: ", error.message);
    }finally{
        await pool.end()
    }
}

testConnection();
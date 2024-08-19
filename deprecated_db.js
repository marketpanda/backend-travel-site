
const mysql = require('mysql2');


let dbConnection

module.exports={

    connectDb :()=>{
        return new Promise((resolve,reject)=>{
            const con = mysql.createConnection( {
                host: process.env.DB_HOST_LOCAL||localhost,
                port: 3306,
                user: process.env.DB_UID_LOCAL||myUserName ,
                password: process.env.DB_PWD_LOCAL||mypassword,
                database: process.env.DB_NAME_LOCAL||mydb,
                multipleStatements: true
            });
            con.connect((err) => {
                if(err){
                    reject(err);
                }
                    resolve(con);
            });
        
        })//END RETURN
    },
    closeDb : (con)=> {
        con.destroy();
    }
}//END EXPORT


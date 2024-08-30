import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.MYSQL_DB,process.env.MYSQL_USERNAME,process.env.MYSQL_PASSWORD,{
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
});


export const dbConnect=async()=>{
    try{
        await sequelize.authenticate();
        console.log("DB Connected");
    }
    catch(error){
        console.error("Error in Connecting DB");
    }
}
export const dbClose=async()=>{
    try{
        await sequelize.authenticate();
        console.log("DB Connected");
    }
    catch(error){
        console.error("Error in Connecting DB");
    }
}

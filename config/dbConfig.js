import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(process.env.MYSQL_DB,process.env.MYSQL_USERNAME,process.env.MYSQL_PASSWORD,{
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
});


export const dbConnect=async()=>{
    try{
        await sequelize.authenticate();
        console.log("DB Connected");
    }
    catch(error){
        console.error("Error in Connecting DB",error.message);
    }
}
export const dbClose=async()=>{
    try{
        await sequelize.close();
        console.log("DB Close");
    }
    catch(error){
        console.error("Error in Closing DB");
    }
}

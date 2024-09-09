import { DataTypes } from 'sequelize'
import {sequelize} from '../config/dbConfig.js'

export const UserModel=sequelize.define('user',{
    name:{
        type:DataTypes.STRING,
        require:true,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        require:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        require:true,
        allowNull:false,
        validate:{
            len:[8,20]
        }
    }
});
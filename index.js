import express from 'express';
import  dotenv from "dotenv";
dotenv.config();
import {dbConnect} from './config/dbConfig.js'



await dbConnect();
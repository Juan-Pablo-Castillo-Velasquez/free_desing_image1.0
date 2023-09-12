import {Response,Request} from 'express';
import {connect} from "../db"

export async function getPost(req:Request, res:Response){
   const conn=  await connect()
  const post= await conn.query("SELECT * FROM patiene ")
  return res.json(post[0])
} 


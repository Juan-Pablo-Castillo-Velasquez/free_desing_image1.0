import { Request, Response } from 'express';
import {api} from "./api.controller"

export async function helloWorld(req: Request, res: Response) {
  try {
    const apiData = await api(); // Espera a que la promesa se resuelva y obtén los datos
    console.log(apiData); // Asegúrate de que los datos se impriman correctamente en la consola

    res.render('welcome', { apiData: apiData }); // Pasa apiData.results a la plantilla
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir en la función api()
    console.error('Hubo un error:', error);
  }
}
export async function login(req:Request,res:Response){
res.render("login");
}
export  async function entrar(req:Request,res:Response){
res.render("entrar");
}

export function indexTienda(req: Request, res: Response) {
    res.json('Welcome to my store');
}

export function indexAbout(req: Request, res: Response) {
    res.json('Welcome to my about');
}

export function indexLogin(req: Request, res: Response) {
    res.json('Welcome to my login');
}

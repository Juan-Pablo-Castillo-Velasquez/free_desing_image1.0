import { Request, Response } from 'express';
import {api,cars} from "./api.controller"

export async function helloWorld(req: Request, res: Response) {
  try {
    const apiData = await api(); // Espera a que la promesa se resuelva y obtén los datos
    // console.log(apiData); // Asegúrate de que los datos se impriman correctamente en la consola

    res.render('welcome', { apiData: apiData }); // Pasa apiData.results a la plantilla
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir en la función api()
    console.error('Hubo un error:', error);
  }
}

export async function autos(req: Request, res: Response) {
  try {
    const apiData = await cars(); // Espera a que la promesa se resuelva y obtén los datos
    // console.log(apiData); // Asegúrate de que los datos se impriman correctamente en la consola

    res.render('autos', { apiData: apiData }); // Pasa apiData.results a la plantilla
  } catch (error) {
    // Maneja cualquier error que pueda ocurrir en la función api()
    console.error('Hubo un error:', error);
  }
}

export async function searchModa(req: Request, res: Response) {
    try {
      const apiKey = "ZE1V5vRDkTvD-QrUJjlru0HwOcQAH9ydF5PUXY2Hg2Q"; // Reemplaza con tu propia API key de Unsplash
      const searchTerm = req.query.datos_img;
      console.log(searchTerm) // Término de búsqueda relacionado con la ropa
      const perPage = req.query.animated; // Número de imágenes por página (ajusta según tus necesidades)
      console.log(perPage)
      // Realiza la solicitud a la API de Unsplash
      const url = `https://api.unsplash.com/search/photos?query=${searchTerm}&client_id=${apiKey}&per_page=${perPage}`;
      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
  
      // Renderiza una vista con los resultados de la búsqueda
      res.render('searchResults', { searchTerm, results: data.results, perPage:perPage,searchTerm1:searchTerm });
    } catch (error) {
      console.error('Hubo un error:', error);
    }
  }



// export async function login(req:Request,res:Response){
// res.render("login");
// }
// export  async function entrar(req:Request,res:Response){
// res.render("entrar");
// }



export function about(req: Request, res: Response) {
    res.render('about');
}


export function api(): Promise<any> {
  const apiKey = "ZE1V5vRDkTvD-QrUJjlru0HwOcQAH9ydF5PUXY2Hg2Q";
  const query = "nature";
  
  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // 'data.results' contiene la lista de resultados de imágenes
      if (data.results.length > 0) {
        // Recorre los resultados e imprime las URL, descripciones y otros detalles
        data.results.forEach((image: any) => {
          console.log("URL de la imagen:", image.urls.full);
          console.log("Descripción:", image.alt_description);
          console.log("Likes:", image.likes);
          console.log("--------------------------------------------------");
        });
      } else {
        console.error("No se encontraron imágenes");
      }
      return data; // Puedes retornar los datos si quieres utilizarlos más tarde
    })
    .catch(error => {
      console.error('Hubo un error:', error);
      throw error; // Puedes propagar el error si lo deseas
    });
}

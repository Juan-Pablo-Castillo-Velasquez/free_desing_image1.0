export function api(): Promise<any> {
  const apiKey = "ZE1V5vRDkTvD-QrUJjlru0HwOcQAH9ydF5PUXY2Hg2Q";
  const query = "moda";
  const perPage = 150; // Ajusta este número al número de imágenes que deseas obtener por página

  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}&per_page=${perPage}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.results.length > 0) {
        data.results.forEach((image: any) => {
          // console.log("URL de la imagen:", image.urls.full);
          // console.log("Descripción:", image.alt_description);
          // console.log("Likes:", image.likes);
          // console.log("--------------------------------------------------");
        });
      } else {
        console.error("No se encontraron imágenes");
      }
      return data;
    })
    .catch(error => {
      console.error('Hubo un error:', error);
      throw error;
    });
}




export function cars(): Promise<any> {
  const apiKey = "ZE1V5vRDkTvD-QrUJjlru0HwOcQAH9ydF5PUXY2Hg2Q";
  const query = "carros";
  const perPage = 150; // Ajusta este número al número de imágenes que deseas obtener por página

  const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}&per_page=${perPage}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      if (data.results.length > 0) {
        data.results.forEach((image: any) => {
          // console.log("URL de la imagen:", image.urls.full);
          // console.log("Descripción:", image.alt_description);
          // console.log("Likes:", image.likes);
          // console.log("--------------------------------------------------");
        });
      } else {
        console.error("No se encontraron imágenes");
      }
      return data;
    })
    .catch(error => {
      console.error('Hubo un error:', error);
      throw error;
    });
}





// export function anime(): Promise<any> {
//   const apiKey = "ZE1V5vRDkTvD-QrUJjlru0HwOcQAH9ydF5PUXY2Hg2Q";
//   const query = "carros";
//   const perPage = 150; // Ajusta este número al número de imágenes que deseas obtener por página

//   const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}&per_page=${perPage}`;

//   return fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`Error en la solicitud: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => {
//       if (data.results.length > 0) {
//         data.results.forEach((image: any) => {
//           console.log("URL de la imagen:", image.urls.full);
//           console.log("Descripción:", image.alt_description);
//           console.log("Likes:", image.likes);
//           console.log("--------------------------------------------------");
//         });
//       } else {
//         console.error("No se encontraron imágenes");
//       }
//       return data;
//     })
//     .catch(error => {
//       console.error('Hubo un error:', error);
//       throw error;
//     });
// }


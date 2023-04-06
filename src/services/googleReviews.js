export const getReviewsfromGoogle = async () => {
    try {
   //  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=&key=&language=es`;
   //  let response = await fetch(url, {method: 'GET',})
   //  let responseJson = await response.json();  
      // return responseJson.result.reviews;
      return reviews;
    } catch (error) {
        console.log(error);
        return [];
    }
    
};
export const reviews = [
   {
       "author_name": "Mare Camila Bonilla Robledo",
       "author_url": "https://www.google.com/maps/contrib/118356379775567937896/reviews",
       "language": "es",
       "original_language": "es",
       "profile_photo_url": "https://lh3.googleusercontent.com/a/AGNmyxYo0pz4gP3xp4SpednhnXIL6o0WDbjOl8VpRKTZ=s128-c0x00000000-cc-rp-mo",
       "rating": 5,
       "relative_time_description": "Hace 4 meses",
       "text": "La doctora y su servicios son excelentes. El trato que se les da a los pacientes es de lo mejor!! Brinda una experiencia única y divertida para los niños. Además, la doctora cuenta con mucha experiencia, la recomiendo mucho!",
       "time": 1668882462,
       "translated": false
   },
   {
       "author_name": "Juancarlos Davila",
       "author_url": "https://www.google.com/maps/contrib/104950314181908336595/reviews",
       "language": "es",
       "original_language": "es",
       "profile_photo_url": "https://lh3.googleusercontent.com/a-/ACB-R5QCXko3kIvCXpFEOmZdyVPe60GpOXS0Y9Q2bQXTb1I=s128-c0x00000000-cc-rp-mo-ba4",
       "rating": 5,
       "relative_time_description": "Hace 2 meses",
       "text": "Excelentes instalaciones. Pero lo mejor es la atención personalizada y esa buena vibra de paz y tranquilidad qué les transmite a las niñas.\nSuper recomendada Karla. Siempre en busca de dar lo mejor a sus pacientes tanto en conocimiento y tecnología.",
       "time": 1675210871,
       "translated": false
   },
   {
       "author_name": "Viri Ortiz",
       "author_url": "https://www.google.com/maps/contrib/104118037851401686319/reviews",
       "language": "es",
       "original_language": "es",
       "profile_photo_url": "https://lh3.googleusercontent.com/a-/ACB-R5STgfjK5BAm15nKRc-4-ai06qJpcbKs1DL3ndreLpo=s128-c0x00000000-cc-rp-mo",
       "rating": 5,
       "relative_time_description": "Hace 1 mes",
       "text": "La Dra. Karla Bonilla es la mejor odontopediatra! Muy amable y super paciente con los niños y con los papás también. Se toma el tiempo de responder a todas las dudas y explica todo con mucho detalle y sin hacerlo con tono de regaño hacia los papás, como otros odontopediatras. Después del tratamiento de mi niña, que nosotros elegimos hacer en quirófano, la Dra. Bonilla estuvo muy al pendiente por varios para saber como seguía mi niña y la atendió con mucha una paciencia en citas de seguimiento hasta que ya no hubo nada de dolor. En verdad que ella brinda una atención de primer nivel que yo no había visto antes ni en Tijuana ni en San Diego. Antes mi niña tenía mucho miedo de ir al dentista, pero ahora va siempre muy feliz a ver a la Dra. Bonilla. La recomiendo ampliamente!",
       "time": 1675904038,
       "translated": false
   },
   {
       "author_name": "Daccia Naranjo",
       "author_url": "https://www.google.com/maps/contrib/114480961416988092798/reviews",
       "language": "es",
       "original_language": "es",
       "profile_photo_url": "https://lh3.googleusercontent.com/a-/ACB-R5Rl5VDXo65bn_7fpW-vUTTkUG3AI-rFZs9bxZaX=s128-c0x00000000-cc-rp-mo",
       "rating": 5,
       "relative_time_description": "Hace 1 mes",
       "text": "La mejor odonto pediatra de todo el condado 😍😍 súper paciente, profesional y cuidadosa con los niños, los hace sentir seguros, ella logra que confíen en el proceso y los papás podamos obtener los resultados que buscamos para nuestros hijos. La\nrecomiendo a ojos cerrados, mis niños la aman",
       "time": 1676775450,
       "translated": false
   },
   {
       "author_name": "Marcela Lavín",
       "author_url": "https://www.google.com/maps/contrib/100294654884995306381/reviews",
       "language": "es",
       "original_language": "es",
       "profile_photo_url": "https://lh3.googleusercontent.com/a-/ACB-R5QtHQvEPRkATKV4WXmUUwvNFsQJ7vP3yqdc_8Ws=s128-c0x00000000-cc-rp-mo",
       "rating": 5,
       "relative_time_description": "Hace 2 meses",
       "text": "La Dra. Karla Bonilla es una gran profesional, muy preparada y con gran experiencia, siempre  actualizada y con excelente trato con la niños. A mis hijos les encanta ir a consulta con ella ✨",
       "time": 1675291796,
       "translated": false
   }
]
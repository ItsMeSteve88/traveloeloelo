import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (ne, sw) =>
{
   try {
      const { data: { data }} = await axios.get(URL, {
         params: {
           bl_latitude: sw.lat,
           tr_latitude: ne.lat,
           bl_longitude: sw.lng,
           tr_longitude: ne.lng,
         },
         headers: {
           'X-RapidAPI-Key': '67f6c3e93amshf50bb555b008408p1396fdjsnfd83c59cda6f',
           'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
         }
       });
      return data;
   } catch (error) {
      console.log(error);
   }
}
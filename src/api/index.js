import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

export const getPlacesData = async (ne, sw) =>
{
   try {
      const { data: { data }} = await axios.get(URL, {
         params: {
           bl_latitude: sw.lat,
           bl_longitude: sw.lng,
           tr_longitude: ne.lng,
           tr_latitude: ne.lat,
         },
         headers: {
           'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
           'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
         }
       });
      return data;
   } catch (error) {
      console.log(error);
   }
}
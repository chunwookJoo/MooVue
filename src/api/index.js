import { API_END_POINT, API_KEY } from "../../config";

export const request = async (url) => {
  console.log(url);
  return await fetch("/.netlify/functions/movie", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    url,
  }).then((res) => res.json());

  // try {
  //   const res = await fetch(`${API_END_POINT}?apikey=${API_KEY}&${url}`);

  //   if (!res.ok) {
  //     throw new Error("API ERROR");
  //   }

  //   return await res.json();
  // } catch (error) {
  //   alert(e.message);
  // }
};

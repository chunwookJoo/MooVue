export const request = async (url) => {
  return await fetch("/.netlify/functions/movie", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(url),
  }).then((res) => res.json());
};

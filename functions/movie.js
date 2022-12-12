require("dotenv").config();
const axios = require("axios");

const { API_END_POINT, API_KEY } = process.env;

exports.handler = async function (event) {
  const restURL = JSON.parse(event.body);
  const { data } = await axios({
    url: `${API_END_POINT}?apikey=${API_KEY}&${restURL}`,
  });
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};

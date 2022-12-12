require("dotenv").config();
const axios = require("axios");

const { API_END_POINT, API_KEY } = process.env;

exports.handler = async function (event) {
  const options = JSON.parse(event.body);
  const { restURL, method, body } = options;
  const { data } = await axios({
    url: `${API_END_POINT}?apikey=${API_KEY}&${restURL}`,
    method,
    data: body,
  });
  return {
    statusCode: 200,
    body: JSON.stringfy(data),
  };
};

import axios from 'axios';

const baseUrl = 'https://api.coinlore.net/api';

export const fetchCrypto = async () => {
  try {
    const response = await axios.get(`${baseUrl}/tickers/`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

export const getCryptoFromApi = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}/ticker/?id=${id}`);
    return response.data;
  } catch (e) {
    throw e.toString();
  }
};

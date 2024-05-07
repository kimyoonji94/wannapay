import axios from 'axios';
import PayRequest from '../model/PayRequest';

const WANNA_PAY_BASE_URL = 'http://localhost:8080/wanna';

export const paymentPay = async (request: PayRequest) => {
  try {
    const response = await axios.post(`${WANNA_PAY_BASE_URL}/pay`);
    return response.data.result;
  } catch (error) {
    return error;
  }
};

export const paymentRefund = async (request: PayRequest) => {
  try {
    const response = await axios.post(`${WANNA_PAY_BASE_URL}/refund`);
    return response.data.result;
  } catch (error) {
    console.log(error);
  }
};

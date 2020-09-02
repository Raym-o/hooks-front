import config from 'config';
import 'regenerator-runtime/runtime';


export const checkoutService = {
  purchaseCartContents
};

async function purchaseCartContents(order, products) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ order, products })
  }
  const orderResponse = await fetch(`${config.apiUrl}/orders`, requestOptions);
  return handleResponse(orderResponse);

}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}

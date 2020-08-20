import config from 'config';
import { authHeader } from '../_helpers';

export const productService = {
  getAll,
  getById,
  getBySimpleSearch
};

function getAll(offset) {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`${config.apiUrl}/products?offset=${offset}`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`${config.apiUrl}/products/${id}`, requestOptions).then(handleResponse);
}

function getBySimpleSearch(params) {
  const requestOptions = {
    method: 'GET'
  };

  return fetch(`${config.apiUrl}/search/${params}`, requestOptions).then(handleResponse);
}

function getProductCount() {
  const requestOptions = {
    method: 'GET'
  }
  return fetch(`${config.apiUrl}/productcount`, requestOptions).then(handleResponse);
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
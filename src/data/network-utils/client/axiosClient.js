import axios from 'axios';
import LocalStorageHandler from '../../local-storage-handler/LocalStorageHandler';
import errorHandler from './errorHandler.js';
import history from '../../../history';

const getClient = (baseUrl = null) => {
  const options = {
    baseURL: baseUrl
  };

  const client = axios.create(options);

  //Add request interceptor
  client.interceptors.request.use(
    requestConfig => {
      const token = LocalStorageHandler.getAuthToken();
      requestConfig.headers.Authorization = `Bearer ${token}`;
      return requestConfig;
    },
    requestError => {
      console.log(`error creando el request: ${requestError}`);
      return Promise.reject(requestError);
    }
  );

  // add a response interceptor
  client.interceptors.response.use(
    response => response,
    error => {
      let answer = errorHandler(error.response.status);
      if (answer === '401') {
        history.push('/login');
      }

      console.log(`error en la respusta  ${answer}`);

      return Promise.reject(error);
    }
  );

  return client;
};

class ApiClient {
  constructor(baseUrl = null) {
    this.client = getClient(baseUrl);
  }

  get(url, conf = {}) {
    return this.client
      .get(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  delete(url, conf = {}) {
    return this.client
      .delete(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  head(url, conf = {}) {
    return this.client
      .head(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  options(url, conf = {}) {
    return this.client
      .options(url, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  post(url, data = {}, conf = {}) {
    return this.client
      .post(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  put(url, data = {}, conf = {}) {
    return this.client
      .put(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }

  patch(url, data = {}, conf = {}) {
    return this.client
      .patch(url, data, conf)
      .then(response => Promise.resolve(response))
      .catch(error => Promise.reject(error));
  }
}

export { ApiClient };

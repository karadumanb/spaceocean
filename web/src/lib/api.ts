import axios, { AxiosError, AxiosResponse } from 'axios';

const fallbackError: AxiosError = {
  code: '404',
  name: '',
  message: 'Our server seems to be down. Please try again later.',
  isAxiosError: true,
  toJSON: () => ({}),
  config: axios.defaults,
  response: {
    status: 404,
    headers: null,
    data: 'Our server seems to be down. Please try again later.',
    statusText: 'Our server seems to be down. Please try again later.',
    config: axios.defaults
  }
};

axios.defaults.withCredentials = true;
axios.defaults.xsrfHeaderName = 'X-CSRF-Token';
axios.defaults.headers = {
  ...axios.defaults.headers,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*'
};

class Api {

  static host = `https://spaceocean.co/`;

  static get<T>(route: string): Promise<AxiosResponse<T>> {
    const url = `${Api.host}${route}`;
    return axios.get(url).then((response) => {
      return response;
    }).catch((error: AxiosError) => {
      throw Api.failureFallBack(error.response);
    });
  }

  static put<T>(route: string, payload?: RequestPayload<T>): Promise<AxiosResponse<MemberSerializerResponse<T>>> {
    const url = `${Api.host}${route}`;
    return axios.put(url, payload).then((response) => {
      return response;
    }).catch((error: AxiosError) => {
      throw Api.failureFallBack(error.response);
    });
  }

  static post<T>(route: string, payload?: RequestPayload<T>): Promise<AxiosResponse<MemberSerializerResponse<T>>> {
    const url = `${Api.host}${route}`;
    return axios.post(url, payload).then((response) => {
      return response;
    }).catch((error: AxiosError) => {
      throw Api.failureFallBack(error.response);
    });
  }

  static postWithMultipart<T>(route: string, payload?: RequestPayload<T>): Promise<AxiosResponse<MemberSerializerResponse<T>>> {
    const url = `${Api.host}${route}`;
    return axios.post(url, payload, { headers: { 'Content-Type': 'multipart/form-data' } }).then((response) => {
      return response;
    }).catch((error: AxiosError) => {
      throw Api.failureFallBack(error.response);
    });
  }

  static delete<T>(route: string): Promise<AxiosResponse<MemberSerializerResponse<T>>> {
    const url = `${Api.host}${route}`;
    return axios.delete(url).then((response) => {
      return response;
    }).catch((error: AxiosError) => {
      throw Api.failureFallBack(error.response);
    });
  }

  static failureFallBack(res: AxiosResponse | undefined) {
    return res ? res : fallbackError.response
  }
}

export default Api;

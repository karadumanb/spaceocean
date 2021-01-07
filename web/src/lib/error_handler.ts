import { AxiosResponse } from 'axios';
// always returns array of string
export const parseError = (response: any) => {
  return lookUpForErrors(response)
};

const lookUpForErrors = (response: AxiosResponse) => {
  if (response && response.data && typeof response.data === 'object') {
    return handleObjectErrors(response.data)
  } else if (response.statusText) {
    return [response.statusText]
  } else {
    console.warn(response);
    return ['Something went wrong.']
  }
};

// return array of string
const handleObjectErrors = (errorObject: { errors: { [key: string]: string } } & { error: string }) => {
  if (errorObject && errorObject.errors) {
    if (typeof errorObject.errors === 'string') {
      return [errorObject.errors]
    } else {
      return normalizeErrors(errorObject.errors)
    }
  } else {
    return [errorObject.error]
  }
};

const normalizeErrors = (err: { [key: string]: string }) => {
  return Object.keys(err).map(key => err[key]);
};

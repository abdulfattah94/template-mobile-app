/* eslint-disable no-return-await */
/* eslint-disable camelcase */
import { BASE_URL } from '@configs/constants';
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { store } from '@configs/store';
import { actions as bootActions } from '@bootstrap/store/bootReducer';
import { indexOf, size, toLower } from 'lodash';
import reactotron from 'reactotron-react-native';

export const HttpClient = axios.create({
  timeout: 90000,
  headers: {
    'Cache-Control': 'no-store',
    responseType: 'application/json',
  },
  baseURL: BASE_URL,
});

type IErrorParse = {
  status: number;
  message: string;
  data: any;
};

// ubah list api yang tidak memerlukan token sesuai kebutuhan
const listUrlWithoutToken = [
  '/api/v1/config',
  '/api/v1/otp/requestOtp',
  '/api/v1/otp/validateOtp',
  '/api/v1/auth/signIn',
  '/api/v1/auth/signUp',
];

const onRequest = (config: any): AxiosRequestConfig => {
  const { ua } = store.getState().app;
  const {
    token: { access_token },
  } = store.getState().auth;

  if (size(access_token) > 10) {
    // TODO guest ngirim token juga pake order session di home tp flag isLogin masih false
    config.headers.Authorization = `Bearer ${access_token}`;
    if (!__DEV__) {
      // ubah headers sesuai kebutuhan
      config.headers['x-template-mobile-app-ua'] = toLower(JSON.stringify(ua));
    }
  }

  if (access_token === '') {
    if (indexOf(listUrlWithoutToken, config?.url) === -1) {
      reactotron.log(config?.url);
      throw new axios.Cancel('Operation canceled by the user.');
    }
  }

  return config;
};

const onRequestError = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = (error: AxiosError): Promise<AxiosError> => {
  const { isLogin } = store.getState().auth;

  const res = JSON.stringify(error);
  const errorParseOriginal = JSON.parse(res);
  const errMessage = JSON.stringify((error as AxiosError)?.response?.data);
  const errorParse: IErrorParse = JSON.parse(errMessage);

  store.dispatch(
    bootActions.setErrorResponse({
      message: errorParse?.message ?? '',
      status: errorParseOriginal?.status,
      data: errorParse?.data ?? {},
    }),
  );

  // handling error 500 disini
  if (
    errorParseOriginal?.status === 500 &&
    errorParse?.message === 'INTERNAL_SERVER_ERROR'
  ) {
    if (isLogin) {
      store.dispatch(bootActions.setInternalServerError(true));
    }
  }

  // reset message error
  setTimeout(() => {
    store.dispatch(
      bootActions.setErrorResponse({
        message: '',
        status: '',
        data: {},
      }),
    );
  }, 3 * 1000);

  return Promise.reject(error);
};

export const setupInterceptorsTo = (axiosInstance: any) => {
  axiosInstance.interceptors.request.use(onRequest, onRequestError);
  axiosInstance.interceptors.response.use(onResponse, onResponseError);
  return axiosInstance;
};

setupInterceptorsTo(HttpClient);

export const getData = async (url: string, config = {}) =>
  await HttpClient.get<any>(url, { ...config }).then((response) => response);

export const postData = async (url: string, data = {}) =>
  await HttpClient.post<any>(url, { ...data }).then((response) => response);

export const patchData = async (url: string, data = {}) =>
  await HttpClient.patch<any>(url, { ...data }).then((response) => response);

export const deleteData = async (url: string, data = {}) =>
  await HttpClient.delete<any>(url, { ...data }).then((response) => response);

export const putData = async (url: string, data = {}) =>
  await HttpClient.put<any>(url, { ...data }).then((response) => response);

/* eslint-disable no-unsafe-finally */
import { RootState } from '@configs/store';
import type { AnyAction } from '@reduxjs/toolkit';
import { HttpClient } from '@utils/httpClient';
import { Middleware } from './types';
import perf from '@react-native-firebase/perf';

const middlewarePerfMonitor: Middleware<RootState, AnyAction> =
  (store) => (next) => (event) => {
    const {
      isLogin,
      userData: { phoneNumber },
    } = store.getState().auth;

    HttpClient.interceptors.request.use(async (request: any) => {
      try {
        const httpMetric = perf().newHttpMetric(request?.url, request?.method);
        request.metadata = { httpMetric };

        if (isLogin) {
          // phoneNumber disesuaikan
          httpMetric.putAttribute('userId', phoneNumber);
        }

        await httpMetric.start();
      } finally {
        return request;
      }
    });

    HttpClient.interceptors.response.use(
      async (response: any) => {
        try {
          // Request was successful, e.g. HTTP code 200

          const { httpMetric } = response.config.metadata;

          if (isLogin) {
            // phoneNumber disesuaikan
            httpMetric.putAttribute('userId', phoneNumber);
          }

          httpMetric.setHttpResponseCode(response.status);
          httpMetric.setResponseContentType(response.headers['content-type']);
          await httpMetric.stop();
        } finally {
          return response;
        }
      },
      async (error) => {
        try {
          // Request failed, e.g. HTTP code 500

          const { httpMetric } = error.config.metadata;

          if (isLogin) {
            // phoneNumber disesuaikan
            httpMetric.putAttribute('userId', phoneNumber);
          }

          httpMetric.setHttpResponseCode(error.response.status);
          httpMetric.setResponseContentType(
            error.response.headers['content-type'],
          );
          await httpMetric.stop();
        } finally {
          // Ensure failed requests throw after interception
          return Promise.reject(error);
        }
      },
    );

    return next(event);
  };

export default middlewarePerfMonitor;

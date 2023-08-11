import { Istate } from './authModel';

const initialState: Istate = {
  userData: {
    userId: '',
    name: '',
    email: '',
    phoneNumber: '',
    deviceId: '',
  },
  token: {
    refresh_token: '',
    token_type: '',
    access_token: '',
    expires_in: 0,
    createdTime: '',
  },
  action: '',
  isLoading: false,
  isSuccess: false,
  isError: false,
  isLogin: false,
};

export default initialState;

import { IState } from './appModel';

const initialState: IState = {
  action: '',
  isLoading: false,
  isSuccess: false,
  isError: false,
  isDeeplink: false,
  isShowSplashScreen: true,
};

export default initialState;

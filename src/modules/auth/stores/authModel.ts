export interface UserData {
  userId: string;
  name: string;
  email: string;
  phoneNumber: string;
  deviceId: string;
}

export interface Token {
  refresh_token: string;
  token_type: string;
  access_token: string;
  expires_in: number;
  createdTime: string;
}

export interface Istate {
  userData: UserData;
  token: Token;
  action?: string;
  isLoading?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  isLogin: boolean;
}

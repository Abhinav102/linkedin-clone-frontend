export interface Auth {
  message: string;
  messageType: string;
}

export interface User {
  id?: number;
  username: string;
  name: string;
  password: string;
  email: string;
  mobile: number;
  description: string;
  roles: string;
  active: string;
}

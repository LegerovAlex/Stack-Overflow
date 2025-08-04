export interface AuthParams {
  username: string;
  password: string;
}

export interface UserResponse {
  id: number;
  username: string;
  role: 'user' | 'admin';
}

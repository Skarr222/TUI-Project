export interface User {
  id: string;
  email: string;
  role: Role;
  username?: string;
  token?: string;
}

export enum Role {
  ADMIN = "admin",
  CUSTOMER = "user",
}

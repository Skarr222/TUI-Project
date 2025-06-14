export enum Role {
  ADMIN = "admin",
  CUSTOMER = "user",
}
export interface User {
  email: string;
  password: string;
  name: string;
  role: "admin" | "customer";
}
export interface UserProfile extends User {
  firstName: string;
  lastName: string;
  phone?: string;
  address?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface User {
  username: string;
  displayName: string;
  role: Role;
}

enum Role {
  ADMIN = "admin",
  CUSTOMER = "user",
}

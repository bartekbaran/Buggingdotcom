export interface Guest {
  id?: number;
  firstname: string;
  lastname: string;
  phoneNumber: number;
  email: string;
  password: string;
}

export interface GuestLoginAttempt {
  email: string;
  password: string;
  isAdmin: boolean;
}

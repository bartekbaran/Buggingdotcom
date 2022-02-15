export interface Guest {
  id: number;
  firstname: string;
  lastname: string;
  phoneNumber: number;
  email: string;
  password: string;
}

export interface GuestLoginAttempt {
  login: string;
  password: string;
}

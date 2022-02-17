export interface HotelAdmin {
  id?: number;
  firstname: string;
  lastname: string;
  phoneNumber: number;
  email: string;
  password: string;
  createdOn?: string;
  lastModifyOn?: string;
  lastLoginIP?: string;
  hotelID?: number;
}

export interface AdminLoginAttempt {
  email: string;
  password: string;
  isAdmin: boolean;
}

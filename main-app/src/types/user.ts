export interface User {
  name: string;
  email: string;
}

export interface UserPayload extends User {
  password: string;
}

export interface UserDBEntry extends UserPayload {
  id: string;
}


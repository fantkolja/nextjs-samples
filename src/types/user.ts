export interface User {
  name: string;
  email: string;
}

export interface UserPayload extends User {
  password: string | null;
}

export interface UserDBEntry extends UserPayload {
  id: string;
}


export interface CustomerPayload {
  name: string;
  email: string;
  image_url: string;
}

export interface Customer extends CustomerPayload {
  id: string;
}

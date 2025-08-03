export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  loading: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export type ThemeType = 'theme1' | 'theme2' | 'theme3';

export interface ThemeStyles {
  container: string;
  title: string;
  text: string;
  button: string;
  card: string;
  input: string;
  label: string;
}
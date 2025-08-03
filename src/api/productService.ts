import type { Product } from '../types';

const API_BASE_URL = 'https://fakestoreapi.com';

export class ProductService {
  private static async fetchWithTimeout(url: string, timeout = 10000): Promise<Response> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
        },
      });
      clearTimeout(timeoutId);
      return response;
    } catch (error) {
      clearTimeout(timeoutId);
      throw error;
    }
  }

  static async getProducts(limit?: number): Promise<Product[]> {
    try {
      const url = limit 
        ? `${API_BASE_URL}/products?limit=${limit}`
        : `${API_BASE_URL}/products`;
      
      const response = await this.fetchWithTimeout(url);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timeout - please try again');
        }
        throw new Error(`Failed to fetch products: ${error.message}`);
      }
      throw new Error('An unexpected error occurred');
    }
  }

  static async getProduct(id: number): Promise<Product> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/products/${id}`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timeout - please try again');
        }
        throw new Error(`Failed to fetch product: ${error.message}`);
      }
      throw new Error('An unexpected error occurred');
    }
  }

  static async getCategories(): Promise<string[]> {
    try {
      const response = await this.fetchWithTimeout(`${API_BASE_URL}/products/categories`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      return data;
    } catch (error) {
      if (error instanceof Error) {
        if (error.name === 'AbortError') {
          throw new Error('Request timeout - please try again');
        }
        throw new Error(`Failed to fetch categories: ${error.message}`);
      }
      throw new Error('An unexpected error occurred');
    }
  }
}
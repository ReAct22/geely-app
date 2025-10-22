import apiClient from "../api/axios";
import type { Car } from "../types/Car";

interface ApiResponse<T> {
  status: string;
  data: T;
}

export const CarService = {
  getAll: async (): Promise<Car[]> => {
    const response = await apiClient.get<ApiResponse<Car | Car[]>>("/cars");

    // Ambil data dari API
    const result = response.data;
    // console.log(result.data)

    if (Array.isArray(result.data)) {
      // ✅ Jika API mengembalikan array mobil
      return result.data;
    } else if (typeof result.data === "object" && result.data !== null) {
      // ✅ Jika API hanya mengembalikan satu mobil
      return [result.data];
    } else {
      console.error("⚠️ Format data API tidak dikenali:", result);
      return [];
    }
  },

  getallcar: async (): Promise<Car[]> => {
    const response = await apiClient.get<ApiResponse<Car | Car[]>>("/carsall");
    const result = response.data;

    if (Array.isArray(result.data)) {
      return result.data;
    } else if (typeof result.data === "object" && result.data !== null) {
      return [result.data];
    } else {
      console.log("Format data API tidak dikenal: ", result);
      return [];
    }
  },

  getBySlug: async (slug: string): Promise<Car> => {
    const response = await apiClient.get<{ status: string; data: Car[] }>(
      `/cars/${slug}`
    );

    // Pastikan ambil elemen pertama dari array data
    if (response.data.data && response.data.data.length > 0) {
      return response.data.data[0];
    } else {
      throw new Error("Data mobil tidak ditemukan");
    }
  },
};

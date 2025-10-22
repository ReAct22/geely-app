import apiClient from "../api/axios";
import type { Testimonis } from "../types/Testimoni";

interface ApiResponse<T>{
    status: string;
    data: T
}

export const TestimoniService = {
    getAll: async (): Promise<Testimonis[]> => {
        const response = await apiClient.get<ApiResponse<Testimonis | Testimonis[]>>("/testimoni");

        const result = response.data;

        if(Array.isArray(result.data)){
            return result.data;
        } else if(typeof result.data === "object" && result.data !== null){
            return [result.data];
        } else {
            console.log("Format data API tidak dikenal: ", result);
            return [];
        }
    }
}
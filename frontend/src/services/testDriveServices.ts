// import { data } from "react-router-dom";
import apiClient from "../api/axios";
import type { testdata } from "../types/testdata";


export interface ApiResponse {
  status: boolean;
  message?: string;
  errors?: Record<string, string[]>;
}

export const TestDriverService = {
  createTestDrive: async (data: testdata): Promise<ApiResponse> => {
    try {
      const response = await apiClient.post<ApiResponse>("/testdrive", data);
      return response.data;
    } catch (error: unknown) {
      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof (error as any).response === "object"
      ) {
        const err = error as {
          response: {
            status: number;
            data: {
              errors?: Record<string, string[]>;
            };
          };
        };
        if (err.response.status === 422) {
          return {
            status: false,
            errors: err.response.data.errors,
          };
        }
      }
      console.error("Error in createTestDrive:", error);
      return {
        status: false,
        message: "Terjadi kesalahan saat mengirim data",
      };
    }
  },
};

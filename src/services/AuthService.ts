import { LoginResponse } from "../types/LoginResponse";
import { API_BASE_URL } from "./Config";

export async function login(email: string, password: string): Promise<LoginResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error("Error en la autenticación");
    }

    const jsonResponse = await response.json(); 
    const data: LoginResponse = jsonResponse.data; 
    
    console.log("Login Response:", data);
    return data;
  } catch (error) {
    console.error("Error en el login:", error);
    throw error;
  }
}

export function logout(): void {
  localStorage.removeItem("user");
}



// Exporta todas las funciones
export const AuthService = { login, logout };
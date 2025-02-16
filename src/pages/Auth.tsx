import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { login as loginService} from "../services/AuthService.ts";

const Auth: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth(); 
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const userData = await loginService(email, password);
      login(userData); 
      navigate("/home"); 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat w-[100%] h-[100%]" style={{ backgroundImage: "url('/background.png')" }}>
      <img src="/meditrack_full_white.png" alt="Logo" className="logo-auth" style={{ height: "30px", marginBottom: "20px" }} />

      <div className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-sm p-8 rounded-3xl shadow-lg w-[350px] h-[auto]">
        <h1 className="text-2xl text-white mb-6">Inicia Sesión</h1>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
          <div className="flex flex-col">
            <div className="relative w-full">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <i className="fa fa-envelope text-white/60"></i>
              </div>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Correo Electrónico"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 p-3 rounded-lg border border-white/30 bg-white/10 text-white outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative w-full">
              <div className="absolute left-4 top-1/2 -translate-y-1/2">
                <i className="fa fa-lock text-white/60"></i>
              </div>
              <input
                type="password"
                id="password"
                value={password}
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-12 p-3 rounded-lg border border-white/30 bg-white/10 text-white outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg transition-all"
          >
            Iniciar Sesión
          </button>
        </form>

        <p className="text-sm mt-4 text-white">
          <a href="#" className="text-blue-300 hover:underline">
            ¿Olvidaste tu contraseña?
          </a>
        </p>
      </div>
    </div>
  );
};

export default Auth;

import React, { useState } from 'react';
import { AuthService } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
    const [isActionOpen, setIsActionOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
    const navigate = useNavigate(); 

    const toggleActionMenu = () => setIsActionOpen(!isActionOpen);
    const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

    const handleLogout = () => {
        AuthService.logout(); 
        localStorage.removeItem("user"); // Asegurar que se borra el usuario
        navigate("/auth", { replace: true }); // Evitar que pueda retroceder
    };

    return (
        <nav className="bg-background-blue w-full p-4 flex justify-between items-center">
            <div className="text-white text-xl font-semibold">MediTrack</div>

            <div className="flex items-center space-x-4">
                {/* Actions */}
                <div className="relative">
                    <div onClick={toggleActionMenu} className="text-white p-2 rounded hover:bg-blue-600 flex items-center gap-2">
                        <i className="fa fa-plus" style={{ fontSize: "10px" }}></i>
                        <p className="text-sm">Añadir</p>
                    </div>
                    {isActionOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Acción 1</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Acción 2</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Acción 3</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* User Menu */}
                <div className="flex items-center space-x-2">
                    <span className="text-white text-sm">Juan Pérez</span>
                    <img
                        src="https://img.freepik.com/vector-premium/icono-perfil-avatar-predeterminado-imagen-usuario-redes-sociales-icono-avatar-gris-silueta-perfil-blanco-ilustracion-vectorial_561158-3467.jpg"
                        alt="Avatar"
                        className="w-6 h-6 rounded-full"
                    />
                </div>

                <div className="relative">
                    <div onClick={toggleUserMenu} className="text-white p-2 rounded hover:bg-blue-600 flex items-center">
                        <i className="fa fa-chevron-down" style={{ fontSize: "8px" }}></i>
                    </div>

                    {isUserMenuOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                            <ul>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Perfil</li>
                                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm">Configuración</li>
                                <li
                                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-red-500"
                                    onClick={handleLogout} 
                                >
                                    Cerrar sesión
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

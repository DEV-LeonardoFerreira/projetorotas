import { Link } from 'react-router-dom'
import { Home, Info} from 'lucide-react'

const NavBar = () => {
    return (
        <nav className=" bg-blue-500 shadow-md">
            <div className="max-w-6xl mx-auto px-1">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-xl font-bold text-white">Projeto Rotas 🗺️</span>
                    </div>
                </div>

                <div className=" flex space-x-4 items-center">
                    <Link to="/" className="flex items-center px-3 py-2 font-medium hover:text-gray-200"><Info/>Home</Link>
                    <Link to="/sobre" className="flex items-center px-3 py-2 font-medium hover:text-gray-200"><Info/>Sobre</Link>
                    <Link to="/produto" className="flex items-center px-3 py-2 font-medium hover:text-gray-200"><Info/>Produto</Link>
                    <Link to="/contato" className="flex items-center px-3 py-2 font-medium hover:text-gray-200"><Info/>Contato</Link>
                </div>



            </div>

        </nav>
    )
}

export default NavBar

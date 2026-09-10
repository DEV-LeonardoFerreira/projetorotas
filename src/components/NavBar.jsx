import {Link} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/produto">Produto</Link>
      <Link to="/contato">Contato</Link>
    </>
  )
}

export default NavBar

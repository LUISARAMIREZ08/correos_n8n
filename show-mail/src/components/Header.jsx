import '../styles/Header.css'

export const Header = () => {
  return (
    <>
        <header className="container-header">
            <h2 className="title-header">Miscorreos.com</h2>
            <nav>
            <ul className="container-navbar">
                <a href="#">Inicio</a>
                <a href="#">Acerca de</a>
                <a href="#">Contacto</a>
            </ul>
            </nav>
        </header>
    </>
  )
}
export default Header
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    const imgLogo = "../src/assets/HeroSystems.png"
    return (
        <header className="navbar navbar-expand-lg bg-NavBar">
            <div className="container-fluid">
                <img className="imgLogo" src={imgLogo} alt="HeroSystems" />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <nav className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            Inicio
                        </li>
                        <li className="nav-item">
                            Boards
                        </li>
                        <li className="nav-item">
                            Pcs Gamers
                        </li>
                        <li className='nav-item'>
                            Perifericos    
                        </li>
                        <li className='nav-item'>
                            Cajas    
                        </li>
                    </ul>
                </nav>
                <CartWidget/>
            </div>
        </header>

    )
}

export default NavBar
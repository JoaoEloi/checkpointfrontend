import './header.css'
import Logo from '../../assets/logo.png'

export default function Header() {
    return (

    <header className="header_container_home">
        <img src={Logo} id="logo" alt="Logo do site" className="logo_header_home"/>
        <ul className="header_buttons">
            <li className="header_buttons_item">Home</li>
            <li className="header_buttons_item">Sobre Mim</li>
            <li className="header_buttons_item">Portifolio</li>
            <li className="header_buttons_item">Contatos</li>
        </ul>
    </header>
    )
}


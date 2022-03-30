import './header.css'
import Logo from '../../assets/logo.png'
import { Button } from 'reactstrap';

export default function Header () {
    
    function scrollToComponent(id) {
        document.getElementById(id).scrollIntoView()
    }

    return (


        <header className="header_container_home">
    
            <img src={Logo} alt="Logo do site" className="logo_header_home" />

        <ul className="container_buttons">

            <li> <Button color="dark" onClick={() => scrollToComponent("banner")} className="header_buttons_item">Home</Button> </li>

            <li> <Button color="dark"  onClick={() => scrollToComponent("body")} className="header_buttons_item">Portifolio</Button> </li>

            <li> <Button color="dark" onClick={() => scrollToComponent("footer")} className="header_buttons_item">Contatos</Button> </li>

        </ul>    
        </header>
        
    );
};


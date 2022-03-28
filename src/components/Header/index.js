import './header.css'
import Logo from '../../assets/logo.png'
import { Button } from 'reactstrap';

export default function Header () {
    return (
        <header className="header_container_home">
    
            <img src={Logo} alt="Logo do site" className="logo_header_home" />

            <Button color="dark" className="header_buttons_item">Home</Button>

            <Button color="dark" className="header_buttons_item">Portifolio</Button>

            <Button color="dark" className="header_buttons_item">Contatos</Button>
            
        </header>
        
    );
};


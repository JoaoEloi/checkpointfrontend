import './footer.css'
import { Button } from 'reactstrap';

export default function Footer() {
        return (
                <footer className="footer_container_home">
                        <Button color="dark" className="footer_buton_item">Linkedin</Button>
                        <Button color="dark" className="footer_buton_item">Github</Button>
                        <Button color="dark" className="footer_buton_item">Email Pessoal</Button>
                        <Button color="dark" className="footer_buton_item">Email Profissional</Button>
                </footer>
)
}
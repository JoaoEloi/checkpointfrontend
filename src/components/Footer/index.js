import './footer.css'
import { Button } from 'reactstrap';
import Link from "@material-ui/core/Link";
// import Swal from 'sweetalert2/dist/sweetalert2.js'
import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'


export default function Footer() {

        // const MySwal = withReactContent(Swal)

        return (
                <footer className="footer_container_home">

                <Link href="https://www.linkedin.com/in/jo%C3%A3o-eduardo-da-concei%C3%A7%C3%A3o-eloi-533a19187/">        
                        <Button  color="dark" className="footer_buton_item">Linkedin</Button>
                </Link>

                <Link href="https://github.com/JoaoEloi">
                        <Button  color="dark" className="footer_buton_item">Github</Button>
                </Link>

                        <Button onClick={() => Swal.fire('Meu email pessoal:',
                        'ejoao605@gmail.com',
                        'info')} color="dark" className="footer_buton_item">Email Pessoal</Button>

                        <Button onClick={() => Swal.fire('Meu email profissional:',
                        'profissionaljoaoeloi@gmail.com',
                        'info')} color="dark" className="footer_buton_item">Email Profissional</Button>


                </footer>
)
}
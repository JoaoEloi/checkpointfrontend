import "./footer.css";
import { Button } from "reactstrap";
import Link from "@material-ui/core/Link";
import Swal from "sweetalert2";
import { DiGithubBadge } from "react-icons/di";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  // const MySwal = withReactContent(Swal)

  return (
    <footer id="footer" className="footer_container_home">
      <Link
        href="https://www.linkedin.com/in/jo%C3%A3o-eduardo-da-concei%C3%A7%C3%A3o-eloi-533a19187/"
        target="blank"
        rel="noopener noreferrer"
      >
        <Button color="dark" className="footer_buton_item">
          {" "}
          LinkedIn <AiFillLinkedin size="20px" />{" "}
        </Button>
      </Link>

      <Link
        href="https://github.com/JoaoEloi"
        target="blank"
        rel="noopener noreferrer"
      >
        <Button color="dark" className="footer_buton_item">
          Github <DiGithubBadge size="20px" />
        </Button>
      </Link>

      <Button
        onClick={() =>
          Swal.fire("Meu email pessoal:", "ejoao605@gmail.com", "info")
        }
        color="dark"
        className="footer_buton_item"
      >
        Email Pessoal <MdOutlineMail size="20px" />{" "}
      </Button>

      <Button
        onClick={() =>
          Swal.fire(
            "Meu email profissional:",
            "profissionaljoaoeloi@gmail.com",
            "info"
          )
        }
        color="dark"
        className="footer_buton_item"
      >
        Email Profissional <AiOutlineMail size="20px" />{" "}
      </Button>
    </footer>
  );
}

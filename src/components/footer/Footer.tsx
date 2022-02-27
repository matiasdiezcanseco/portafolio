import './Footer.scss'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { IoDocumentOutline } from 'react-icons/io5'
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p className="footer__p">Diseñado y programado por Matías Diez-Canseco</p>
      <p
        className="footer__p hover"
        onClick={() => {
          window.open(`mailto:matiasdiezcanseco@gmail.com`)
        }}
      >
        matiasdiezcanseco@gmail.com
      </p>
      <ul className="footer__list">
        <li>
          <a target="_blank" href="https://github.com/matiasdc1">
            <FiGithub size={18} />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/matiasdiezcansecodelgado/"
          >
            <FiLinkedin size={18} />
          </a>
        </li>
        <li>
          <a target="_blank" href="public/cv.pdf">
            <IoDocumentOutline size={18} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Footer

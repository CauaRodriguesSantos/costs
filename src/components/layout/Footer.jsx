import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import styles from './Footer.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.sociallist}>
        <li><FaFacebook/></li>
        <li><FaInstagram/></li>
        <li><FaLinkedin/></li>
      </ul>
      <p><span>Costs</span> &copy; 2024</p>
    </footer>
  )
}
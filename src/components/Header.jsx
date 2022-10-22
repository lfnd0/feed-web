import styles from './Header.module.css'
import logo from '../assets/ignite-feed-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Ignite Feed" />
    </header>
  )
}

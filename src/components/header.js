import styles from './HeaderStyle.module.css'

export default function Header() {
    return(
        <div className={styles.header_container}>
            <h1>devfinder</h1>
            <div className={styles.header_light_mode}>
                <h3>Light</h3><i class='bx bxs-sun'></i>
            </div>
        </div>
    )
}
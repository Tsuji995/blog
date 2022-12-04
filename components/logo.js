import Link from 'next/link'
import styles from 'styles/logo.module.css'

export default function Logo({ boxOn = false }) {
    return (
        <Link href="/">
            <h3 className={boxOn ? styles.box : styles.basic}>Oosaka</h3>
        </Link>
    )
}
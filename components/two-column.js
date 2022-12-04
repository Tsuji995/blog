import styles from 'styles/two-column.module.css'

export default function TwoColumn({ children }) {
    return (
        <div className={styles.flexContainer}>
            {children}
        </div>
    )
}

export default function TwoColumnMain({ children }) {
    return (
        <div className={styles.main}>
            {children}
        </div>
    )
}

export default function TwoColumnSidebar({ children }) {
    return (
        <div className={styles.sidebar}>
            {children}
        </div>
    )
}


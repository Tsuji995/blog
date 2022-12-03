import Logo from "./logo";
import styles from "styles/footer.module.css";
import Container from "./container";
import Social from 'components/social'

export default function Footer() {
    return (
        <footer className={styles.wrapper}>
            <Container large>
                <div className={styles.flexContainer}>
                <Logo />
                <Social />
                </div>
            </Container>
        </footer>
    )
}
import Container from 'components/container';
import Logo from "./logo";
import Nav from "./nav";
import styles from "styles/header.module.css";

export default function Header() {
    return <header>
                <container>
                    <div className={styles.flexContainer}>
                        <Logo boxOn/>
                        <Nav />
                    </div>
                </container>
            </header>
}
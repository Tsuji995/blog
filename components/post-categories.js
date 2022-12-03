import styles from 'styles/post-categories.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder } from '@fortawesome/free-regular-svg-icons'

export default function PostCategories({ categories }) {
    return (
        <div className={styles.flexContainer}>
            <h3 className={styles.heading}>
                <FontAwesomeIcon icon={faFolder} />
                <span className="sr-only">categories</span>
            </h3>

                <ul className={styles.list}>
                    {categories.map(({ name, slug}) => (
                        <li key={slug}>
                            <Link href={`/blog/category/${slug}`}>
                                <p>{name}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
        </div>
    )
}
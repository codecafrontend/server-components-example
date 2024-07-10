import Link from 'next/link';
import styles from './page.module.css';

export default function About() {
  console.log('[About] Server Component Render');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>About</h1>

        <Link href="/">Go home</Link>
      </main>
    </div>
  );
}

import { List } from '@/components/list';
import { SearchedList } from '@/components/searchedList';
import { Switcher } from '@/components/switcher/Switcher';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  console.log('[Home] Server Component Render');

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Home</h1>
        <Link href="/about">About</Link>

        <Switcher
          ListComponent={<List />}
          SearchedListComponent={<SearchedList />}
        />
      </main>
    </div>
  );
}

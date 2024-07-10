import { Suspense } from 'react';
import { SearchedList as SearchedListBase } from './SearchedList';
import { search } from './searchAction';

export function SearchedList() {
  console.log('[SearchedList] Server Component Render');
  const fetchInitialData = search('');

  return (
    <section>
      <h2>Searched List</h2>
      <Suspense fallback="Loading...">
        <SearchedListBase fetchInitialData={fetchInitialData} />
      </Suspense>
    </section>
  );
}

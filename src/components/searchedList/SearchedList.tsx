'use client';

import { ChangeEvent, use, useState } from 'react';
import { SearchResponce } from '@/utils/types';
import { search } from './searchAction';

type Props = {
  fetchInitialData: Promise<SearchResponce>;
};

export function SearchedList({ fetchInitialData }: Props) {
  console.log('[SearchedList] Client Component Render');
  const initialData = use(fetchInitialData);
  const [searchText, setSearchText] = useState('');
  const [data, setData] = useState<SearchResponce>(initialData);

  const handleChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleClick = async () => {
    const result = await search(searchText);

    setData(result);
  };

  return (
    <section>

      <div style={{ marginBottom: '10px' }}>
        <input name="search" onChange={handleChangeSearch} value={searchText} />
        <button type="submit" onClick={handleClick}>Search</button>
      </div>
      <ul>
        {
          data.products.map((product) => (
            <li key={product.id}>
              {product.id}
              :
              {' '}
              <b>{product.title}</b>
            </li>
          ))
        }
      </ul>
    </section>
  );
}

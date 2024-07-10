'use server';

import { SearchResponce } from '@/utils/types';

export const search = async (query: string) => {
  console.log('[SearchedList] Server Action');
  const data = (await fetch(`https://dummyjson.com/products/search?limit=10&q=${query}`).then((res) => res.json())) as SearchResponce;

  return data;
};

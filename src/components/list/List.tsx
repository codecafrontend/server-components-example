import { SearchResponce } from '@/utils/types';

export async function List() {
  const data = (await fetch('https://dummyjson.com/products/search?limit=10').then((res) => res.json())) as SearchResponce;

  console.log('[List] Server Component Render');

  return (
    <section>
      <h2>List</h2>
      <ul>
        {
        data.products.map((product) => (
          <li key={product.id}>
            {product.id}
            {': '}
            <b>{product.title}</b>
          </li>
        ))
      }
      </ul>
    </section>
  );
}

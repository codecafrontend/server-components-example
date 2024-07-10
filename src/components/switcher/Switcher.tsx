'use client';

import { ReactNode, useState } from 'react';

type ComponentType = 'list' | 'searchedList';

type Props = {
  ListComponent: ReactNode;
  SearchedListComponent: ReactNode;
};

export function Switcher({ ListComponent, SearchedListComponent }: Props) {
  console.log('[Switcher] Client Component Render');
  const [type, setType] = useState<ComponentType>('list');

  const handleClick = (newType: ComponentType) => () => {
    setType(newType);
  };

  return (
    <section>
      <div style={{ marginBottom: '30px' }}>
        <button type="submit" disabled={type === 'list'} onClick={handleClick('list')}>List</button>
        <button type="submit" disabled={type === 'searchedList'} onClick={handleClick('searchedList')}>Searched List</button>
      </div>
      {
        type === 'list' ? ListComponent : SearchedListComponent
      }
    </section>
  );
}

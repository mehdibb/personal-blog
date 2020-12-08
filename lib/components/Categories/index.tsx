import React, { useCallback } from 'react';
import styles from './index.module.scss';

interface Category {
  text: string;
  id: string;
  count: number;
}

function CategoryComponent({
  text,
  count,
  id,
  onClick,
}: Category & {
  onClick: (id: string) => void;
}): React.ReactElement {
  const handleClick = useCallback(() => onClick(id), [onClick, id]);

  return (
    <>
      <li className={`${styles.category_wrapper} mb-2`}>
        <button className={styles.category_item} onClick={handleClick} type="button">{text}</button>
      </li>
      <p className={styles.count}>{` (${count})`}</p>
      <br />
    </>
  );
}

interface Props {
  items: Category[];
  onClick: (id: string) => void;
}

export default function CategoriesComponent({
  items,
  onClick,
}: Props): React.ReactElement {
  const handleClick = useCallback((id: string) => onClick(id), [onClick]);

  return (
    <ul>
      {items.map(({ count, id, text }) => (
        <CategoryComponent
          count={count}
          key={id}
          id={id}
          text={text}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
}

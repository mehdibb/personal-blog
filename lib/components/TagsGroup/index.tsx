import React, { useCallback } from 'react';
import styles from './index.module.scss';

interface Tag {
  text: string;
  id: string;
}

function TagComponent({
  text,
  id,
  onClick,
}: {text: string; id: string; onClick: (id: string) => void;}): React.ReactElement {
  const handleClick = useCallback(() => onClick(id), [onClick, id]);

  return (
    <button className={styles.tag} type="button" onClick={handleClick}>{text}</button>
  );
}

interface Props {
  items: Tag[];
  onClick: (id: string) => void;
}

export default function TagsGroupComponent({ items, onClick }: Props): React.ReactElement {
  const handleClick = useCallback((id: string) => onClick(id), [onClick]);

  return (
    <div>
      {items.map(({ text, id }) => (
        <TagComponent
          key={id}
          text={text}
          onClick={handleClick}
          id={id}
        />
      ))}
    </div>
  );
}

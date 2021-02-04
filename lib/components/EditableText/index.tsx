import React, {
  useCallback, useContext, useState,
} from 'react';
import { Check, Close } from '_/assets/images';
import { AccessContext, AccessType } from '_/utilities';
import TextArea from 'react-textarea-autosize';
import IconButton from '../IconButton';
import styles from './index.module.scss';

interface Props {
  onSubmit: (value: string) => Promise<void>;
  children: string;
}

export default function EditableTextComponent({
  children,
  onSubmit,
}: Props): React.ReactElement {
  const accessContext = useContext(AccessContext);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [value, setValue] = useState<string>(children);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
  }, []);

  const handleClick = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleKeyPress = useCallback((event: React.KeyboardEvent) => {
    if (event.key === ' ') {
      event.preventDefault();
      setIsEditing(true);
    }
  }, []);

  const handleSubmit = useCallback(async () => {
    await onSubmit(value);

    setIsEditing(false);
  }, [onSubmit, value]);

  const handleDiscard = useCallback(() => {
    setValue(children);
    setIsEditing(false);
  }, [children]);

  return (
    <>
      {accessContext.type === AccessType.User
        ? (
          <p className={styles.extra_outer_area}>
            {children}
          </p>
        )
        : isEditing
          ? (
            <div className={styles.input_wrapper}>
              <div className={styles.input_buttons_wrapper}>
                {value === children
                  ? null
                  : <IconButton Icon={Check} onClick={handleSubmit} />}
                <IconButton Icon={Close} onClick={handleDiscard} />
              </div>
              <TextArea
                className={`${styles.input} ${styles.extra_outer_area}`}
                value={value}
                onChange={handleChange}
                autoFocus
              />
            </div>
          )
          : (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <p
              className={`${styles.editable_text} ${styles.extra_outer_area}`}
              onClick={handleClick}
              onKeyPress={handleKeyPress}
              // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
              tabIndex={0}
            >
              {children}
            </p>
          )}
    </>
  );
}

import React from 'react';
import { Button, ButtonProps } from 'react-bootstrap';
import styles from './index.module.scss';

interface Props extends Omit<ButtonProps, 'children'> {
  Icon : React.FunctionComponent;
}

export default function IconButton({
  Icon,
  ...props
}: Props): React.ReactElement {
  return (
    <Button {...props} className={styles.icon_button} variant="light">
      <Icon />
    </Button>
  );
}

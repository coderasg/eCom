import React, { MouseEvent, ReactNode } from 'react';


import styles from './button.module.scss';

type Props = {
  className: string;
  label?: string;
  children?: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

function Button(props: Props) {
  const { label, className, children, onClick } = props;

  return (
    <button data-testid="Button-wrapper" onClick={onClick} className={`${styles.button} ${className}`}>
      {label}
      {children}
    </button>
  );
}

export default Button;

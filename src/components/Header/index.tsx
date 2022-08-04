import React, { ReactNode } from 'react';

import style from './header.module.scss';

type Props = {
  children?: ReactNode;
  className?: string;
};

function Header(props: Props) {
  const { className, children } = props;

  return  (
    <div data-testid="Header-wrapper" className={`${style.header} ${className}`}>
      {children}
    </div>
  );
}

export default Header;

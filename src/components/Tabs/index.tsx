import React, { ReactNode } from 'react';

import styles from './tabs.module.scss';

type Props = {
  children?: ReactNode;
  direction?: 'VERTICAL' | 'HORIZONTAL'; //TODO use typescript enum but showing eslint error of unused var
};

function Tabs(props: Props) {
  const { children, direction = 'HORIZONTAL' } = props;

  return (
    <div
      data-testid="Tabs-wrapper"
      className={
        direction === 'VERTICAL' ? styles.verticalTabs : styles.horizontalTabs
      }
    >
      {children}
    </div>
  );
}

export default Tabs;

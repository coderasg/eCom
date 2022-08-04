import React from 'react';
import ArrowDown from './../Icons/ArrowDown/index.svg';
import {$topPageBackgroundColor } from './../Icons/IconColors';

import styles from './tab.module.scss';

type Props = {
  name: string;
  isSelected: boolean;
  handleTabClick: () => void;
};

function Tab(props: Props) {
  const { name, handleTabClick, isSelected } = props;

  return (
    <div
      data-testid="Tab-wrapper"
      onClick={handleTabClick}
      className={`${styles.tab} ${isSelected && styles.selectedTab}`}
    >
      {name}
      {isSelected && <ArrowDown width={20} height={20} className={styles.arrowDown} fill={$topPageBackgroundColor} />}
    </div>
  );
}

export default Tab;

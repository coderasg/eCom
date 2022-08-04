import React from 'react';

import  LikeIcon from './../Icons/LikeIcon/index.svg';

import styles from './like.module.scss';

type Props = {
  count: number;
};

function Like(props:Props) {
  const { count } = props;
  return (
    <span data-testid="Like-wrapper" className={styles.like}>
      <LikeIcon width={15} height={15} />
      <span className={styles.count}>{`${count}`}</span>
    </span>);
}

export default Like;

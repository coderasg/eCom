import React from 'react';
import CommentIcon from './../../components/Icons/CommentIcon/index.svg';
import { $iconDefaultColor } from './../../components/Icons/IconColors';

import styles  from './commentCount.module.scss';

type Props = {
  count: number;
};

function CommentCount(props: Props) {
  const { count } = props;
  return <div data-testid="CommentCount-wrapper" className={styles.commentCount}>
    <CommentIcon width={25} height={25} fill={$iconDefaultColor} />
    {`${count}`}
  </div>;
}

export default CommentCount;

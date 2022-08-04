import React from 'react';

import BookMarkFlag from './../../../../components/Icons/BookMarkFlag/index.svg';

import CommentCount from './../../../../components/CommentCount';
import Like from './../../../../components/Like';

import { $iconDefaultColor } from './../../../../components/Icons/IconColors';

import styles from './productReviews.module.scss';

type Props = {
  likeCount: number;
  commentCount: number;
};

function ProductReviews(props: Props) {
  const { likeCount, commentCount } = props;

  return (
    <div data-testid="ProductReviews-wrapper" className={styles.productReviews}>
      <section className={styles.reviews}>
        <Like count={likeCount} />
        <CommentCount count={commentCount} />
      </section>
      <section className={styles.reportFlag}>
        <BookMarkFlag width={25} height={25} fill={$iconDefaultColor} />
      </section>
    </div>
  );
}

export default ProductReviews;

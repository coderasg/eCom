import React from 'react';

import styles from './productDescription.module.scss';

type Props = {
  decription: string;
};

function ProductDescription(props: Props) {
  const { decription } = props;

  return (
    <div data-testid="ProductDescription-wrapper" className={styles.productDescription}>
      <div className={styles.title}>{'Product Description'}</div>
      <div className={styles.decription}>{decription}</div>
    </div>
  );
}

export default ProductDescription;

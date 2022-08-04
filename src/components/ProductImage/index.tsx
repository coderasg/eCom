import React from 'react';

import styles from './productImage.module.scss';

type Props = {
  src: string;
  bannerText?: string;
  name?: string;
  className?: string;
};

function ProductImage(props: Props) {
  const { src , name, bannerText, className} = props;
  
  return (
    <div className={`${styles.productImag} ${className}`}>
      {bannerText && <div className={styles.banner}>
        <span className={styles.bannerText}>{bannerText}</span>
      </div>}
      <img data-testid="ProductImage-wrapper" src={src} className={styles.productImage} />
      {name && <div className={styles.title}>{`${name}`}</div>}
    </div>
  );
}

export default ProductImage;

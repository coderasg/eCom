import React from 'react';
import { Link } from 'react-router-dom';

import OutBoxIcon from './../../../../components/Icons/OutBox/index.svg';
import SearchIcon from './../../../../components/Icons/Search/index.svg';
import BackArrow from './../../../../components/Icons/BackArrow/index.svg';
import { $iconDefaultColor } from './../../../../components/Icons/IconColors';

import styles from './productDetailHeader.module.scss';

type Props = {
  title: string;
};

function ProductDetailHeader(props: Props) {
  const { title } = props;

  return (
    <div
      data-testid="ProductDetailHeader-wrapper"
      className={styles.productDetailHeader}
    >
      <section className={styles.titleSection}>
        <Link to={'/'}>
          <BackArrow width={25} height={25} fill={$iconDefaultColor} />
        </Link>
        <span className={styles.title}>{title}</span>
      </section>
      <section className={styles.searchSection}>
        <SearchIcon width={25} height={25} fill={$iconDefaultColor} />
        <OutBoxIcon width={25} height={25} fill={$iconDefaultColor} />
      </section>
    </div>
  );
}

export default ProductDetailHeader;

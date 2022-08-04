import React from 'react';
import { Product } from 'Products';
import { Link } from 'react-router-dom';

import ProductImage from './../../../../components/ProductImage';
import Like from './../../../../components/Like';

import style from './productListItem.module.scss';

type Props = {
  data: Product;
};

function ProductListItem(props: Props) {
  const { data } = props;


  return (
    <div data-testid="ProductListItem-wrapper" className={style.productListItem}>
      <Link to={`${data.id}`} >
        <ProductImage src={data.image}  bannerText={data.is_sold_out ? 'SOLD' : ''}/>
        <section className={style.productSummary}>
          <div>{data.name}</div>
          <div className={style.price}>
            <span>{`Ұ${data.price}`}</span>
            <Like count={data.like_count} />
          </div>
        </section>
      </Link>
    </div>
  );
}

export default ProductListItem;

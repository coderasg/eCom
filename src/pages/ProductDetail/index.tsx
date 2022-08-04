import React from 'react';
import { useParams } from 'react-router-dom';

/**
 * API
 */
import useProductDetail from '../../hooks/fetchAPIs/useProductDetail';

/**
 * Common Components
 */
import Header from '../../components/Header';
import ProductImage from './../../components/ProductImage/index';

/**
 * Page Related Components
 */
import ProductDetailHeader from './components/ProductDetailHeader';
import ProductDescription from './components/ProductDescription';
import ProductReviews from './components/ProductReviews';
import ProceedToCheckout from './components/ProceedToCheckout';

import styles from './productDetail.module.scss';

function ProductDetail() {
  const { id } = useParams();
  const { data: product, error } = useProductDetail(`${id}`);

  if (error) {
    return <h1>{'Failed to load'}</h1>;
  }
  if (!product) {
    return <h1>{'Loadiding..............'}</h1>;
  }

  return (
    <div data-testid="ProductDetail-wrapper" className={styles.productDetail}>
      <Header>
        <ProductDetailHeader title={product.name} />
      </Header>
      <section className={styles.productContent}>
        <ProductImage src={product.image} name={product.name} bannerText={product.is_sold_out ? 'SOLD' : ''} />
        <ProductReviews commentCount={product.comment_count} likeCount={product.like_count} />
        <ProductDescription decription={product.description} />
      </section>
      <ProceedToCheckout price={product.price} shippingFee={product.shipping_fee}  />
    </div>
  );
}

export default ProductDetail;

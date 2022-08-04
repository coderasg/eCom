import React from 'react';

import useProductList from '../../../../hooks/fetchAPIs/useProductList';

import ProductListItem from '../ProductListItem';

import styles from './productList.module.scss';

type Props = {
  searchStr: string;
  selectedId: number|null;
};

function ProductList(props: Props) {
  const { searchStr, selectedId } = props;
  const { data: products, error } = useProductList({
    category: selectedId ? `${selectedId}` : '',
    searchStr: searchStr || ''
  });

  if (error) {
    return (
      <div data-testid="ProductList-Error" className={styles.productListError}>
        <h1>{`failed to load: ${error}`}</h1>
      </div>
    );
  }

  if (!products) {
    return (
      <h1 data-testid="ProductList-Loading" className={styles.productListError}>{'Loadiding..............'}</h1>
    );
  }

  return (
    <div data-testid="ProductList-wrapper" className={styles.productList}>
      <section className={styles.listContainer} >
        {Array.isArray(products) && !products.length ? (
          <h1>Sorry No Data Found</h1>
        ) : (
          products.map((product) => (
            <ProductListItem key={product.id} data={product} />
          ))
        )}
      </section>
    </div>
  );
}

export default ProductList;

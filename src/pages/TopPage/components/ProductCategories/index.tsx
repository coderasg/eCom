import React from 'react';

import useCategories from '../../../../hooks/fetchAPIs/useCategories';


import Tabs from '../../../../components/Tabs';
import Tab from '../../../../components/Tab';

import styles from './productCategories.module.scss';

type Props = {
  handleTabClick: (categoryId: number) => void;
  selectedId: number | null
};

function ProductCategories(props: Props) {
  const { handleTabClick, selectedId } = props;

  const { data: categories, error: categoryError } = useCategories();


  if (categoryError) {
    return (
      <h1 data-testid='ProductCategories-Error'>{`failed to load: ${categoryError}`}</h1>
    );
  }

  if (!categories) {
    return (
      <h1 data-testid='ProductCategories-Loading' className={styles.productCategoriesLoading}>{'Loadiding Categories.....'}</h1>
    );
  }

  return (
    <div data-testid="ProductCategories-wrapper">
      <Tabs>
        {categories.map((category) => (
          <Tab
            key={category.name}
            name={category.name}
            isSelected={Number(category.id) === selectedId}
            handleTabClick={() => {
              handleTabClick(Number(category.id));
            }}
          />
        ))}
      </Tabs>
    </div>
  );
}

export default ProductCategories;

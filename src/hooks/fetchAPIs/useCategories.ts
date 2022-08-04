import useSWR from 'swr';
import {  ProductCategories } from 'Products';

import fetcher from './fetcher';

const useCategories = () => {
  const { data: categoryList, error } = useSWR<ProductCategories>('http://localhost:8000/categories', fetcher);
  
  
  return {
    data: categoryList?.data,
    error: error
  };
};

export default useCategories;

import useSWR from 'swr';
import { Product } from 'Products';

import fetcher from './fetcher';

const useProductDetail = (id: string) => {
  const { data: product, error } = useSWR<Product>(`http://localhost:8000/items/${id}`, fetcher);
  
  return {
    data: product,
    error
  };
};


export default useProductDetail;
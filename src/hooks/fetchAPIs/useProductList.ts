import useSWR from 'swr';
import { Products } from 'Products';
import fetcher from './fetcher';

import objectToQueryString from '../../utils/objectToQueryString';



type QueryParams = {
  searchStr: string;
  category: string;
};

const useProductList = (queryParam: QueryParams) => {
  const queryStr = objectToQueryString<QueryParams>(queryParam);
  

  const { data: productList, error } = useSWR<Products>(
    `http://localhost:8000/items${queryStr}`,
    fetcher
  );

  return {
    data: productList?.data,
    error,
  };
};

export default useProductList;

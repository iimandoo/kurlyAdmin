import { useQuery } from '@tanstack/react-query';
import { QuerySnapshot } from 'firebase/firestore';
import { ProductsListMehtod } from './ProductsListMethod';
import { ProductsListModel } from 'models/products/ProductsListModel';

const PRODUCTS_LIST_QUERY_KEY = 'PRODUCTS_LIST_QUERY_KEY';

const useProductsListQuery = () => {
  const queryResult = useQuery<QuerySnapshot<ProductsListModel>>([PRODUCTS_LIST_QUERY_KEY], async () =>
    ProductsListMehtod(),
  );
  return { ...queryResult, data: queryResult.data?.docs };
};

export { useProductsListQuery };

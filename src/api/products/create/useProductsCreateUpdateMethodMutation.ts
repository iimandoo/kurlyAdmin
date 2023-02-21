import { useMutation } from '@tanstack/react-query';
import { ProductsCreateUpdateMehtod } from './productsCreateUpdateMethodApi';

export const useProductsCreateUpdateMutation = () => useMutation(ProductsCreateUpdateMehtod);

import { useMutation } from '@tanstack/react-query';
import { ProductsCreateUpdateMehtod } from './ProductsCreateUpdateMethod';

export const useProductsCreateUpdateMutation = () => useMutation(ProductsCreateUpdateMehtod);

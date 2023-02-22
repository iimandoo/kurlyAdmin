import { useMutation } from '@tanstack/react-query';
import { ProductsCreateUpdateMehtod } from './ProductsCreateUpdateMethodApi';

export const useProductsCreateUpdateMutation = () => useMutation(ProductsCreateUpdateMehtod);

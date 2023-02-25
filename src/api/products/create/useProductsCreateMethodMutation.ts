import { useMutation } from '@tanstack/react-query';
import { ProductsCreateMehtod } from './ProductsCreateMethod';

export const useProductsCreateMutation = () => useMutation(ProductsCreateMehtod);

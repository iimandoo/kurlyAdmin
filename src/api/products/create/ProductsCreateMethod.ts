import { collection, addDoc } from 'firebase/firestore';
import { firebaseStore } from 'firebaseRoot';
import { ProductsCreateFormModel } from 'models/products/ProductsCreateFormModel';

export const ProductsCreateMehtod = async (data: ProductsCreateFormModel) => {
  const FIREBAS_DOC_NAME = 'products';
  return await addDoc(collection(firebaseStore, FIREBAS_DOC_NAME), data);
};

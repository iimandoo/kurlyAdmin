import { collection, addDoc } from 'firebase/firestore';
import { firebaseStore } from 'firebaseRoot';
import { ProductsCreateForm } from 'models/products/ProductsCreateForm';

export const ProductsCreateUpdateMehtod = async (data: ProductsCreateForm) => {
  const FIREBAS_DOC_NAME = 'products';
  return await addDoc(collection(firebaseStore, FIREBAS_DOC_NAME), data);
};

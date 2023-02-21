import { ProductsCreateForm } from 'models/products/ProductsCreateForm';

import { collection, addDoc } from 'firebase/firestore';
import { db } from 'firebaseRoot';

export const ProductsCreateUpdateMehtod = async (data: ProductsCreateForm) => {
  const FIREBAS_DOC_NAME = 'products';
  return await addDoc(collection(db, FIREBAS_DOC_NAME), data);
};

import { collection, query, getDocs, CollectionReference } from 'firebase/firestore';
import { fireStore } from 'firebaseRoot';
import { ProductsListModel } from 'models/products/ProductsListModel';

export const ProductsListMehtod = async () => {
  const FIREBASE_DOC_NAME = 'products';

  const productsRef = collection(fireStore, FIREBASE_DOC_NAME) as CollectionReference<ProductsListModel>;
  const q = query(productsRef);
  const querySnapshot = await getDocs(q);

  return await querySnapshot;
};

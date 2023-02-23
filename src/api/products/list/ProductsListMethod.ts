import { collection, query, getDocs, CollectionReference, Query, QuerySnapshot } from 'firebase/firestore';
import { firebaseStore } from 'firebaseRoot';
import { ProductsListModel } from 'models/products/ProductsListModel';

export const ProductsListMehtod = async () => {
  const FIREBASE_DOC_NAME = 'products';

  const productsRef = collection(firebaseStore, FIREBASE_DOC_NAME) as CollectionReference<ProductsListModel>;
  const q: Query<ProductsListModel> = query(productsRef);
  const querySnapshot: QuerySnapshot<ProductsListModel> = await getDocs(q);

  return await querySnapshot;
};

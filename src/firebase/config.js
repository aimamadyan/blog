
import {initializeApp} from 'firebase/app';
import { getFirestore, serverTimestamp } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBDz0oCfefsu7edEV2aDpdQb5GANQcPuug",
  authDomain: "blog-posts-f541c.firebaseapp.com",
  projectId: "blog-posts-f541c",
  storageBucket: "blog-posts-f541c.appspot.com",
  messagingSenderId: "271292394256",
  appId: "1:271292394256:web:df85f8a5123472d7f91395"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)
const timestamp = serverTimestamp()

export {db, timestamp }

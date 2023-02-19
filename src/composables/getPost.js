import { ref } from 'vue'
import {doc, getDoc} from "firebase/firestore";
import {db} from "@/firebase/config";

const getPost = (id) => {

  const post = ref(null)
  const error = ref(null)

  const load = async () => {
    try {
      const docRef = doc(db, "posts", id)
      let query = await getDoc(docRef)

      if (!query.exists) {
        throw Error('Post does not exist!')
      }

      post.value = {...query.data(), id: query.id}
    }
    catch(err) {
      error.value = err.message
    }
  }

  return { post, error, load } 
}

export default getPost
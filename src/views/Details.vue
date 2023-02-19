<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button @click="handleClick" class="delete">Delete post</button>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>

<script>
import getPost from '@/composables/getPost'
import {useRoute, useRouter} from 'vue-router'
import Spinner from '../components/Spinner.vue'
import {db} from "@/firebase/config";
import {deleteDoc, doc} from "firebase/firestore";

export default {
  props: ['id'],
  components: { Spinner },
  setup({id}) {
    const route = useRoute()
    const router = useRouter()
    // console.log(route)
    // console.log(route.params)
    let { error, post, load } = getPost(route.params.id)

    load()

    const handleClick = async () => {
      try {
        await deleteDoc(doc(db, "posts", id))
        await router.push({name: 'Home'})
      } catch (err) {
        error = err.message
        console.log(err)
      }
    }

    return { error, post, handleClick }
  },
}
</script>

<style scoped>
  .post {
    max-width: 1200px;
    margin: 0 auto;
  }
  .post p {
    color: #444;
    line-height: 1.5em;
    margin-top: 40px;
  }
  .pre {
    white-space: pre-wrap;
  }
  button.delete {
    margin: 10px auto;
  }
</style>
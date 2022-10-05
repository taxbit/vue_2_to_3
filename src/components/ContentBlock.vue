<template>
  <v-container>
    <v-row
        align="center"
        justify="center"
        class="ma-4"
    >
      <v-col cols="12">
        <v-img
            :src="require('../assets/logo.svg')"
            class="my-3"
            contain
            height="200"
        />
      </v-col>

      <v-col
          cols="12"
          md="4"
      >
        <Filters :variants="variants"/>

      </v-col>

      <v-col
          cols="12"
          md="4"
      >

      <List :items="results" @userSelect="(data)=>{ selectedUserInfo=data, showDialog=true }"/>
      <UserInfo v-if="showDialog" 
                :showDialog="showDialog"
                @closeDialog="showDialog=false" 
                :info="selectedUserInfo"/>

      </v-col>
    </v-row>
  </v-container>
  
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import List from './List.vue';
import Filters from './Filters.vue';
import UserInfo from './UserInfo.vue';
import { useFilterStore } from '@/stores/filter'

const selectedUserInfo = ref(null)
const showDialog = ref(false)

const store = useFilterStore()

const variants = ref([
  ['russia', 'usa',],
  ['> 20','< 10',]
]);

const users = ref([])

onMounted(()=>{
  fetch('https://mocki.io/v1/a6ef6d76-4474-44b7-a28f-1643daaa28f1')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    users.value = data
  });
})

const results = computed(() => {
  let filtered = []

  if (!store.filterState.country != !store.filterState.score) {
    filtered = users.value.filter((user: Record<string, string>)=>{
      return store.filterState.country ? user.country == store.filterState.country 
      : eval(`${user.score}${store.filterState.score}`)
    })
  } else if (store.filterState.country || store.filterState.score) {
      filtered = users.value.filter((user: Record<string, string>)=>{
        return user.country == store.filterState.country && 
        (store.filterState.score && eval(`${user.score}${store.filterState.score}`))
      })
  } else filtered = users.value

  return filtered

})


</script>
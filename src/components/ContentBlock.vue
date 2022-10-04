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

      <List :items="results"/>

      </v-col>
    </v-row>
  </v-container>
  
</template>

<script setup>
import { ref, computed } from 'vue';
import List from './List.vue';
import Filters from './Filters.vue';
import { useFilterStore } from '@/stores/filter.js'

const store = useFilterStore()

const variants = ref([
  ['russia', 'usa',],
  ['> 20','< 10',]
]);

const users = ref(
  [
      { type: 'subheader', title: 'List' },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Brunch this weekend?',
        subtitle: `<span class="text-primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        country: 'usa',
        score: 9
      },
      { type: 'divider', inset: true },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer BBQ',
        subtitle: `<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        country: 'russia',
        score: 25
      },
      { type: 'divider', inset: true },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Oui oui',
        subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        country: 'usa',
        score: 4
      },
      { type: 'divider', inset: true },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Birthday gift',
        subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        country: 'usa',
        score: 50
      },
      { type: 'divider', inset: true },
      {
        prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Recipe to try',
        subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        country: 'russia',
        score: 103
      },
    ],
      )

const results = computed(() => {
  return store.filterState.score && users.value.filter((user)=>{
      return user.country == store.filterState.country 
        && eval(`${user.score}${store.filterState.score}`)
    }) || users.value
})


</script>
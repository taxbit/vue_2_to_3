<template>
  <v-app>
    <v-main>
      <ContentBlock/>
    </v-main>

    <v-footer app v-bind="localAttrs">
      <Footer></Footer>
    </v-footer>
  </v-app>
</template>

<script setup>
import ContentBlock from './components/ContentBlock';
import Footer from './components/Footer';

import { computed } from 'vue'

const localAttrs = computed(()=> {
  const attrs = {}

  attrs.absolute = true
  attrs.fixed = false

  return attrs
})

</script>
<template>
    <v-card
            max-width="450"
            class="mx-auto"
        >
        <!-- <v-list
          :items="items"
          item-props
          lines="three"
          @click="click"
        >
          <template v-slot:prepend>
            {{item}}
          </template>

          <template v-slot:subtitle="{ subtitle }">
            <div class="subtitle" v-html="subtitle"></div>
          </template>
        </v-list> -->
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-list-item
          v-if="item.title"
          :key="item.title"
        >
          <template v-slot:prepend>
            <v-avatar @click="click(item.score, item.country)" :image="item.prependAvatar"></v-avatar>
          </template>

          <template v-slot:title>
            <div class="title" v-html="item.title"></div>
          </template>

          <template v-slot:subtitle>
            <div class="subtitle" v-html="item.subtitle"></div>
          </template>       
          <div>
              score {{item.score}}
            country {{item.country}}
            </div>   
        </v-list-item>

        <v-divider
          v-else
          :inset="true"
        ></v-divider>

      </template>
    </v-list>        
        
    </v-card>
</template>


<script setup>

const props = defineProps({
    items: Array
})

const emit = defineEmits(['userSelect'])

const click = (score, country) => {
  emit('userSelect', {score, country})
}

</script>

<style>
  .v-list-item__prepend {
    cursor: pointer;
  }
</style>
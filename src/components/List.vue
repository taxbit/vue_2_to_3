<template>
    <v-card
            max-width="450"
            class="mx-auto"
        >
    <v-list three-line>
      <TransitionGroup name="list" tag="ul">
        <template v-for="(item, index) in items">
          <v-list-item
            tag="li"
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
          </v-list-item>

          <v-divider
            v-else
            :inset="true"
          ></v-divider>

        </template>
      </TransitionGroup>
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
  .list-move, /* apply transition to moving elements */
  .list-enter-active,
  .list-leave-active {
    transition: all 0.5s ease;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateX(30px);
  }

  /* ensure leaving items are taken out of layout flow so that moving
    animations can be calculated correctly. */
  .list-leave-active {
    position: absolute;
  }
</style>
<template>
    <v-card
            max-width="450"
            class="mx-auto"
        >
        <v-list
          :items="items"
          item-props
          lines="three"
        >
          <template v-slot:subtitle="{ subtitle }">
            <div v-html="subtitle"></div>
          </template>
        </v-list>

    </v-card>
</template>


<script setup>

const props = defineProps({
    items: Array
})

</script>


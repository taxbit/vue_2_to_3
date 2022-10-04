<script setup>
    import { useFilterStore } from '@/stores/filter.js'

    const props = defineProps({
        variants: Array,
    })

    const store = useFilterStore()
</script>

<template>
    <v-select
        @update:modelValue="value=>store.setFilter('country',value)"
        clearable
        :items="variants[0]"
        label="Filter by country"
    ></v-select>

    <v-select
        @update:modelValue="value=>store.setFilter('score',value)"
        clearable
        :items="variants[1]"
        label="Filter by score"
    ></v-select>    
</template>

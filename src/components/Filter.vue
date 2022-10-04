<script setup>

    const props = defineProps({
        variant: Text,
        items: Array,
    })
</script>

<template>
    <v-select
        v-model="variant"
        clearable
        :items="items"
        label="Filter by country"
    ></v-select>

    <v-select
        v-model="variant"
        clearable
        :items="items"
        label="Filter by score"
    ></v-select>    
</template>

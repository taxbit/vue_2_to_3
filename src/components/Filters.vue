<script setup lang="ts">
    import { useFilterStore } from '@/stores/filter'
    import { ref } from 'vue';

    const props = defineProps<{
        variants: Array<Array<string>>,
    }>()

    const showProgress = ref(false)

    const store = useFilterStore()
    const onSelected = (filter, value) => {
        showProgress.value = true
        setTimeout(()=>{
            store.setFilter(filter,value)
            showProgress.value = false
        }, 2000)
    }
</script>

<template>
        <v-progress-linear
        v-if="showProgress"
      indeterminate
      color="cyan"
    ></v-progress-linear>
    <v-select
        @update:modelValue="value=>onSelected('country',value)"
        clearable
        :items="variants[0]"
        label="Filter by country"
    ></v-select>
    
    <v-progress-linear
      v-if="showProgress"
      indeterminate
      color="cyan"
    ></v-progress-linear>
    <v-select
        @update:modelValue="value=>onSelected('score',value)"
        clearable
        :items="variants[1]"
        label="Filter by score"
    ></v-select>    
</template>

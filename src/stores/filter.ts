import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFilterStore = defineStore('filter', () => {

    const filterState = ref({
        country: null,
        score: null,
    })

    function setFilter(name: string, value: string) {
        name && (filterState.value[name] = value)
    }

    return { filterState, setFilter }
})
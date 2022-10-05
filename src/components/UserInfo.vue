<template>
    <v-dialog v-model="showDialog">
        <v-card v-if="info">
            <v-card-text>
                <h1>User info:</h1>
                <h2>Country: {{info.country}}</h2>
                <h2>Score: {{info.score}}</h2>
            </v-card-text>
            <v-card-actions>
            <v-btn color="primary" block @click="emit('closeDialog')">OK</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script setup lang="ts">
    const props = defineProps<{
        info: { country: string, score: string } | null,
        showDialog: boolean | undefined,
    }>()
    const emit = defineEmits(['closeDialog'])

</script>
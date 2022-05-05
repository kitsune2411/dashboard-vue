<template>
    <div>
        <v-container fluid>
        <h1 style="margin:2%; text-align:left" class="display-3">Data</h1>

        <ReportCard/>
        </v-container>
        <DataComp/>
    </div>
</template>

<script>
import DataComp from '@/components/DataComp.vue'
import ReportCard from '@/components/ReportCard.vue'


export default {
    name: "DataView",
    components: {
        DataComp,
        ReportCard,
    }
}
</script>
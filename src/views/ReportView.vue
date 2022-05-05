<template>
    <div style="margin-top:1%">
        <h1>Bar Chart</h1>
        <BarGraph/>
        <h1>Line graph</h1>
        <LineGraph/>
    </div>
</template>

<script>
import BarGraph from '@/components/BarGraph.vue'
import LineGraph from '@/components/LineGraph.vue'

export default {
    name: "ReportView",
    components: {
        BarGraph,
        LineGraph,
    }
}
</script>
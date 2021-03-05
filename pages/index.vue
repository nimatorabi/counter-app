<template>
<b-row>
    <b-container>
        <b-col cols="12">
            <counter-box />
        </b-col>
    </b-container>
</b-row>
</template>

<script>
import CounterBox from "~/components/CounterBox/index.vue"
export default {
    components: {
        CounterBox
    }
}
</script>

<style>

</style>

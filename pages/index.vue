<template>
<b-container>
    <b-row>
        <b-col cols="12">
            <counter-box />
        </b-col>
        <b-col cols="3" v-for="(counter,index) in counters" :key="index">
            <card-box :counter-step="counter" />
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import CounterBox from "~/components/counterBox/index";
import CardBox from "~/components/CardBox/index"
export default {
    components: {
        CounterBox,
        CardBox
    },
    computed:{
        counters(){
            return this.$store.state.counter.counters
        }
    }
}
</script>

<style>

</style>

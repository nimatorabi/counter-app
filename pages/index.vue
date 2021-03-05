<template>
<b-container>
    <b-row>
        <b-col cols="12">
            <counter-box />
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import CounterBox from "~/components/counterBox/index";
export default {
    components: {
        CounterBox
    }
}
</script>

<style>

</style>

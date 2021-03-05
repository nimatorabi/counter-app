<template>
<div class="px-4">
    <b-input-group>
        <b-form-input placeholder="step" v-model="counterStep" type="number" step="0.1" />
        <b-input-group-append>
            <b-button :disabled="counterStep == null" variant="dark" @click="addCounter">Add Counter</b-button>
        </b-input-group-append>
    </b-input-group>
    <span class="text-muted pl-2">this only accepts numbers like 1,2,-5,28,...</span>
</div>
</template>

<script>
export default {
    data(){
        return{
            counterStep:null
        }
    },
    methods:{
        addCounter(){
            this.$store.commit("counter/ADD_STEP",Number(this.counterStep))
            this.counterStep = null
        }
    }
}
</script>

<style>

</style>

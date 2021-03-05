<template>
<div class="px-4">
    <b-input-group >
        <b-form-input placeholder="step" v-model="counterStep" type="number" />
        <b-input-group-append>
            <b-button variant="dark" @click="addCounter">Add Counter</b-button>
        </b-input-group-append>
    </b-input-group>
    <span class="text-muted pl-2">this only accepts numbers like 1,2,-5,28,...</span>
</div>
</template>

<script>
export default {
    data(){
        return{
            counterStep:undefined
        }
    }
}
</script>

<style>

</style>

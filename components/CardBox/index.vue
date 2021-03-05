<template>
  <div class="bg-white shadow-md rounded border border-dark mb-4 overflow-hidden">
      <div class="px-5 pt-2">
          <p>
              step {{counterStep}}
          </p>
      </div>
      <hr class="bg-dark" /> 
      <div class="text-center pb-4">
          <h1 class="font-weight-bold">
              {{count}}
          </h1>
      </div>
      <div class="d-flex justify-content-center py-2">
          <b-button variant="dark" class="w-75" @click="counter">Run</b-button>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        counterStep:{
            type:Number,
            required:true
        }
    },
    data(){
        return{
            count:0
        }
    },
    methods:{
        counter(){
            this.count += this.counterStep
        }
    }
}
</script>

<style scoped>
h1{
    font-size: 80px !important;
}
</style>
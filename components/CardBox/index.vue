<template>
  <div class="bg-white shadow-md rounded border border-dark mb-4">
      <div>
          <p>
              step : {{counterStep}}
          </p>
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
    }
}
</script>

<style>

</style>
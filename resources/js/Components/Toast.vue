<template>
  <div v-if="isError"
    class="toast fixed p-4 sm:mt-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 z-50 bg-white w-full md:w-2/5 lg:w-2/5 rounded-xl">

    <div v-if="typeof message === 'string'">
      <p>{{ message }}</p>
    </div>
    
    <div v-else>
      <div v-for="(field, k) in message" :key="k">
        <p v-for="error in field" :key="error">
        <div class="flex flex-row items-center">
          <div><v-icon name="md-error-round" scale="2" fill="red" /></div>
          <div class="ml-2">{{ error }}</div>
        </div>
        </p>
      </div>
    </div>
  </div>

  <div v-if="!isError"
    class="toast fixed p-4 sm:mt-8 sm:left-1/2 sm:transform sm:-translate-x-1/2 z-50 flex flex-row w-full bg-white md:w-2/5 lg:w-2/5 sm:rounded-xl items-center">
    <div><v-icon name="fa-check-square" scale="2" fill="lightgreen" /></div>
    <div class="ml-2">{{ message }}</div>
  </div>
</template>

<script>

export default {
  props: {
    message: { type: String, required: true },
    isError: { type: Boolean, required: true }
  },
  data() {
    return {
      visible: false,

    };


  },




}
</script>

<style>
.toast {
  top: 200px;
  box-shadow: 0 0 5px gray;
  transition: all 0.5s ease;
  animation: slide-in-out 7s forwards;

}


.message {
  font-size: 14px;
}

@keyframes slide-in-out {
  0% {
    top: -200px;
  }

  10% {
    top: 0;
  }

  90% {
    top: 0;
  }

  100% {
    top: -200px;
  }
}
</style>
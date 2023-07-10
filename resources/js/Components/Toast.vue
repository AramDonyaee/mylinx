<template>
  <div v-if="isError" class="toast bg-red-600 text-white w-full md:w-1/2 lg:w-1/2">
    <div v-for="(field, k) in message" :key="k">
      <p v-for="error in field" :key="error">
        {{ error }}
      </p>
    </div>
  </div>

  <div v-if="!isError" class="toast bg-green-300 w-full md:w-1/2 lg:w-1/2 ">
    <span>{{ message }}</span>
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
  position: fixed;
  left: 50%;
  top: 200px;
  transform: translate(-50%, 0);
  box-shadow: 0 0 5px gray;
  transition: all 0.5s ease;
  padding: 15px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  z-index: 999999;
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
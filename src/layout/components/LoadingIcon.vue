<template>
  <div id="loading">
    <div class="circle"></div>
  </div>
</template>
<style>
#loading {
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
}

@keyframes loading {
  0% {
    transform: rotate(0);
  }

  50% {
    transform: rotate(160deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

.circle {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 6px solid #222;
  border-left-color: #ccc;

  animation: loading 1s linear 1s infinite;
}
</style>

<template>
  <div>
    <main>
      <div id="preloader" class="preloader">
        <div class="animation-preloader">
          <div class="pulse-loader">
            <div class="loader-bg">
              <div class="loader-p" />
            </div>
          </div>
          <div class="txt-loading">
            <span data-text-preloader="I" class="letters-loading">I</span>
            <span data-text-preloader="N" class="letters-loading">N</span>
            <span data-text-preloader="C" class="letters-loading">C</span>
            <span data-text-preloader="E" class="letters-loading">E</span>
            <span data-text-preloader="N" class="letters-loading">N</span>
            <span data-text-preloader="S" class="letters-loading">S</span>
            <span data-text-preloader="E" class="letters-loading">E</span></br>
            <span data-text-preloader="D" class="letters-loading">D</span>
            <span data-text-preloader="E" class="letters-loading">E</span>
            <span data-text-preloader="S" class="letters-loading">S</span>
            <span data-text-preloader="I" class="letters-loading">I</span>
            <span data-text-preloader="G" class="letters-loading">G</span>
            <span data-text-preloader="N" class="letters-loading">N</span>

          </div>
          <p class="text-center">
            Processing
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </p>
        </div>
        <div class="loader">
          <div class="row">
            <div class="col-3 loader-section section-left">
              <div :class="[ !$store.state.homePageBannerLoaded ? 'white-bg'   : 'bg']" />
            </div>
            <div class="col-3 loader-section section-left">
              <div :class="[ !$store.state.homePageBannerLoaded ? 'white-bg'   : 'bg']" />
            </div>
            <div class="col-3 loader-section section-right">
              <div :class="[ !$store.state.homePageBannerLoaded ? 'white-bg'   : 'bg']" />
            </div>
            <div class="col-3 loader-section section-right">
              <div :class="[ !$store.state.homePageBannerLoaded ? 'white-bg'   : 'bg']" />
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
#preloader.preloader {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: default;
  z-index: 9999;
}
#preloader.preloader .animation-preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1000;
}
#preloader.preloader .animation-preloader p {
  display: flex;
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
  justify-content: center;
  letter-spacing: 8px;
  align-items: center;
  margin: 0;
  color: #3b3b3b;
}
#preloader.preloader .animation-preloader p span {
  width: 5px;
  height: 5px;
  margin: 5px;
  border-radius: 50px;
  background-color: #3b3b3b;
  animation: fade 1.5s alternate infinite;
}
#preloader.preloader .animation-preloader p span:nth-of-type(2) {
  animation-delay: 0.25s;
}
#preloader.preloader .animation-preloader p span:nth-of-type(3) {
  animation-delay: 0.5s;
}
#preloader.preloader .animation-preloader p span:nth-of-type(4) {
  animation-delay: 0.75s;
}
#preloader.preloader .animation-preloader p span:nth-of-type(5) {
  animation-delay: 1s;
}
#preloader.preloader .animation-preloader .pulse-loader .loader-bg {
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
#preloader.preloader .animation-preloader .pulse-loader .loader-bg .loader-p {
  position: relative;
  top: 0;
  left: 0;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 0 solid transparent;
}
#preloader.preloader
  .animation-preloader
  .pulse-loader
  .loader-bg
  .loader-p::before,
#preloader.preloader
  .animation-preloader
  .pulse-loader
  .loader-bg
  .loader-p::after {
  content: "";
  position: absolute;
  width: inherit;
  height: inherit;
  top: 0;
  left: 0;
  opacity: 0;
  border-radius: 50%;
  animation: loader 2s linear infinite;
}
#preloader.preloader
  .animation-preloader
  .pulse-loader
  .loader-bg
  .loader-p::before {
  animation-delay: 1s;
  border: 1px solid #f1416c;
}
#preloader.preloader
  .animation-preloader
  .pulse-loader
  .loader-bg
  .loader-p::after {
  border: 1px solid #15e38a;
}
#preloader.preloader .animation-preloader .txt-loading {
  font: bold 5em "Poppins", sans-serif;
  text-align: center;
  user-select: none;
}
#preloader.preloader .animation-preloader .txt-loading .letters-loading {
  position: relative;
  /* change for the different font background */
  /* color: rgba(0, 0, 0, 0.2); */
}
#preloader.preloader
  .animation-preloader
  .txt-loading
  .letters-loading::before {
  position: absolute;
  content: attr(data-text-preloader);
  font-family: "Poppins", sans-serif;
  left: 0;
  top: -3px;
  opacity: 0;
  color: #000000;
  transform: rotateY(-90deg);
  animation: letters-loading 4s infinite;
}
#preloader.preloader
  .animation-preloader
  .txt-loading
  .letters-loading:nth-child(2)::before {
  animation-delay: 0.2s;
}
#preloader.preloader
  .animation-preloader
  .txt-loading
  .letters-loading:nth-child(3)::before {
  animation-delay: 0.4s;
}
#preloader.preloader
  .animation-preloader
  .txt-loading
  .letters-loading:nth-child(4)::before {
  animation-delay: 0.6s;
}
#preloader.preloader
  .animation-preloader
  .txt-loading
  .letters-loading:nth-child(5)::before {
  animation-delay: 0.8s;
}
#preloader.preloader
  .animation-preloader
  .txt-loading
  .letters-loading:nth-child(6)::before {
  animation-delay: 1s;
}
#preloader.preloader
  .animation-preloader
  .txt-loading
  .letters-loading:nth-child(7)::before {
  animation-delay: 1.2s;
}
#preloader.preloader
  .animation-preloader
  .txt-loading
  .letters-loading:nth-child(8)::before {
  animation-delay: 1.4s;
}
#preloader.preloader .loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  z-index: 1;
  pointer-events: none;
}
#preloader.preloader .loader .row {
  height: 100%;
}
#preloader.preloader .loader .row .loader-section {
  padding: 0;
}
#preloader.preloader .loader .row .loader-section .bg {
  width: 100%;
  height: 100%;
  left: 0;
  background-color: #d11a1a6c;
  transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
}
#preloader.preloader .loader .row .loader-section .white-bg {
  width: 100%;
  height: 100%;
  left: 0;
  background-color: #f44336;
  transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
}
@keyframes loader {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 0;
  }
}
@keyframes letters-loading {
  0%,
  75%,
  100% {
    opacity: 0;
    -webkit-transform: rotateY(-90deg);
    transform: rotateY(-90deg);
  }
  25%,
  50% {
    opacity: 1;
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
}
@keyframes fade {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
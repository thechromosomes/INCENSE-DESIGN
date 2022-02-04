<template>
  <div class="wlcm-popup-overlay">
    <div class="wlcm-popup">
      <div class="popup-content">
        <button @click="$parent.closePopUp()" class="plain close-btn-img">
          <img src="@/assets/img/close.png" alt="" />
        </button>
        <div class="logo">
          <img src="@/static/logo.png" alt="logo" />
          <h6 class="logo-content">You choose, we execute</h6>
        </div>
        <div class="top-content">
          <span> <img src="@/static/welcomeImage.jpeg" alt="logo" /> </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
button.plain {
  background: transparent;
  border: 0;
}
.close-btn-img {
  position: absolute;
  right: 24px;
  top: 24px;
  width: 20px;
  height: 20px;
  padding: 0;
}
.close-btn-img img {
  width: 100%;
  height: 100%;
  vertical-align: top;
}
.wlcm-popup-overlay {
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100vh;
  z-index: 999;
  /* display: flex;
  justify-content: center; */
  /* align-items: center; */
  overflow: auto;
}
.wlcm-popup {
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
  width: 700px;
  height: auto;
  background: #fff;
  padding: 60px 0;
  position: relative;
  margin: 15px 0;
  max-width: calc(100% - 20px);
}
.popup-content {
  margin: auto;
  text-align: center;
  width: 70%;
}
.popup-content .logo img {
  width: 100px;
  margin-bottom: 10px;
}
.popup-content .logo .logo-content {
  margin: 6px 0;
  font-size: 14px;
}
.popup-content .top-content {
  margin: 30px 0;
  font-weight: 500;
}
.popup-content .top-content img {
  width: 100%;
}
.popup-content .top-content h3 {
  font-size: 30px;
  margin: 6px 0;
  font-weight: 700;
}
.popup-content input[type="email"] {
  width: 100%;
  padding: 12px;
  border: 1px solid #a9a9a9;
  border-radius: 4px;
  margin-bottom: 20px;
}
.popup-content input[type="email"]::placeholder {
  text-align: center;
  font-size: 12px;
  font-weight: 600;
}
.popup-content p {
  font-size: 14px;
}
.popup-content .submit-btn {
  width: 100%;
  padding: 8px 10px;
  height: 42px;
  background: cornflowerblue;
  color: #fff;
  font-size: 16px;
  border: 1px solid cornflowerblue;
  border-radius: 4px;
  margin-bottom: 10px;
}
.popup-content .btn-transparent {
  width: 100%;
  padding: 8px 10px;
  height: 42px;
  background: transparent;
  color: #fff;
  font-size: 16px;
  border: 1px solid transparent;
  border-radius: 4px;
  text-decoration: underline;
  color: #424242;
  text-transform: uppercase;
}
.popup-content .terms-para {
  font-size: 12px;
  margin-top: 20px;
}
.link {
  text-decoration: underline;
}
.link:hover {
  color: #424242;
}
</style>
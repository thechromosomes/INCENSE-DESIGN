<template>
  <div>
    <div id="popup-reg" class="popup active">
      <div class="popup-content">
        <div class="event-header">
          <h6>Don't be shy, say hi!</h6>
        </div>
        <div id="send" class="send-form">
          <div class="form-group">
            <input
              type="text"
              v-model="user.name"
              placeholder="Enter name..."
              id="name"
              name="name"
            />
            <label for="name">
              <i class="fa fa-user"></i>
            </label>
          </div>
          <div class="form-group">
            <input
              type="tel"
              v-model="user.phone"
              placeholder="Enter phone..."
              id="phone"
              name="phone"
            />
            <label for="phone">
              <i class="fa fa-phone"></i>
            </label>
          </div>
          <div class="form-group">
            <input
              type="email"
              v-model="user.email"
              placeholder="Enter mail..."
              id="mail"
              name="mail"
            />
            <label for="mail">
              <i class="fa fa-envelope"></i>
            </label>
          </div>
          <div class="form-group">
            <textarea
              placeholder="Enter message..."
              name="text"
              v-model="user.message"
              id="text"
            ></textarea>
            <label for="text" class="txt">
              <i class="fa fa-commenting"></i>
            </label>
          </div>
          <button
            type="submit"
            class="main-btn-rect"
            name="text"
            @click="sendMail('contact')"
            value="Send"
          >
            <i class="fa fa-paper-plane"></i>Send
          </button>
        </div>
        <span class="fade-out main-btn-circle" @click="togglePopUp()">╳</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: "your query",
      bodyAttrs: {
        class: "overFlowHidden"
      },
    };
  },

  data() {
    return {
      user: {},
    };
  },

  methods: {
    togglePopUp() {
      this.$store.commit("setQueryUpPopUp", {
        status: false,
      });
    },

    async sendMail(type) {
      let form = {
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        location: this.user.location,
        message: this.user.message,
        emailType: type,
        startDate: this.user.startDate,
        endDate: this.user.endDate,
        person: this.user.person,
      };

      if (!form.phone) {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Please fill the form first!",
          timer: 10000,
        });
        return;
      }

      let response = await this.$store.dispatch("ApiCall", {
        method: "post",
        url: `/sendmail`,
        params: form,
      });

      if (response.status) {
        this.$swal.fire({
          icon: "success",
          timer: 10000,
          title: "Voila!",
          text: "Message sent successfully, expect a reply soon",
        });
        this.user = {};
        this.togglePopUp();
      } else {
        this.$swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          timer: 10000,
          text: "Message sent successfully, expect a reply soon",
        });
      }
    },
  },
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  font-family: "RobotoLight", sans-serif;
  border-bottom: 1px solid #fffff0;
  background: #00c6ff;
  background: -webkit-linear-gradient(to right, #0072ff, #00c6ff);
  background: linear-gradient(to right, #0072ff, #00c6ff);
}
button {
  text-decoration: none;
  border: none;
}
h1 {
  position: absolute;
  display: inline-table;
  top: 20%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 45px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fffff0;
}
h2 {
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  text-align: center;
  color: #fffff0;
}
.thisButtonWillOpenTheQueryPopUp {
  position: absolute !important;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.main-btn-rect,
.main-btn-circle {
  position: relative;
  margin: 0;
  font-family: "Roboto", sans-serif;
  color: #fffff0;
  background-color: rgb(252, 79, 79);
  text-transform: uppercase;
  font-size: 25px;
  letter-spacing: 1px;
  outline: none;
  cursor: pointer;
  z-index: 100;
}
.main-btn-rect {
  padding: 10px 80px;
  line-height: 30px;
}
.main-btn-rect:before,
.main-btn-rect:after {
  position: absolute;
  content: "";
  top: 0;
  width: 0%;
  height: 100%;
  background-color: rgba(255, 255, 240, 0.2);
  -webkit-transition: width 0.3s;
  -o-transition: width 0.3s;
  transition: width 0.3s;
}
.main-btn-rect:before {
  left: 0;
}
.main-btn-rect:after {
  right: 0;
}
.main-btn-rect:hover:before,
.main-btn-rect:hover:after {
  width: 50%;
}
.main-btn-circle {
  height: 40px;
  width: 40px;
  -webkit-border-radius: 50%;
  border-radius: 100%;
  line-height: 40px;
  -webkit-transition: box-shadow 0.3s;
  -o-transition: box-shadow 0.3s;
  transition: box-shadow 0.3s;
}
.main-btn-circle:hover {
  -webkit-box-shadow: inset 2px 1px 0px 20px rgba(255, 255, 240, 0.2);
  -moz-box-shadow: inset 2px 1px 0px 20px rgba(255, 255, 240, 0.2);
  box-shadow: inset 2px 1px 0px 20px rgba(255, 255, 240, 0.2);
}
.popup {
  position: fixed;
  top: 100%;
  width: 100%;
  height: 100%;
  z-index: 99;
}
.popup.active {
  top: 0;
  background-color: #030303a6;
  transition: background-color 0.6s, opacity 0.6s;
  left: 0;
}
.popup .main-btn-rect {
  padding: 10px 100px;
}
.popup .popup-content {
  position: absolute;
  top: 50%;
  left: 50%;
  max-height: 568px;
  min-width: 320px;
  margin-top: 150px;
  padding: 25px;
  background-color: #fffff0;
  color: #070000;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12),
    0 1px 2px rgba(0, 0, 0, 0.24);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
  -webkit-transform: translateX(-50%) translateY(-50%);
  -moz-transform: translateX(-50%) translateY(-50%);
  -o-transform: translateX(-50%) translateY(-50%);
  transition: margin 0.6s;
  -webkit-transition: margin 0.6s;
  -moz-transition: margin 0.6s;
  -o-transition: margin 0.6s;
}
.popup.active .popup-content {
  margin-top: 0px;
}
.popup-content h6 {
  display: table;
  font-size: 16px;
  text-align: center;
  margin: 10px auto;
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  font-weight: 100;
}
.form-group {
  position: relative;
  width: 90%;
  margin: 0px auto;
}
div#send input,
div#send textarea {
  position: relative;
  margin-bottom: 32px;
  width: 100%;
  height: 29px;
  font-family: "RobotoLight", sans-serif;
  text-indent: 20px;
  background-color: transparent;
  outline: 0;
  border: none;
  border-bottom: 1px solid #070000;
  -webkit-transition: border 0.6s;
  -o-transition: border 0.6s;
  transition: border 0.6s;
  padding-left: 20px;
}
div#send input:focus,
div#send textarea:focus {
  border-bottom: 1px solid rgb(63, 173, 168);
}
div#send label {
  position: absolute;
  top: 0;
  line-height: 28px;
  -webkit-transition: color 0.5s;
  -o-transition: color 0.5s;
  transition: color 0.5s;
  left: 0;
  font-size: 20px;
}
div#send input:focus + label,
div#send textarea:focus + label {
  color: rgb(63, 173, 168);
}
div#send .txt {
  line-height: 22px;
  left: 2px;
}
div#send .main-btn-rect {
  position: relative;
  display: block;
  padding: 12px 80px;
  margin: 0px auto;
  font-size: 14px;
}
div#send .main-btn-rect i {
  margin-right: 5px;
}
.popup .fade-out {
  position: absolute;
  top: -20px;
  right: -20px;
  text-align: center;
  font-size: 15px;
}
.share-wrap {
  position: absolute;
  display: inline-table;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  text-align: center;
}
.share-btn {
  color: #fffff0;
  padding: 7px 25px;
  text-decoration: none;
  cursor: pointer;
  font-weight: 100;
  font-size: 14px;
  font-family: "Lobster", sans-serif;
  background-color: rgba(63, 173, 168, 0.8);
  text-transform: uppercase;
  border-radius: 5px;
  transition: background-color 0.5s;
  -webkit-transition: background-color 0.5s;
  -moz-transition: background-color 0.5s;
  -o-transition: background-color 0.5s;
}
.share-btn:hover {
  color: #fffff0;
  text-decoration: none;
  background-color: rgba(63, 173, 168, 1);
}

.resp-sharing-button__link,
.resp-sharing-button__icon {
  display: inline-block;
}
.resp-sharing-button__link {
  text-decoration: none;
  color: #fff;
  margin: 2px;
}
.resp-sharing-button {
  border-radius: 5px;
  transition: 25ms ease-out;
  padding: 6px 9px;
  transition: background-color 0.5s;
  -webkit-transition: background-color 0.5s;
  -moz-transition: background-color 0.5s;
  -o-transition: background-color 0.5s;
}
.resp-sharing-button__icon svg {
  width: 1em;
  height: 1em;
  margin-right: 0.4em;
  vertical-align: top;
}
.resp-sharing-button--small svg {
  margin: 0;
  vertical-align: middle;
}
.resp-sharing-button__icon,
.resp-sharing-button__icon--solid,
.resp-sharing-button__icon--solidcircle {
  fill: #fff;
  stroke: none;
}
.resp-sharing-button--facebook {
  background-color: #3b5998;
  border-color: #3b5998;
}
.resp-sharing-button--facebook:hover,
.resp-sharing-button--facebook:active {
  background-color: #2d4373;
  border-color: #2d4373;
}
.resp-sharing-button--twitter {
  background-color: #55acee;
  border-color: #55acee;
}
.resp-sharing-button--twitter:hover,
.resp-sharing-button--twitter:active {
  background-color: #2795e9;
  border-color: #2795e9;
}
.resp-sharing-button--linkedin {
  background-color: #0077b5;
  border-color: #0077b5;
}
.resp-sharing-button--linkedin:hover,
.resp-sharing-button--linkedin:active {
  background-color: #046293;
  border-color: #046293;
}
@media only screen and (max-width: 768px) {
  h1 {
    font-size: 25px;
  }
  h2 {
    font-size: 14px;
  }
  div#send .main-btn-rect {
    padding: 7px 60px;
    font-size: 14px;
  }
  .thisButtonWillOpenTheQueryPopUp {
    padding: 7px 60px;
    font-size: 14px;
  }
}
</style>
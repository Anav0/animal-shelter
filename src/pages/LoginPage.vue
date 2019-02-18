<template>
  <div class="loginPage-wrapper">
    <div class="loginPage-container">
      <div class="loginPage-left">
        <img src="./../../public/logo.png">
        <!-- TODO: maybe i can display some sort of "funny fact of the day here..." -->
      </div>
      <div class="loginPage-right">
        <h4>Zaloguj się</h4>
        <div class="loginPage-errors" v-if="errors.length > 0">
          <h6>Błędy:</h6>
          <ul>
            <li v-for="(error, i) in errors" :key="i">{{error}}</li>
          </ul>
        </div>
        <form @submit="validateForm" spellcheck="false">
          <div class="loginPage-labelInput-container">
            <label>Login</label>
            <input type="text" v-model="username" name="username" placeholder="Nazwa użytkownika">
          </div>
          <div class="loginPage-labelInput-container">
            <label>Hasło</label>
            <input type="password" v-model="password" name="password" placeholder="Hasło">
          </div>
          <div class="loginPage-checkbox-container">
            <label>Zapamiętaj mnie</label>
            <input type="checkbox" v-model="rememberMe" name="password" placeholder="Hasło">
          </div>
          <input type="submit" class="main-button" value="Zaloguj" v-show="!isLoading">
        </form>
        <HollowDotsSpinner
          class="loginPage-spinner"
          v-show="isLoading"
          :animation-duration="1000"
          :dot-size="15"
          :dots-num="3"
          :color="'#f1cdb3'"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { isAuth, call } from "./../api.js";
import { HollowDotsSpinner } from "epic-spinners";
export default {
  mounted() {
    isAuth()
      .then(isAuthenticated => {
        if (isAuthenticated) {
          //TODO: Skip login page
        }
      })
      .catch(e => {
        this.errors.push(e.message);
      });
  },

  components: {
    HollowDotsSpinner
  },
  data() {
    return {
      errors: [],
      username: "",
      password: "",
      isLoading: false,
      rememberMe: true
    };
  },
  methods: {
    validateForm(e) {
      this.isLoading = true;
      this.errors = [];
      this.username = this.username.trim();
      this.password = this.password.trim();

      if (this.username == "" || this.password == "") {
        this.errors.push("Uzupełnij wszystkie pola");
      }

      if (!this.errors.length) {
        this.sendLoginRequest();
      } else {
        this.isLoading = false;
      }
      e.preventDefault();
    },
    sendLoginRequest() {
      const config = {
        method: "post",
        url: "login",
        withCredentials: true,
        data: {
          username: this.username,
          password: this.password
        }
      };
      call(config).then(response => {
        console.log(response);

        if (response.data.successful) {
          const user = response.data.response;
          console.log(user);
        } else {
          this.errors.push(response.data.errorMessage);
        }
        this.isLoading = false;
      });
    }
  }
};
</script>

<style scoped lang="scss">
@import "./../scss/base.scss";

.loader {
  font-size: 8px;
  margin: 5rem;
}
.loginPage-wrapper {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 90vh;
}
.loginPage-container {
  display: grid;

  grid-template-columns: auto 60%;

  width: 90%;
  height: 100%;

  max-width: 1000px;
  max-height: 450px;
}
.loginPage-errors {
  border: 1px solid rgba(255, 0, 0, 1);
  background: rgba(255, 0, 0, 0.25);
  color: rgba(255, 0, 0, 1);
  padding: 0.25rem 1rem;
  width: 100%;
  height: 100%;

  max-height: 125px;
  overflow: auto;
}
.loginPage-errors ul {
  margin: 1rem;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  max-height: 100%;
}
.loginPage-right {
  background: whitesmoke;
  grid-column: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
}

.loginPage-left {
  background: $LoginLeftBackground;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.loginPage-labelInput-container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.loginPage-checkbox-container {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
h4 {
  margin-bottom: 2rem;
}
label {
  font-weight: 300;
  font-size: $size-7;
  margin-bottom: 0.5rem;
}
input,
.loginPage-labelInput-container {
  padding: 0.75rem;
}

.main-button,
.loginPage-checkbox-container {
  margin: 0.75rem;
}
input[type="text"],
input[type="password"] {
  border: none;
  box-shadow: none;
  min-width: 225px;
  transition: background-color $trans-duration;
}
input[type="text"]:hover,
input[type="password"]:hover {
  background-color: $AccentColor;
}

.loginPage-spinner {
  margin-top: 0.75rem;
  margin-bottom: 0.75rem;
}
</style>
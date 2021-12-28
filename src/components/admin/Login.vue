<template>
     <div class="containers pt-5 pb-5">
       <div class="login">
      <h1>Đăng Nhập</h1>
        <h6 class="text-warning" v-if="message">{{ message }}</h6>
      <form @submit.prevent="login()">
        <div class="form-group">
          <input
            v-model="user.email"
            class="rounded-pill form-control"
            :class="{ 'is-invalid': error.email }"
            placeholder="Email"
          />
          <div v-if="error.email" class="invalid-feedback center">
            {{ error.email[0]}}
          </div>
        </div>
        <div class="form-group mt-5">
          <input
            v-model="user.password"
            type="password"
            class="rounded-pill form-control"
            :class="{ 'is-invalid': error.password }"
            placeholder="Password"
          />
          <div v-if="error.password" class="invalid-feedback center">
            {{ error.password[0] }}
          </div>
        </div>
        <input type="submit" class="btn btn-primary btn-block" value="Đăng nhập" />
      </form>
      <p><a href="/">Quay Lại?</a></p>
    </div>
  </div>
</template>
<script>
import core from "../../core/api"
export default {
    data() {
    return {
      user: {
        email:null,
        password: null,
      },
      message :null,
      error:{}
    }
  },
  methods: {
     login: function() {
        this.error=[];
        this.message =null;
        core.post("login",this.user).then((res)=>{
            window.localStorage.setItem("token", res.data.token);
            this.$router.push({ name: "home" });
        })
        .catch((err)=>{
            this.message=err.response.data.message;
            if(err.response.data.errors){
              this.error=err.response.data.errors;
            }
            
        })
     }  
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
 body {
  font-family: "Roboto", sans-serif;
  align-items: center;
  justify-content: center;
  background-size: cover;
 /* animation: bg 2s linear infinite alternate;*/
}
@keyframes bg {
  from {
    background-position: left;
  }
  to {
    background-position: right;
  }
}
.containers {
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login {
  width: 350px;
  box-shadow: -10px -10px 15px rgba(0, 0, 0, 0.3),
    10px 10px 15px rgba(0, 0, 0, 0.3);
  border: 10px solid #fff !important;
  padding: 5px !important;
  background-size: cover !important;
  border-radius: 50px !important;
  background-attachment: fixed !important;
  display: flex !important;
  align-items: center !important;
  flex-direction: column !important;
  background-color: #fff !important;
}
h1 {
  padding: 50px 0px 35px 0px;
}

input[type="submit"] {
  margin-top: 35px !important;
  width: 230px !important;
  height: 40px !important;
  border-radius: 20px !important;
  font-size: 20px !important;
  font-weight: 100px !important;
  color: #111 !important;
  background-color: #5959fd !important;
  box-shadow: -10px -10px 15px rgba(121, 3, 3, 0.1),
    10px 10px 15px rgba(128, 125, 125, 0.1);
} 
p {
  color: #111;
  padding: 15px 0px;
  letter-spacing: 1px;
}
span {
  padding: 5px 0px 0px 0px;
  color: rgb(7, 7, 7);
  font-size: 20px;
}
</style>

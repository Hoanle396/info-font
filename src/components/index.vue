<template>
   <div>
  <div v-if="loadd">
      <div class="row justify-content-center">
          <div id="preloader">
            <div id="loader"></div>
          </div>
      </div>
  </div>   
  <div v-if="!loadd">
    <Navbar/>
    <Slide/>
    <section id="infomation" v-if="info">
      <div class="container mt-3">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-3 col-md-3">
            <div
              class="team-member"
              data-aos="zoom-out"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="3000"
            >
              <img
                class="mx-auto deg360 img-fluid rounded-circle"
                :src="info.avatar"
                alt=""
              />
              <h4>{{info.fullname}}</h4>
              <p class="text-muted">{{info.position}}</p>
              <a class="btn btn-dark btn-social mx-2" :href="info.gmail"
                ><i class="fa fa-envelope" style="color: cornflowerblue"></i
              ></a>
              <a
                class="btn btn-dark btn-social mx-2"
                :href="info.facebook"
                ><i
                  class="fab fa-facebook-square"
                  style="color: cornflowerblue"
                ></i
              ></a>
              <a
                class="btn btn-dark btn-social mx-2"
                :href="info.phonenumber"
                ><i class="fab fa-github" style="color: cornflowerblue"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section" v-if="info">
      <div class="container">
          <div class="text-center">
          <h3 class="text-uppercase text-warning">Information</h3>
        </div>
        <p class="text-center text-white text-justify">
          {{info.description}}
        </p>
      </div>  
    </section >
    <section class="page-section" id="skill" v-if="skills">
      <div class="container">
        <div class="text-center">
          <h2 class="text-uppercase text-warning">Skills for work</h2>
        </div>
        <div class="row mt-3">
          <div class="col-lg-4 col-sm-6 mb-4" data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="2000" v-for="skill in skills" :key="skill.id">
            <div class="portfolio-item">
              <a
                class="portfolio-link d-flex justify-content-center"
                :href="skill.docs"
                :style="{'text-decoration':'none'}"
              >
                <!-- <i :class="skill.logo" :style="{'color':skill.color}" class="fa-8x"></i> -->
                <img  width="100px" :src="skill.logo" />
                 
              </a>
              <div class="portfolio-caption">
               <h3 class="text-center " :style="{'color':skill.color}">{{ skill.name }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="page-section" id="feedback" >
      <div class="container mb-5">
        <div class="row mt-5" data-aos="fade-down-right"  data-aos-easing="ease-out-cubic" data-aos-duration="2000">
          <div class="col-lg-4">
            <div class="info">
              <div class="address">
                <h4 class="text-danger text-warning">Address:</h4>
                <p class="text-danger text-warning">470, Trần Đại Nghĩa, Ngũ Hành Sơn, Đà Nẵng</p>
              </div>
              <div class="email">
                <h4 class="text-danger text-warning">Email:</h4>
                <p class="text-danger text-warning">hoanle396@gmail.com</p>
              </div>
              <div class="phone">
                <h4 class="text-danger text-warning">Phone number:</h4>
                <p class="text-danger text-warning">+84 345 648 638</p>
              </div>
            </div>
          </div>
          <div class="col-lg-8 mt-5 mt-lg-0">
            <form
              method="post"
              role="form"
              class="php-email-form"
              @submit.prevent="feedback()"
            >
              <div class="row">
                <div class="col-md-6 form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Full Name"
                    v-model="contact.fullname"
                    required
                  />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Address"
                    v-model="contact.email"
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Subject"
                  v-model="contact.subject"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="Message"
                  v-model="contact.content"
                  required
                ></textarea>
              </div>
              <div class="my-3">
                <div v-if="loading" class="text-warning">Sendding</div>
                <div v-if="error" class="text-danger">{{error}}</div>
                <div v-if="success" class="text-success">Your Feedback has been sent. Thank you!</div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary rounded-pill">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <Footer/>
  </div>
  </div>
</template>
<script>
import Navbar from './layout/navbar.vue'
import Slide from './layout/slide.vue'
import Footer from './layout/footer.vue'
import core from "../core/api.js"
const axios= require('axios')
export default {
 data(){
   return{
     skills:{},
     info:null,
     contact:{
       fullname:"",
       email:"",
       subject:"",
       content:"",
     },
     error:null,
     loading:false,
     success:false,
     loadd:true,
   }
 },
  components:{
   Navbar,
   Slide,
   Footer
  },
 mounted() {
    this.loaddata();
 },
 methods: {
    loaddata: function(){
     axios.get('https://api.ipify.org').then((resp)=>{
       console.log(resp.data);
          core.get('home/'+resp.data).then((res)=>{
         this.info=res.data.info;
        this.skills=res.data.skill;      
     })
     .catch(()=>{
       alert("error load this page");
     })
     .finally(()=>{
       this.loadd=false;
     })
     })
     
   },
   feedback :function(){
     this.loading=true;
     this.success=false;
     this.error=false;
      core.post('feedback',this.contact).then(()=>{
        this.loading=false;
        this.success=true;
        this.loading=false;
        this.contact.fullname="";
        this.contact.email="";
        this.contact.subject="";
        this.contact.content="";
      })
      .catch((err)=>{
        this.loading=false;
        this.error=err.response.data.error;
      })
   }
 }
};
</script>
<style>
.team-member {
  margin-bottom: 3rem;
  text-align: center;
}
.team-member img {
  width: 14rem;
  height: 14rem;
  border: 0.5rem solid rgba(0, 0, 0, 0.1);
}
.team-member h4 {
  margin-top: 1.5rem;
  margin-bottom: 0;
}
.deg360{
  animation: deg360 10s infinite; 
} 
@keyframes deg360 {
  0%{
    transform :rotate(0deg);
  }
 100% {
    transform: rotate(360deg);
  }
}
#preloader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
#loader {
    display: block;
    position: relative;
    left: 50%;
    top: 50%;
    width: 150px;
    height: 150px;
    margin: -75px 0 0 -75px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #9370DB;
    -webkit-animation: spin 2s linear infinite;
    animation: spin 2s linear infinite;
}
#loader:before {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #BA55D3;
    -webkit-animation: spin 3s linear infinite;
    animation: spin 3s linear infinite;
}
#loader:after {
    content: "";
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    border-radius: 50%;
    border: 5px solid transparent;
    border-top-color: #FF00FF;
    -webkit-animation: spin 1.5s linear infinite;
    animation: spin 1.5s linear infinite;
}
@-webkit-keyframes spin {
    0%   {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes spin {
    0%   {
        -webkit-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
</style>

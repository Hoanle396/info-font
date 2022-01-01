<template>
  <div>
  <div v-if="loadd" class="container">
      <div class="row justify-content-center">
          <div class="loader"></div>
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
          <h3 class="text-uppercase text-warning">Đôi dòng giới thiệu</h3>
        </div>
        <p class="text-center text-white text-justify">
          {{info.description}}
        </p>
      </div>  
    </section >
    <section class="page-section" id="skill" v-if="skills">
      <div class="container">
        <div class="text-center">
          <h2 class="text-uppercase text-warning">Kĩ năng công việc</h2>
        </div>
        <div class="row mt-3">
          <div class="col-lg-4 col-sm-6 mb-4" data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="2000" v-for="skill in skills" :key="skill.id">
            <div class="portfolio-item">
              <a
                class="portfolio-link d-flex justify-content-center"
                :href="skill.docs"
                :style="{'text-decoration':'none'}"
              >
                <i :class="skill.logo" :style="{'color':skill.color}" class="fa-8x"></i>
                 
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
                <h4 class="text-danger text-warning">Địa Chỉ</h4>
                <p class="text-danger text-warning">470, Trần Đại Nghĩa, Ngũ Hành Sơn, Đà Nẵng</p>
              </div>
              <div class="email">
                <h4 class="text-danger text-warning">Email:</h4>
                <p class="text-danger text-warning">hoanle396@gmail.com</p>
              </div>
              <div class="phone">
                <h4 class="text-danger text-warning">Số Điện Thoại:</h4>
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
                    placeholder="Họ Và Tên"
                    v-model="contact.fullname"
                    required
                  />
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Địa Chỉ Email"
                    v-model="contact.email"
                    required
                  />
                </div>
              </div>
              <div class="form-group mt-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Tiêu Đề"
                  v-model="contact.subject"
                  required
                />
              </div>
              <div class="form-group mt-3">
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="Nội Dung"
                  v-model="contact.content"
                  required
                ></textarea>
              </div>
              <div class="my-3">
                <div v-if="loading" class="text-warning">Đang Gửi</div>
                <div v-if="error" class="text-danger">{{error}}</div>
                <div v-if="success" class="text-success">Phản hồi của bạn đã được gửi. Cảm ơn bạn!</div>
              </div>
              <div class="text-center">
                <button type="submit" class="btn btn-primary rounded-pill">
                  Gửi Phản Hồi
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
        this.loadd=false;
     })
     .catch(()=>{
       alert("error load this page");
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
.loader {
  margin-top: 20%;
  border: 26px solid #f3f3f3;
  border-radius: 50%;
  border-top: 26px solid violet;
  border-right: 26px solid rgb(77, 2, 83);
  border-bottom: 26px solid lightcoral;
  border-left: 26px solid pink;
  width: 180px;
  height: 180px;
  -webkit-animation: spin 2s linear infinite;
  animation: spin 2s linear infinite;
}

@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>

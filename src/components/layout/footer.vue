<template>
    <div data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="3000">
       <footer class="footer" id="fh5co-footer">
        <div class="container">
            <div class="row copyright">
                <div class="col-lg-12 col-sm-12 mb-1 text-center">
                    <p>
                        <small class="block">2022 &copy; All Rights Reserved.</small>
                   </p>
                    <ul class="fh5co-social-icons">
                        <li><a href="#"><i class="fab fa-facebook" ></i></a></li>
                        <li><a href="#"><i class="fab fa-twitter" ></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin" ></i></a></li>
                        <li><a href="#"><i class="fab fa-google-plus" ></i></a></li>
                        <li><a href="#"><i class="fa fa-rss" ></i></a></li>
                        <li><a href="#"><i class="fab fa-whatsapp" ></i></a></li>
                    </ul>
                </div>
            </div>

        </div>
    </footer>
    </div>
</template>
<script>
export default {
    props:{
        msg:{}
    }
}
</script>
<style>
.footer {
    padding-top: 2%;
    border-top: 2px solid gray;
    text-align: left;
    font-size: 0.9rem;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  }
  .fh5co-widget img{
    height:  5rem;
  }
  .fh5co-social-icons{
    list-style-type: none;

  }
  .fh5co-social-icons li{
    display: inline-block;
    margin-right:1rem;
  }
  .text-center .block{
    color: rgb(255, 153, 0);
    font-size: 16px;
  }
  .fh5co-footer-links{
    list-style-type: none;
  }
  .footer .container .row .active {
       border-left:1px solid gray ;
  }
  .footer .container .row .active ul li a{
     color: rgb(255, 196, 0);
  }
</style>

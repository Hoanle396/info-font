<template>
    <nav class="navbar navbar-expand-md fixed-top" data-aos="fade-up" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href=""><img src="https://i.ibb.co/qCq72fj/Untitled-1.png" width="100" /></a>
             <button
          class="navbar-toggler navbar-toggler-right border-0 focus-0"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <i class="fas fa-bars ml-1"></i>
        </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item"><a class="nav-link text-white" href="#index">Home</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#infomation">Information</a></li>
                    <li class="nav-item"><a class="nav-link text-white" href="#skill">Skills</a></li>
                     <li class="nav-item"><a class="nav-link text-white" href="#feedback">Feedback</a></li>
                    <li class="nav-item"><router-link class="nav-link text-white" to="login">Login</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
}
</script>
<style>
.navbar-nav{
  /* margin-left: 30% !important; */
  float: right;
  margin-left:auto;
}
header.masthead {
    padding-top: 10.5rem;
    padding-bottom: 6rem;
    text-align: center;
    color: #fff;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-position: center center;
    background-size: cover;
}
header.masthead .masthead-subheading {
    font-size: 1.5rem;
    font-style: italic;
    line-height: 1.5rem;
    margin-bottom: 25px;
    font-family: "Droid Serif", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
header.masthead .masthead-heading {
    font-size: 3.25rem;
    font-weight: 700;
    line-height: 3.25rem;
    margin-bottom: 2rem;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.focus-0 {
    outline: none !important;
    box-shadow: none !important;
}
</style>

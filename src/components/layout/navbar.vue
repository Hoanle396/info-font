<template>
    <nav class="navbar navbar-expand-lg fixed-top" data-aos="fade-up" id="mainNav">
        <div class="container">
            <a class="navbar-brand js-scroll-trigger" href=""><img src="../../assets/logo.png" width="50" /></a>
            <div >
                <ul class="navbar-nav text-uppercase ml-auto">
                    <li class="nav-item"><a class="nav-link text-" href="#index">Trang Đầu</a></li>
                    <li class="nav-item"><a class="nav-link" href="#infomation">Thông Tin</a></li>
                    <li class="nav-item"><a class="nav-link" href="#skill">Kĩ Năng</a></li>
                     <li class="nav-item"><a class="nav-link" href="#feedback">Phản Hồi</a></li>
                    <li class="nav-item"><router-link class="nav-link" to="login">Đăng Nhập</router-link></li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    props:{
        msg:{}
    }
}
</script>
<style>
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
</style>
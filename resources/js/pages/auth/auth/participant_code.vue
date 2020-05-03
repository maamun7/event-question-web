<template>
    <div>
        <div class="container-fluid">
            <div class="title">
                <div class="row justify-content-around">
                    <div class="col-12 col-md-2">
                        <div class="logo-img text-lg-left">
                            <router-link to="/">
                                <img class="img-wrap icon-wrap" src="build/img/login_bg/home-icon.png" alt="">
                            </router-link>
                        </div>
                    </div>
                    <div class="col-12 col-md-8">
                        <div class="logo-img text-center">
                            <img class="img-wrap" src="build/img/common/logo/slido_green.png" alt="">
                        </div>
                    </div>
                    <div class="col-12 col-md-2">
                        <div class="logo-img text-lg-right">
                            <div class="dropdown">
                                <img class="img-wrap icon-wrap dropdown-toggle" type="button" data-toggle="dropdown" src="build/img/login_bg/images.png" alt="">
                                <ul class="dropdown-menu text-center">
                                    <li><router-link to="/login" class="nav-link wrap">Admin login</router-link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-box">
                <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="content-box-wrapx mt-0">
                            <div class="content-box-wrap">
                                <div class="content-body">
                                    <div class="content-form-wrap">
                                        <form id="myForm" action="">
                                            <div class="input-wrap">
                                                <div class="floating-label">
                                                    <input type="text" name="participant_code" class="form-bind wrap" placeholder="#    enter code here">
                                                    <div class="icon">
                                                        <img class="arrow-wrap" src="build/img/login_bg/green_arrow.png" alt="">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                        <div class="acceptable-app text-center">
                                            <span class="code-wrap">By using this app I agree to the <a class="navuse" href="#">Acceptable Use</a></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="privacy text-center">
                        <a class="navuse" href="#">Privacy Policy</a> | <a class="navuse" href="">Privacy Settings</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "participant_code"
    }
</script>

<style type="text/css">
    body {
        font-family: Roboto,sans-serif;
        background-color: #f8f8f8;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 50%;
        background-attachment: fixed;
        margin: 0;
        padding: 0;
        overflow: hidden;
    }
    img.img-wrap {
        margin-top: 20px;
        height: 33px;
        margin-right: -45px;
    }
    p.participant-wrap {
        font-size: 18px;
        text-align: center;
        color: rgba(0,0,0,.6);
    }
    a.nav-wrap {
        font-weight: 700;
        color: rgba(0,0,0,.6);
        text-decoration: underline;
    }
    p.content-header-wrap {
        font-size: 24px;
        font-weight: 400;
        color: #000;
        color: rgba(0,0,0,.75);
        padding: 0 10px;
        margin-bottom: 8px;
        line-height: 32px;
        text-align: center;
    }
    p.content-account-wrap {
        font-size: 14px;
        text-align: center;
        margin-top: -27px;
    }
    input.form-bind {
        background-color: transparent;
        border-style: none;
        border-bottom: 1px solid darkgrey;
        display: block;
        width: 100%;
        outline: none;
        font-size: 14px;
        padding: 6px;
        font-weight: 500;
    }
    button.button-wrap {
        -webkit-transition: background-color .3s ease;
        -o-transition: background-color .3s ease;
        transition: background-color .3s ease;
        height: 40px;
        background-color: #70be4e;
        border-radius: 28px;
        padding: 0 40px;
        font-size: 14px;
        font-weight: 400;
        color: #fff;
        border: 0;
        min-height: 40px;
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.2);
        box-shadow: 0 1px 2px rgba(0,0,0,.2);
        margin-top: 30px;
    }
    .content-body {
        margin-top: 53px;
    }
    input.form-bind.wrap {
        margin-top: -15px;
    }
    .content-box-wrap {
        min-width: 70%;
    }
    .form-opportunity {
        margin: 25px 0px -6px 0px;
    }
    span.remeber-wrap {
        font-size: 15px;
        color: gray;
        margin-right: -43px;
    }
    .remember {
        font-size: 15px;
        color: grey;
        margin-left: -15px;
    }
    img.img-wrap.icon-wrap {
        height: 16px;
        margin-left: -68px;
    }
    a.nav-link.wrap:hover {
        background: gainsboro;
        color: black;
    }
    a.nav-link.wrap {
        color:dimgrey;
        font-size: 13px;
    }
    input.form-bind.wrap {
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.15);
        max-width: 400px;
        margin-left: 335px;
        border-radius: 36px;
        padding: 15px;
        background: white;
        font-size: 18px;
        margin-top: 13px;
    }
    .content-box {
        margin-top: 182px;
    }
    img.arrow-wrap {
        margin-right: 2px;
        position: relative;
        margin:-69px 0px 16px 694px;
        width: 31px;
    }
    input.form-bind.wrap:hover {
        box-shadow: 0 20px 40px 0 rgba(0,0,0,.15);
    }
    span.code-wrap {
        text-align: center;
        font-size: 10px;
        color: gray;
        margin-left: 58px;
    }
    a.navuse {
        text-decoration: underline;
        color: gray;
        font-weight: 700;
    }
    a.navuse:hover {
        text-decoration: underline;
        color: black;
        font-weight: 700;
    }
    .privacy.text-center {
        margin: 251px;
        font-size: 10px;
        margin-left: 291px;
    }
    img.img-wrap.icon-wrap.dropdown-toggle {
        margin-right: -145px;
    }
    .logo-img.text-lg-left {
      margin-left: -79px;
    }
</style>

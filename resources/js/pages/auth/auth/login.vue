<template>
    <span>
        <div class="container">
            <div class="title">
                <div class="row">
                    <div class="col-12">
                        <div class="logo-img text-center">
                            <img class="img-wrapx" src="build/img/common/logo/slido_green.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
            <div class="account-space">
                <div class="content-box mt-4">
                    <div class="row justify-content-around">
                        <div class="col-12 col-md-6">
                            <div class="participant-content wrapx">
                                <p class="participant-wrapx">Log in to your account  <span><router-link :to="{ name: 'signUp' }" class="nav-wrapx">or create account</router-link></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-box-card">
                <div class="row">
                    <div class="col-12 col-md-12">
                        <div class="content-box mt-0">
                            <div class="content-box-wrapx">
                                <div class="content-header">
                                    <div class="header-main">
                                        <p class="content-header-wrapx">Welcome</p><br>
                                    </div>
                                </div>
                                <div class="content-body">
                                    <div class="content-form-wrapxx">
                                        <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                                            <div class="input-wrapxx">
                                                <div class="floating-labelx mt-5">
                                                    <input v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }" type="email" name="email" class="form-bind wrapx" placeholder="Your email">
                                                    <has-error :form="form" field="email" />
                                                </div>
                                                <div class="floating-labelx mt-5">
                                                    <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" type="password" name="password" class="form-bind wrapx" placeholder="password">
                                                    <has-error :form="form" field="password" />
                                                </div>
                                            </div>
                                            <div class="button-submitx text-center">
                                                <div class="form-opportunityx">
                                                    <div class="row">
                                                        <div class="col-12 col-md-6 pull-left">
                                                            <div class="rememberx">
                                                                <input v-model="remember" type="checkbox" name="remember" class="form-check-input">
                                                                <label>{{ $t('remember_me') }}</label>
                                                            </div>
                                                        </div>
                                                        <div class="col-12 col-md-6 pull-right">
                                                            <router-link :to="{ name: 'password.request' }" class="forget-class">
                                                                <span class="remeber-wrapxx">Forgot password?</span>
                                                            </router-link>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button class="button-wrapx" :loading="form.busy" type="button" value="">{{ $t('login') }}</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </span>
</template>

<script>
    import Form from "vform";

    export default {
        name: "login",
        middleware: 'guest',

        metaInfo () {
          return { title: this.$t('login') }
        },

        data: () => ({
          form: new Form({
            email: '',
            password: ''
          }),
          remember: false
        }),

        methods: {
          async login () {
            // Submit the form.
            const { data } = await this.form.post('/api/login')

            // Save the token.
            this.$store.dispatch('auth/saveToken', {
              token: data.token,
              remember: this.remember
            })

            // Fetch the user.
            await this.$store.dispatch('auth/fetchUser')

            // Redirect home.
            this.$router.push({ name: 'home' })
          }
        }
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
    img.img-wrapx {
        margin-top: 20px;
        height: 33px;
    }
    p.participant-wrapx {
        font-size: 18px;
        text-align: center;
        color: rgba(0,0,0,.6);
    }
    a.nav-wrapx {
        font-weight: 700;
        color: rgba(0,0,0,.6);
        text-decoration: underline;
    }
    .content-box.mt-0{
        margin: 0 auto;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: start;
        -webkit-justify-content: flex-start;
        -ms-flex-pack: start;
        justify-content: flex-start;
        -webkit-box-align: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        max-width: 500px;
        width: 100%;
        position: relative;
        height: auto;
        min-height: 300px;
        background-color: #fff;
        border-radius: 8px;
        -webkit-box-shadow: 0 10px 20px 0 rgba(0,0,0,.15);
        box-shadow: 0 10px 20px 0 rgba(0,0,0,.15);
        padding-top: 40px;
        padding-bottom: 40px;
    }
    p.content-header-wrapx {
        font-size: 24px;
        font-weight: 400;
        color: #000;
        color: rgba(0,0,0,.75);
        padding: 0 10px;
        margin-bottom: 8px;
        line-height: 32px;
        text-align: center;
    }
    p.content-account-wrapx {
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
    button.button-wrapx {
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
    input.form-bind.wrapx {
        margin-top: -15px;
    }
    .content-box-wrapx {
        min-width: 70%;
    }
    .form-opportunityx {
        margin: 25px 0px -6px 0px;
    }
    span.remeber-wrapx {
        font-size: 15px;
        color: gray;
        margin-right: -43px;
    }
    .remember {
        font-size: 15px;
        color: grey;
        margin-left: -15px;
    }
    .content-box-card {
        margin-top: 11px;
    }
    button.button-wrapx:hover {
        background-color: lawngreen;
    }
    span.remeber-wrapxx {
      font-size: 14px;
      margin-right: -82px;
    }
    a.forget-class:hover {
      text-decoration: underline;
      color: #39ac37;
    }
    a.forget-class {
      color: black;
    }
    .rememberx {
      margin-left: -50px;
      font-size: 14px;
      color: black;
    }
    .rememberx:hover {
      color: #39ac37;
    }
    a.nav-wrapx:hover {
      color: #39ac37;
    }

</style>

<template>
    <div>
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
                                <p class="participant-wrapx">Want to join Slido as a participant? <span><router-link :to="{ name: 'event' }" class="nav-wrapx">Enter code here</router-link></span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="content-box mt-0">
                <div class="content-box-wrapx">
                    <div class="content-header">
                        <div class="header-main">
                            <p class="content-header-wrapx">Sign up for free to create your event</p><br>
                            <p class="content-account-wrapx">or <router-link to="/login" class="log-class">log in to your account</router-link></p>
                        </div>
                    </div>
                    <div class="content-body">
                        <div class="content-form-wrapx">
                            <form action="">
                                <div class="input-wrapxx">
                                    <div class="floating-labelx">
                                        <input type="text" class="form-bind" placeholder="Full Name">
                                    </div>
                                    <div class="floating-labelx mt-5">
                                        <input type="text" class="form-bind wrapx" placeholder="Your email">
                                    </div>
                                    <div class="floating-labelx mt-5">
                                        <input type="text" class="form-bind wrapx" placeholder="Password">
                                    </div>
                                </div>
                                <div class="button-submit text-center">
                                    <button class="button-wrapx">Create account</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <!-- Grid column -->
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sign_up"
    }
</script>

<style scoped>
  a.log-class:hover {
    color: #39ac37;
  }
</style>

<template>
  <div>

    <span id="Navigation">
      <div class="top-right links">
        <template v-if="authenticated">
          <router-link :to="{ name: 'home' }">
            {{ $t('home') }}
          </router-link>
        </template>
        <template v-else>
        <router-link :to="{ name: 'about' }">
          {{ $t('about') }}
        </router-link>
        <noscript><iframe src="../external.html?link=https://www.googletagmanager.com/ns.html?id=GTM-NRJ3FC&amp;gtm_auth=oJWbMyZZzwDhB8TGQ5i02A&amp;gtm_preview=env-2&amp;gtm_cookies_win=x"
                          height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>    <input type="checkbox" class="menu__toggle js-menu-toggle" id="menu-toggle" hidden>
        <nav class="menu js-menu wrap">
            <div class="row menu__container wrap-menu">
                <div class="menu__logo"><router-link to="/" data-exp-cta="open-i-link_link_slido-logo_header_main-menu"><img class="menu__logo-img" width="106px" src="/build/img/common/logo/slido_green.png" alt="Slido logo."></router-link></div>
                <label class="menu__toggler" for="menu-toggle">
                    <span class="menu__open-icon"><img src="build/img/common/icon/menu-f922cc6325.svg" alt="Open menu."></span>
                    <span class="menu__close-icon"><img src="build/img/common/icon/close-black-8cda35716a.svg" alt="Close menu."></span>
                </label>
                <ul class="menu__main wrap-menu-right">
                    <li class="menu__item menu__item--with-dropdown">
                        <input type="checkbox" id="submenu-toggler-product" class="menu__item-toggler" hidden>
                        <label class="menu__label" for="submenu-toggler-product"><a class="menu__link">Product</a></label>
                        <ul class="menu__dropdown menu__dropdown--with-extra menu__dropdown--product">
                            <li class="menu__subitem" data-extra="product"><a class="menu__subitem-link" href="product.html" data-exp-cta="open-i-link_link_product_header_main-menu">Product Tour</a></li>
                            <li class="menu__subitem" data-extra="questions"><a class="menu__subitem-link" href="features-questions.html" data-exp-cta="open-i-link_link_questions_header_main-menu_product">Questions</a></li>
                            <li class="menu__subitem" data-extra="polls"><a class="menu__subitem-link" href="features-polls.html" data-exp-cta="open-i-link_link_polls_header_main-menu_product">Live Polls</a></li>
                            <li class="menu__subitem" data-extra="quizzes"><a class="menu__subitem-link" href="features-quizzes.html" data-exp-cta="open-i-link_link_quizzes_header_main-menu_product">Quizzes</a></li>
                            <li class="menu__subitem" data-extra="analytics"><a class="menu__subitem-link" href="features-analytics.html" data-exp-cta="open-i-link_link_analytics_header_main-menu_product">Analytics</a></li>
                            <li class="menu__subitem" data-extra="integrations"><a class="menu__subitem-link" href="features-integrations.html" data-exp-cta="open-i-link_link_integrations_header_main-menu_product">Integrations</a></li>
                            <li class="menu__extra" data-extra="product">
                                <h4 class="h4 menu__title menu__title--product">Product tour</h4>
                                <p class="menu__extra-desc">
                                    See how Slido can help you engage your audience, whether it’s your team or event attendees.
                                </p>
                                <p class="menu__learn-more"><a class="button button--tertiary" href="product.html" data-exp-cta="open-learn_link_learn-more_header_main-menu_product">Learn more</a></p>
                            </li>
                            <li class="menu__extra" data-extra="questions">
                                <h4 class="h4 menu__title menu__title--questions">Questions</h4>
                                <p class="menu__extra-desc">
                                    Let your participants ask questions from any device and vote for their favorite ones.
                                </p>
                                <p class="menu__learn-more"><a class="button button--tertiary" href="features-questions.html" data-exp-cta="open-learn_link_learn-more_header_main-menu_questions">Learn more</a></p>
                            </li>
                            <li class="menu__extra" data-extra="polls">
                                <h4 class="h4 menu__title menu__title--polls">Live polls</h4>
                                <p class="menu__extra-desc">
                                    Make your meetings and events more interactive by polling your audience in real time.
                                </p>
                                <p class="menu__learn-more"><a class="button button--tertiary" href="features-polls.html" data-exp-cta="open-learn_link_learn-more_header_main-menu_polls">Learn more</a></p>
                            </li>
                            <li class="menu__extra" data-extra="quizzes">
                                <h4 class="h4 menu__title menu__title--quizzes">Quizzes</h4>
                                <p class="menu__extra-desc">
                                    Make learning more fun, dynamic and social with live quizzes.
                                </p>
                                <p class="menu__learn-more"><a class="button button--tertiary" href="features-quizzes.html" data-exp-cta="open-learn_link_learn-more_header_main-menu_quizzes">Learn more</a></p>
                            </li>
                            <li class="menu__extra" data-extra="analytics">
                                <h4 class="h4 menu__title menu__title--analytics">Analytics</h4>
                                <p class="menu__extra-desc">
                                    Discover the most popular questions, topics and insights about your audience.
                                </p>
                                <p class="menu__learn-more"><a class="button button--tertiary" href="features-analytics.html" data-exp-cta="open-learn_link_learn-more_header_main-menu_analytics">Learn more</a></p>
                            </li>
                            <li class="menu__extra" data-extra="integrations">
                                <h4 class="h4 menu__title menu__title--integrations">Integrations</h4>
                                <p class="menu__extra-desc">
                                    Make Slido part of your workflow, whether it’s at your workplace or at your conference.
                                </p>
                                <p class="menu__learn-more"><a class="button button--tertiary" href="features-integrations.html" data-exp-cta="open-learn_link_learn-more_header_main-menu_integrations">Learn more</a></p>
                            </li>
                        </ul>
                    </li>
                    <li class="menu__item menu__item--with-dropdown">
                        <input type="checkbox" id="submenu-toggler-use-cases" class="menu__item-toggler" hidden>
                        <label class="menu__label" for="submenu-toggler-use-cases"><a class="menu__link">Solutions</a></label>
                        <ul class="menu__dropdown menu__dropdown--with-extra menu__dropdown--solutions">
                            <li class="menu__subitem" data-extra="remote-meetings"><a class="menu__subitem-link" href="remote-meetings.html" data-exp-cta="open-i-link_link_remote-meetings_header_main-menu">Remote Meetings</a></li>
                            <li class="menu__subitem" data-extra="virtual-events"><a class="menu__subitem-link" href="virtual-events.html" data-exp-cta="open-i-link_link_virtual-events_header_main-menu">Virtual Events</a></li>
                            <li class="menu__subitem" data-extra="business"><a class="menu__subitem-link" href="business.html" data-exp-cta="open-i-link_link_business_header_main-menu">Business</a></li>
                            <li class="menu__subitem" data-extra="conferences"><a class="menu__subitem-link" href="conferences.html" data-exp-cta="open-i-link_link_conferences_header_main-menu">Conferences</a></li>
                            <li class="menu__subitem" data-extra="education"><a class="menu__subitem-link" href="education.html" data-exp-cta="open-i-link_link_education_header_main-menu">Education</a></li>
                            <li class="menu__subitem menu__subitem--divider"></li>
                            <li class="menu__subitem" data-extra="customer-stories"><a class="menu__subitem-link" href="customer-stories.html" data-exp-cta="open-i-link_link_customer-stories_header_main-menu">Customer Stories</a></li>
                            <li class="menu__extra" data-extra="remote-meetings">
                                <h4 class="h4 menu__title menu__title--remote-meetings">Remote Meetings</h4>
                                <p class="menu__extra-desc">
                                    Give everyone on your remote team a chance to participate, no matter where they are.
                                </p>
                                <p class="menu__learn-more"><a class="button button--tertiary" href="remote-meetings.html" data-exp-cta="open-learn_link_learn-more_header_main-menu_remote-meetings">Learn more</a></p>
                            </li>
                            <li class="menu__extra" data-extra="virtual-events">
                                <h4 class="h4 menu__title menu__title--virtual-events">Virtual Events</h4>
                                <p class="menu__extra-desc">
                                    Make your online participants part of the event with interactive Q&amp;A and live polls.
                                </p>
                                <p class="menu__learn-more"><a class="button button--tertiary" href="virtual-events.html" data-exp-cta="open-learn_link_learn-more_header_main-menu_virtual-events">Learn more</a></p>
                            </li>
                            <li class="menu__extra" data-extra="business">
                                <h4 class="h4 menu__title menu__title--business">Business</h4>
                                <p class="menu__extra-desc">
                                    Engage your employees at town halls, all-hands or team meetings.
                                </p>
                                <p class="menu__learn-more"><a class="button button--tertiary" href="business.html" data-exp-cta="open-learn_link_learn-more_header_main-menu_business">Learn more</a></p>
                            </li>
                            <li class="menu__extra" data-extra="conferences">
                                <h4 class="h4 menu__title menu__title--conferences">Conferences</h4>
                                <p class="menu__extra-desc">
                                    Make your events more interactive by including everyone in a live Q&amp;A and real-time polling.
                                </p>
                                <p class="menu__learn-more"><a class="button button--tertiary" href="conferences.html" data-exp-cta="open-learn_link_learn-more_header_main-menu_conferences">Learn more</a></p>
                            </li>
                            <li class="menu__extra" data-extra="education">
                                <h4 class="h4 menu__title menu__title--education">Education</h4>
                                <p class="menu__extra-desc">
                                    Keep your students engaged with live polls, quizzes and interactive Q&amp;A.
                                </p>
                                <p class="menu__learn-more"><a class="button button--tertiary" href="education.html" data-exp-cta="open-learn_link_learn-more_header_main-menu_education">Learn more</a></p>
                            </li>
                            <li class="menu__extra" data-extra="customer-stories">
                                <h4 class="h4 menu__title menu__title--customer-stories">Customer Stories</h4>
                                <p class="menu__extra-desc">
                                    Discover how our customers use Slido to give their audience a voice.
                                </p>
                                <p class="menu__learn-more"><a class="button button--tertiary" href="customer-stories.html" data-exp-cta="open-learn_link_learn-more_header_main-menu_customer-stories">Learn more</a></p>
                            </li>
                        </ul>
                    </li>
                    <li class="menu__item"><a class="menu__link" href="pricingfa77.html?plan=annual" data-exp-cta="open-i-link_link_pricing_header_main-menu">Pricing</a></li>
                    <li class="menu__item menu__item--with-dropdown">
                        <input type="checkbox" id="submenu-toggler-resources" class="menu__item-toggler" hidden>
                        <label class="menu__label" for="submenu-toggler-resources"><a class="menu__link">Resources</a></label>
                        <ul class="menu__dropdown">
                            <li class="menu__subitem"><a class="menu__subitem-link" href="../external.html?link=https://blog.sli.do/" data-exp-cta="open-i-link_link_blog_header_main-menu">Blog</a></li>
                            <li class="menu__subitem"><a class="menu__subitem-link" href="use-cases.html" data-exp-cta="open-i-link_link_use-cases_header_main-menu">Use Cases</a></li>
                            <li class="menu__subitem"><a class="menu__subitem-link" href="webinars.html" data-exp-cta="open-i-link_link_webinars_header_main-menu">Webinars</a></li>
                            <li class="menu__subitem"><a class="menu__subitem-link" href="videos.html" data-exp-cta="open-i-link_link_videos_header_main-menu">Videos</a></li>
                            <li class="menu__subitem"><a class="menu__subitem-link" href="../external.html?link=https://help.sli.do/" data-exp-cta="open-i-link_link_help-center_header_main-menu">Help Center</a></li>
                            <li class="menu__subitem"><a class="menu__subitem-link" href="../external.html?link=https://resources.sli.do/" data-exp-cta="open-i-link_link_documents_header_main-menu">Documents</a></li>
                            <li class="menu__subitem"><a class="menu__subitem-link" href="switcher.html" data-exp-cta="open-i-link_link_download-switcher_header_main-menu">Download Switcher</a></li>
                        </ul>
                    </li>
                    <li class="menu__item"><a class="menu__link" href="enterprise.html" data-exp-cta="open-i-link_link_enterprise_header_main-menu">Enterprise</a></li>
                </ul>
                <ul class="menu__account wrap-menu-account">
                    <li class="menu__item">
                        <router-link :to="{ name: 'login' }" class="menu__link">
                            {{ $t('Log In') }}
                        </router-link>
                    </li>
                    <li class="menu__item">
                        <router-link :to="{ name: 'signUp' }" class="button button--small">
                            {{ $t('SignUp') }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
      </template>
    </div>
        <div class="menu__padding"></div>
    </span>

    <div class="text-center">
<!--      <div class="title mb-4">-->
<!--        {{ title }}-->
<!--      </div>-->

      <div class="container-fluid">
        <div class="links">
          <header class="header-index">
            <div class="header-index__left">
              <div class="header-index__left-container">
                <h3 class="h3 header-index__join-title">
                  <span class="display-block">Joining as a participant?</span>
                </h3>
                <form id="join-event-form" class="header-index__form" method="GET" action="../external.html?link=https://app.sli.do/">
                  <div class="input input--icon">
                    <div class="input__container">
                      <i class="input__icon"><img src="build/img/common/icon/hash-0ab5cf4eee.svg" alt=""></i>
                      <label for="join-event" class="visually-hidden">Enter event code to join</label>
                      <input name="search" id="join-event" class="input__field" type="text" placeholder="Enter event code" autocomplete="off" maxlength="32">
                    </div>
                  </div>
                  <button type="submit" class="button button--wide">Join an existing event</button>
                  <p class="small header-index__consent">By using Slido I agree to the <a class="link" href="acceptable-use.html" data-exp-cta="open-i-link_link_policy_content_hero_acceptable-use">Policy</a></p>
                </form>
                <a class="header-index__scroll" href="#below-fold"><svg width="24" height="35" fill="none" xmlns="../external.html?link=http://www.w3.org/2000/svg"><title>Scroll down to learn more</title><path d="M12 32V0M1 23l11 10 11-10" stroke="#000" stroke-width="2"></path></svg></a>
              </div>
            </div>
            <div class="header-index__right">
              <div class="header-index__right-container">
                <h2 class="subheadline">The ultimate Q&amp;A and polling platform</h2>
                <h1 class="h1 header-index__title">Give a voice to your<br class="only-desktop"> audience, wherever they are.</h1>
                <a class="button button--white button--hover-green header-index__signup-btn" href="../external.html?link=https://accounts.sli.do/signup" data-exp-cta="open-signup_signup_get-started-for-free_content_hero">Create your own Slido event</a>
                <p class="small header-index__tertiary-btns">
                  <a class="button button--tertiary button--white" data-video="TsZn2WfA3QI">Watch a video</a>
                  or
                  <a class="button button--tertiary button--white" href="request-demo.html" data-exp-cta="open-i-link_link_schedule-a-demo_content_hero">Schedule a demo</a>
                </p>
              </div>
            </div>
          </header>
        </div>
      </div>
    </div>
    <Foot/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Foot from '../layouts/wrap_foot'
export default {
  layout: 'basic',

  components:{
    Foot
  },

  metaInfo () {
    return { title: this.$t('home') }
  },

  data: () => ({
    title: window.config.appName
  }),

  computed: mapGetters({
    authenticated: 'auth/check'
  })
}
</script>

<style scoped>
.top-right {
  position: absolute;
  right: 10px;
  top: 18px;
}
header.header-index {
  margin-top: 560px;
}
ul.menu__main.wrap-menu-right {
  color: black;
  margin-right: -47px;
}
ul.menu__account.wrap-menu-account {
  margin-right: -57px;
}
.menu {
  border-bottom: 1px solid whitesmoke;
}
.header-index__right {
  width: 870px;
}
span.display-block {
  color: black;
  margin-bottom: 30px;
  font-size: 42px;
  font-weight: 600;
}
a.button.button--small:hover {
  color: white;
  text-decoration: none;
}
a.menu__link {
  color: black;
}
.button--hover-green:hover {
  background: #39ac37;
  border-color: #39ac37;
  text-decoration: none;
}
.header-index__right-container {
  text-align: left;
}
</style>

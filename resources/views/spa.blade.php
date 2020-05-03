@php
$config = [
    'appName' => config('app.name'),
    'locale' => $locale = app()->getLocale(),
    'locales' => config('app.locales'),
    'githubAuth' => config('services.github.client_id'),
];
@endphp
<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
  <meta name="description" content="Slido is the ultimate Q&amp;A and polling platform for meetings and events. It offers interactive Q&amp;A, live polls and insights about your audience.">
  <meta name="keywords" content="slido, sli.do, audience, interaction, Q&amp;A, questions, answers, polls, polling, presentations, conferences, events, meetings, eventprof, web app, event technology, create a poll, live polls, audience response system, live poll results, create poll, quiz, quizzes">
  <meta name="robots" content="index, follow">
  <!-- Meta:Facebook -->
  <meta property="og:url" content="index.html">
  <meta property="og:site_name" content="Slido">
  <meta property="og:type" content="website">
  <meta property="og:title" content="Slido - Audience Interaction Made Easy">
  <meta property="og:description" content="Slido is the ultimate Q&amp;A and polling platform for meetings and events. It offers interactive Q&amp;A, live polls and insights about your audience.">
  <meta property="og:image" content="build/img/common/meta/slido-meta-378964bc3f.jpg">
  <!-- Meta:Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@slidoapp">
  <meta name="twitter:title" content="Slido - Audience Interaction Made Easy">
  <meta name="twitter:description" content="Slido is the ultimate Q&amp;A and polling platform for meetings and events. It offers interactive Q&amp;A, live polls and insights about your audience.">
  <meta name="twitter:image" content="build/img/common/meta/slido-meta-378964bc3f.jpg">
  <!-- bing validation -->
  <meta name="msvalidate.01" content="F52FC187D1D59B17550EBDD3871065A4">
  <!-- Meta:Slack-App-Id -->
  <meta name="slack-app-id" content="A4BCD103T">
  <!-- Meta:Apple -->
  <meta name="apple-mobile-web-app-title" content="Slido">

  <title>Slido - Audience Interaction Made Easy</title>

  <link rel="canonical" href="index.html">
  <link rel="shortcut icon" href="favicon.ico">
  <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('build/img/favicon/apple-icon-180x180-74583761a6.png') }}">
  <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('build/img/favicon/favicon-32x32-5eee4e16d0.png') }}">
  <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('build/img/favicon/favicon-16x16-a0f2d57a6e.png') }}">

  <meta name="theme-color" content="#39ac37"><meta name="msapplication-navbutton-color" content="#39ac37"><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

  <link rel="preload" href="{{ asset('build/font/SlidoSans-Regular-a079114ef0.woff2') }}" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="{{ asset('build/font/SlidoSans-Medium-9eadf38839.woff2') }}" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="{{ asset('build/font/SlidoSans-Bold-c276b9ae0f.woff2') }}" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="{{ asset('build/font/SlidoSans-Normal-93c2a00fb2.woff2') }}" as="font" type="font/woff2" crossorigin>

  <!-- CSS -->
  <style>body{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;margin:0}*,:after,:before{box-sizing:border-box}h1,h2,h3,h4,p,ul{margin:0}[hidden]{display:none!important}.visually-hidden:not(:focus):not(:active){position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:nowrap}.banner__text,.row{position:relative;max-width:80rem;margin-left:auto;margin-right:auto;padding-left:1rem;padding-right:1rem}@media (min-width:21rem){.banner__text,.row{padding-left:2rem;padding-right:2rem}}@media (max-width:78rem){.only-desktop{display:none}}.display-block{display:block}body{font:1.125rem/1.75rem aktiv-grotesk,helvetica,arial,sans-serif}.h1,.h3,.h4{margin:0}.h1{font:bold 2.5rem/3rem SlidoSansFont,helvetica,arial,sans-serif}@media (min-width:48rem){.h1{font-size:3.5rem;line-height:4rem}}.h3{font:bold 1.75rem/2rem SlidoSansFont,helvetica,arial,sans-serif}@media (min-width:48rem){.h3{font-size:2.375rem;line-height:3rem}}.h4{font:bold 1.5rem/2rem SlidoSansFont,helvetica,arial,sans-serif}@media (min-width:48rem){.h4{font-size:1.5rem;line-height:2rem}}.subheadline{font:1.25rem/2rem aktiv-grotesk,helvetica,arial,sans-serif}@media (min-width:48rem){.subheadline{font-size:1.25rem;line-height:2rem}}.small{font:1rem/1.5rem aktiv-grotesk,helvetica,arial,sans-serif}.link{text-decoration:underline;color:#39ac37}sup{vertical-align:top;font-size:50%}.banner{display:none}@media (min-width:48rem){.banner{display:block;background:#39ac37;text-align:center}}.banner--aqua{background:#43bbc1}.banner__text{position:relative;padding:.5rem 2rem;font-size:1rem;line-height:1.5rem;color:#fff}.button{display:inline-block;width:100%;font:600 1rem/1.5rem SlidoSansFont,helvetica,arial,sans-serif;padding:.9375rem 2rem;border:.0625rem solid #39ac37;border-radius:.25rem;background:#39ac37;color:#fff;text-align:center;text-decoration:none}@media (min-width:48rem){.button{width:auto}}@media (min-width:48rem){.button--small{padding-top:.6875rem;padding-bottom:.6875rem}}.button--wide{width:100%}.button--white{background:#fff;border-color:#fff;color:#000}.button--tertiary{font-weight:700;padding:0;border:none;background:0 0;color:#39ac37;text-decoration:underline;width:initial}.button--tertiary.button--white{color:#fff}@-webkit-keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-50%)}100%{transform:translateY(0)}}@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-50%)}100%{transform:translateY(0)}}.header-index{padding-top:3rem;max-width:120rem;margin:0 auto}@media (min-width:48rem){.header-index{padding-top:0;display:flex;align-items:flex-end}}.header-index__left{position:relative;padding:0 1rem;flex-grow:384;flex-basis:0%}@media (min-width:21rem){.header-index__left{padding:0 2rem}}@media (min-width:48rem){.header-index__left{padding-top:4.5rem;padding-bottom:11.5rem}}@media (min-width:62rem){.header-index__left{padding-right:0}}@media (min-width:79rem){.header-index__left{display:flex;justify-content:flex-end;padding-bottom:calc(50vh - 14.25rem)}}@media (min-width:79rem) and (min-height:44rem){.header-index__left{padding-bottom:calc(50vh - 16.75rem)}}@media (min-width:48rem){.header-index__left-container{width:17.5rem}}.header-index__join-title{margin-bottom:1rem}.header-index__form>*{margin-bottom:.5rem}.header-index__consent{opacity:0}@media (min-width:48rem){.header-index__consent{font-size:.875rem}}@media (min-width:62rem){.header-index__consent{font-size:1rem}}.header-index__scroll{display:block;margin-top:2.5rem;margin-bottom:2rem;-webkit-animation:float 2.5s ease-in-out infinite;animation:float 2.5s ease-in-out infinite}@media (min-width:48rem){.header-index__scroll{display:none}}@media (min-width:79rem){.header-index__scroll{display:inline;margin:0;position:absolute;bottom:2.5rem;right:-17rem}.header-index__scroll path{stroke:#fff}}.header-index__right{padding:2.5rem 1rem;color:#fff;flex-grow:696;flex-basis:0%;background:url(public/build/img/index/slido-hero-give-remote-audience-voice-b07ca3bbe8.jpg) center;background-size:cover}@media (min-width:21rem){.header-index__right{padding-left:2rem;padding-right:2rem}}@media (min-width:48rem){.header-index__right{padding:12rem 2rem}}@media (min-width:62rem){.header-index__right{margin-left:11.184210526315789%;padding:12rem 2.631578947368421% 12rem 5.921052631578947%}}@media (min-width:79rem){.header-index__right{margin-left:8.5rem;padding:calc(50vh - 13.75rem) 0 calc(50vh - 13.75rem) 6.5rem}}@media (min-width:79rem) and (min-height:44rem){.header-index__right{padding:calc(50vh - 16.25rem) 0 calc(50vh - 16.25rem) 6.5rem}}@media (min-width:79rem){.header-index__right-container{max-width:32rem}}.header-index__title{font-size:3rem;line-height:3.5rem;margin-top:.5rem}@media (min-width:48rem){.header-index__title{margin-top:.5rem}}.header-index__signup-btn{margin-top:.5rem;margin-bottom:.5rem}@media (min-width:48rem){.header-index__signup-btn{margin-top:1.5rem;margin-bottom:0}}.header-index__tertiary-btns{text-align:center}@media (min-width:48rem){.header-index__tertiary-btns{text-align:left;display:block;margin-top:.5rem;margin-left:0;color:#fff}.header-index__tertiary-btns>.button{color:#fff}}.input__container{display:flex;position:relative}.input__icon{position:absolute;top:1.0625rem;left:1rem}.input__field{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:100%;background:#fff;border:.0625rem solid #999;border-radius:.25rem;padding:1rem;font-size:1.125rem;line-height:1.5rem;margin:0;resize:vertical}@media screen and (-ms-high-contrast:active),(-ms-high-contrast:none){.input__field{overflow:auto}}.input__field::-webkit-input-placeholder{color:#999}.input__field:-ms-input-placeholder{color:#999}.input__field::-ms-expand{display:none}.input__field::-webkit-input-placeholder{color:#999}.input__field::-moz-placeholder{color:#999}.input__field:-ms-input-placeholder{color:#999}.input__field::-ms-input-placeholder{color:#999}.input--icon .input__field{padding-left:3rem}.input__field:not([value=""]){outline:0}.input__field:not([value=""]):-ms-input-placeholder{color:#000}.input__field:not([value=""])::-webkit-input-placeholder{color:#000}.input__field:not([value=""])::-moz-placeholder{color:#000}.input__field:not([value=""])::-ms-input-placeholder{color:#000}@media (min-width:57rem){.logos{padding-top:3.5rem;padding-bottom:3.5rem}}.logos_list{display:flex;flex-wrap:wrap;align-items:center;margin:0 auto;padding:0 1rem;list-style:none;width:100%}@media (min-width:57rem){.logos_list{justify-content:space-between;flex-wrap:nowrap}}.logos__logo{display:inline-block;padding:2.5rem 0;flex-grow:1;flex-shrink:0;flex-basis:51%;text-align:center}@media (min-width:57rem){.logos__logo{padding:0;flex-grow:0;flex-shrink:1;flex-basis:auto}}.menu__padding{padding-top:4.5rem}@media (min-width:64rem){.menu__padding{padding-top:5rem}}.menu{position:fixed;top:0;right:0;left:0;z-index:91;background:#fff;padding:1.5rem 0}@media (min-width:64rem){.menu{padding:1rem 0}}@media (min-width:64rem){.menu__container{display:flex;justify-content:center;align-items:center}}.menu__logo{display:flex}@media (min-width:64rem){.menu__logo{flex:1}}.menu__logo-img{float:left}.menu__toggler{position:absolute;top:0;right:1rem}@media (min-width:21rem){.menu__toggler{right:2rem}}@media (min-width:64rem){.menu__toggler{display:none}}.menu__close-icon{display:none}.menu__account,.menu__main{display:none;list-style:none;padding:0;font-size:1.25rem;font-weight:500;line-height:1.5rem;font-family:SlidoSansFont,helvetica,arial,sans-serif}@media (min-width:64rem){.menu__account,.menu__main{display:flex;justify-content:center;align-items:center;font-size:1rem;font-weight:400}}.menu__item{position:relative}.menu__item+.menu__item{margin-top:1.5rem}@media (min-width:64rem){.menu__item+.menu__item{margin-top:0;margin-left:3rem}}@media (min-width:64rem){.menu__item--with-dropdown{padding:.5rem 0}}.menu__label{position:relative;display:block}.menu__label::after{content:url(public/build/img/common/icon/arrow_down-50beb1dbad.svg);display:inline-block;position:absolute;top:0;right:0}@media (min-width:64rem){.menu__label::after{content:normal}}.menu__link{text-decoration:none;color:inherit;font-weight:700}@media (min-width:64rem){.menu__link{font-weight:400;padding:.5rem 0}}.menu__main{margin-top:3rem}@media (min-width:64rem){.menu__main{margin-top:0}}.menu__dropdown{display:none;list-style:none;background-color:#fff;padding:.5rem 0 0 0;font-size:.875rem}@media (min-width:64rem){.menu__dropdown{box-shadow:0 .25rem .75rem rgba(0,0,0,.15);border-radius:.25rem;z-index:91;position:absolute;top:2.5rem;left:0;padding:1.5rem 0;font-size:1rem}}@media (min-width:64rem){.menu__dropdown--with-extra{flex-wrap:wrap;-webkit-writing-mode:tb-lr;-ms-writing-mode:tb-lr;writing-mode:tb-lr;-webkit-writing-mode:vertical-lr;-ms-writing-mode:tb-lr;writing-mode:vertical-lr}.menu__dropdown--with-extra>*{-webkit-writing-mode:lr-tb;-ms-writing-mode:lr-tb;writing-mode:lr-tb;-webkit-writing-mode:horizontal-tb;-ms-writing-mode:lr-tb;writing-mode:horizontal-tb}}@media (min-width:64rem){.menu__dropdown--product{height:21.5rem}}@media (min-width:64rem){.menu__dropdown--solutions{height:calc(21.5rem + 1px)}}.menu__subitem--divider{border-bottom:1px solid #f5f5f5;margin:0 2rem}.menu__subitem-link{display:block;white-space:nowrap;padding:.5rem 0;text-decoration:none;color:inherit;font-weight:400}@media (min-width:64rem){.menu__subitem-link{padding:.75rem 2rem}}.menu__extra{position:relative;display:none;width:20rem;background-color:#fff;padding:0 2rem;flex-grow:1;border-left:1px solid #f5f5f5;flex-direction:column;justify-content:flex-end}.menu__title{margin-bottom:.5rem}.menu__title::before{display:block;margin-bottom:.5rem}.menu__title--product::before{content:url(public/build/img/common/menu/product-icon-5f03b02fbf.svg)}.menu__title--questions::before{content:url(public/build/img/common/menu/questions-icon-44a35204e5.svg)}.menu__title--polls::before{content:url(public/build/img/common/menu/polls-icon-318148f01c.svg)}.menu__title--quizzes::before{content:url(public/build/img/common/menu/quizzes-icon-3691f01f61.svg)}.menu__title--analytics::before{content:url(public/build/img/common/menu/analytics-icon-d6e98fcae8.svg)}.menu__title--integrations::before{content:url(public/build/img/common/menu/integrations-icon-f0bb42236c.svg)}.menu__title--remote-meetings::before{content:url(public/build/img/common/menu/remote-meetings-icon-38eabd3dfd.svg)}.menu__title--virtual-events::before{content:url(public/build/img/common/menu/virtual-events-icon-f502cea1f7.svg)}.menu__title--business::before{content:url(public/build/img/common/menu/business-icon-a2b4535ae7.svg)}.menu__title--conferences::before{content:url(public/build/img/common/menu/conferences-icon-1b8c13d2ee.svg)}.menu__title--education::before{content:url(public/build/img/common/menu/education-icon-98a9c01530.svg)}.menu__title--customer-stories::before{content:url(public/build/img/common/menu/customer-stories-icon-115d645680.svg)}.menu__extra-desc{font-family:aktiv-grotesk,helvetica,arial,sans-serif}.menu__learn-more{margin-top:.5rem;margin-bottom:1.5rem}.menu__account{margin-top:1.5rem}@media (min-width:64rem){.menu__account{margin-top:0;margin-left:3rem}}@media (min-width:72rem){.menu__account{margin-left:0;flex:1;justify-content:flex-end}}.modal{display:none}.modal__overlay{position:fixed;top:0;left:0;right:0;bottom:0;z-index:92;background-color:rgba(0,0,0,.48);display:flex;justify-content:center;align-items:center}.modal__body{position:relative;max-width:calc(100vw - 2rem);max-height:calc(100vh - 2rem);background-color:#fff}.modal__close{display:none}@media (min-width:63rem){.modal__close{display:inline;position:absolute;top:0;right:-2rem}}.modal__video-container{position:relative;width:calc(100vw - 2rem);padding-bottom:56.25%}@media (min-width:63rem){.modal__video-container{width:59rem}}</style>
  <link rel="stylesheet" href="{{ asset('build/styles/style-427d15f952.css') }}" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="{{ asset('build/styles/style-427d15f952.css') }}"></noscript>
  <!-- Bootstrap CSS -->
  <!-- load AktivGrotesk font asynchronously -->
  <link rel="stylesheet" href="{{ asset('build/use.typekit.net/mlj8mmn.css') }}" media="print" onload="this.media='all'">
  <noscript><link rel="stylesheet" href="{{ asset('build/use.typekit.net/mlj8mmn.css') }}"></noscript>

  <script src="{{ asset('build/js/lazysizes-0812d0f17b.min.js') }}" defer></script>

  <title>{{ config('app.name') }}</title>

  <link rel="stylesheet" href="{{ mix('dist/css/app.css') }}">
  <link rel="stylesheet" href="{{ asset('build/styles/style-427d15f952.css') }}">
</head>
<body>
<div id="app"></div>

  {{-- Global configuration object --}}
  <script>
    window.config = @json($config);
  </script>

  {{-- Load the application scripts --}}
  <script src="{{ mix('dist/js/app.js') }}"></script>
</body>
</html>

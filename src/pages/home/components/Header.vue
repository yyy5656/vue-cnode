<template>
  <div class="header">
    <router-link to="" class="header-banner"><img :src="logo"></router-link>
    <div class="header-input"></div>
    <ul>
        <li><router-link to="/">首页</router-link></li>
        <li><router-link to="">新手入门</router-link></li>
        <li><router-link to="">API</router-link></li>
        <li><router-link to="">关于</router-link></li>
        <li><router-link to="">注册</router-link></li>
        <li><router-link to="">登录</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      logo: require('../../../assets/cnodejs_light.svg')
    }
  }
}
</script>

<style lang="stylus" scoped>
/* 1rem=50px  1px=0.02rem*/
    .header
        height: 3.12rem;
        background-color: #333333
        .header-banner
            display: block
            height: .8rem
            width: 2.4rem
            padding: .1rem 2.4rem
        .header-input
            height: .43rem
            width: 4.6rem
            background: #888888
            margin-left: 1.1rem
            padding: .06rem .1rem .06rem .44rem
            border-radius: .2rem
        ul
            margin-left: .4rem
        ul li
            float: left
            padding: .3rem .3rem .1rem .3rem
            font-size:.28rem
            a
                color: #ffffff
</style>

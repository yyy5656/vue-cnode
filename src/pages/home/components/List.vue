<template>
  <div>
    <div class="header-list">
      <ul>
          <li @click="toggleTab('home-content')"><router-link to="">全部</router-link></li>
          <li @click="toggleTab('value-content')"><router-link to="">精华</router-link></li>
          <li @click="toggleTab('share-content')"><router-link to="">分享</router-link></li>
          <li @click="toggleTab('ValueContent')"><router-link to="">问答</router-link></li>
          <li><router-link to="">招聘</router-link></li>
          <li><router-link to="">客户端测试</router-link></li>
      </ul>
    </div>
    <home-content :is="currentTab"></home-content>
  </div>
</template>

<script>
import HomeContent from './Content'
import ValueContent from './ValueContent'
import ShareContent from './ShareContent'
import AskContent from './AskContent'
export default {
  name: 'HomeList',
  components: {
    HomeContent,
    ValueContent,
    ShareContent,
    AskContent
  },
  data  () {
    return {
      isActivated: false,
      currentTab: 'home-content'
    }
  },
  methods: {
    toggleTab: function (tab) {
      this.currentTab = tab
    }
  }
}
</script>

<style lang="stylus" scoped>
// 1px=0.02rem
    .header-list
        height: 1.2rem
        margin-top: .4rem
        margin-bottom: .06rem
        padding: .2rem
        background: #f6f6f6
        ul
            margin-left: .12rem
        ul li
            float: left
            padding: .21rem
            font-size: .31rem
            a
                color: #80bd01
            .activated
                width: .72rem
                height: .44rem
                padding: .1rem
                border-radius: .1rem
                background: #80bd01
                color: #ffffff
</style>

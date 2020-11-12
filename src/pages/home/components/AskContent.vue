/* eslint-disable indent */
<template>
  <div>
      <div class="cell" v-for= "item of contentList" :key= "item.id">
          <router-link :to="'/user/'+ item.author.loginname"><img class="content-img" :src="item.author.avatar_url"></router-link>
          <span class="content-tab_green"  v-show = "item.top">置顶</span>
          <span class="content-tab"  v-show = "!item.top" v-text="changeTab(item.tab)"></span>
          <router-link :to="'/detail/' + item.id" class="content-title" tag="span"><span>{{item.title}}</span></router-link>
          <router-link :to="'/detail/' + item.id" class="content-date" tag="span"><time-date :contenttime="item.create_at"></time-date></router-link>
          <p class="content-reply"><span class="content-isreply">{{item.reply_count}}</span>/<span>{{item.visit_count}}</span></p>
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import TimeDate from '../../Time.vue'
export default {
  name: 'AskContent',
  components: {
    TimeDate
  },
  data () {
    return {
      contentList: [],
      contentTab: '',
      resList: [],
      contentDate: '',
      page: 1,
      tab: 'ask'
    }
  },
  methods: {
    getHomeInfo: function () {
      axios.get('https://cnodejs.org/api/v1/topics?tab=' + this.tab)
        .then(this.getHomeInfoSucc, this.getHomeInfoErr)
    //   this.page = this.page + 1
    //   console.log(this.page)
    },
    getHomeInfoSucc: function (res) {
      console.log(res)
      this.contentList = res.data.data
    },
    getHomeInfoErr: function (err) {
      console.log(err)
    },
    changeTab: function (tab) {
      let res
      if (tab === 'ask') {
        res = '问答'
      } else if (tab === 'share') {
        res = '分享'
      } else {
        res = '精华'
      }
      return res
    },
    handleScroll () {
      var respage = this.page
      // this.getHomeInfo()
      window.onscroll = function () {
        // 变量scrollTop是滚动条滚动时，距离顶部的距离
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        // 变量windowHeight是可视区的高度
        var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
        // 变量scrollHeight是滚动条的总高度
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
        // 滚动条到底部的条件
        if (scrollTop + windowHeight === scrollHeight) {
          // 写后台加载数据的函数
          var that = this
          console.log('到底了' + respage)
          axios.get('https://cnodejs.org/api/v1/topics?page=' + respage)
            .then(function (res) {
              console.log(res.data.data)
              that.resList = res.data.data
            })
        }
      }
    }
  },
  mounted () {
    this.getHomeInfo()
    window.addEventListener('scroll', this.handleScroll, true)
  }
}
</script>

<style lang="stylus" scoped>
  .cell
    height: .8rem
    padding: .14rem .2rem 0rem .2rem
    border-bottom: .02rem solid #f0f0f0
    .content-img
      width: .6rem
      height: .6rem
      border-radius: .1rem
    .content-tab_green
      margin-left: .15rem
      padding: .08rem
      color: #ffffff
      background-color: #80bd01
      font-size: .21rem
      border-radius: .1rem
    .content-tab
      margin-left: .15rem
      padding: .08rem
      color: #999999
      background-color: #e5e5e5
      font-size: .21rem
      border-radius: .1rem
    .content-title
      display: inline-block
      width: 4.3rem
      margin-left: .2rem
      margin-right: .1rem
      font-size: .28rem
      color: #888888
      white-space: nowrap; //文本强制不换行；
      text-overflow:ellipsis; //文本溢出显示省略号；
      overflow:hidden; //溢出的部分隐藏；
    .content-date
      padding-top: 2rem
      font-size: .224rem
      color: #778087
    .content-reply
      margin-left: 1.8rem
      margin-top: -.11rem
      font-size: .2rem
      color: #333333
      .content-isreply
        color: #9e78c0
</style>

<template>
    <div class="detail">
        <home-header></home-header>
        <div class="detail-content">
            <div class="detail-contenttop">
                <span class="detail-tab" v-show="detailContent.top == true">置顶</span>
                <span class="detail-title">{{detailContent.title}}</span>
                <div class="detail-bto">
                    <time-date :contenttime="detailContent.create_at"></time-date>
                    <router-link :to="'/user/'+ detailContent.author.loginname" tag="span">作者：{{detailContent.author.loginname}}</router-link>
                    <span>{{detailContent.visit_count}}次浏览</span>
                    <span v-text="changeTab(detailContent.tab)"></span>
                    <button class="no-collect" v-show= "isCollect===false" @click="changeCollect()">收藏</button>
                    <button class="collect" v-show= "isCollect===true" @click="changeNocollect()">取消收藏</button>
                </div>
            </div>
            <div class="detail-contentbto" v-html= "detailContent.content"></div>
        </div>
        <to-top>dasd</to-top>
    </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from '../home/components/Header'
import TimeDate from '../Time.vue'
import ToTop from '../Totop'
export default {
  name: 'Detail',
  components: {
    HomeHeader,
    TimeDate,
    ToTop
  },
  data () {
    return {
      detailContent: [],
      accesstoken: '8b587e7f-cee2-4fe3-a534-25d660d6a31b',
      isCollect: ''
    }
  },
  methods: {
    getHomeInfo: function () {
      axios.get('https://cnodejs.org/api/v1/topic/' + this.$route.params.id, {
        params: {
          accesstoken: this.accesstoken
        }
      }
      )
        .then(this.getHomeInfoSucc, this.getHomeInfoErr)
    },
    getHomeInfoSucc: function (res) {
      console.log(res)
      this.detailContent = res.data.data
      this.isCollect = res.data.data.is_collect
    },
    getHomeInfoErr: function (err) {
      console.log(err)
    },
    changeTab: function (tab) {
      let res
      if (tab === 'ask') {
        res = '来自问答'
      } else if (tab === 'share') {
        res = '来自分享'
      } else {
        res = '来自精华'
      }
      return res
    },
    changeCollect: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      let data = { 'topic_id': this.detailContent.id, 'accesstoken': '8b587e7f-cee2-4fe3-a534-25d660d6a31b'}
      axios.post('https://cnodejs.org/api/v1/topic_collect/collect', data)
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            this.isCollect = !this.isCollect
          }
        }, (err) => {
          console.log(err)
        })
    },
    changeNocollect: function () {
      // eslint-disable-next-line standard/object-curly-even-spacing
      let data = { 'topic_id': this.detailContent.id, 'accesstoken': '8b587e7f-cee2-4fe3-a534-25d660d6a31b'}
      axios.post('https://cnodejs.org/api/v1/topic_collect/de_collect', data)
        .then((res) => {
          console.log(res)
          if (res.data.success) {
            this.isCollect = !this.isCollect
          }
        }, (err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
.detail
    background-color: #e5e5e5
    .detail-content
        background-color: #ffffff
        margin-top: .5rem
        .detail-contenttop
            border-bottom: .03rem solid #e5e5e5
            .detail-tab
                margin-left: .5rem
                padding: .08rem
                color: #ffffff
                background-color: #80bd01
                font-size: .23rem
                border-radius: .1rem
            .detail-title
                margin-left:.5rem
                line-height: .7rem
                font-size: 0.45rem
                font-weight: bold
            .detail-bto
                margin-top: .2rem
                padding-bottom: .2rem
                .collect
                  padding .06rem .2rem
                  margin .1rem 0 0 5.8rem
                  // background-color #80Bd01
                  color #fff
                  border-radius .1rem
                .no-collect
                  padding .06rem .2rem
                  margin .1rem 0 0 6rem
                  background-color #80Bd01
                  color #fff
                  border-radius .1rem
            .detail-bto span
                padding-left .25rem
                line-height: .4rem
            .detail-bto span:before
                    content: "•"
                    padding-right: .1rem
        .detail-contentbto
            margin-top: .3rem
            //给v-html渲染出来的页面添加样式
            >>> .markdown-text img
                max-width:  100%
            >>> .markdown-text a
                color: #0088cc
            >>> .markdown-text div
                padding: .3rem
                font-size: .33rem
                line-height: .4rem
            >>> .markdown-text p
                padding: .3rem
                font-size: .33rem
                line-height: .4rem
                strong
                    font-weight: bold
            >>> .markdown-text h2
                margin-top: .64rem
                margin-left: .3rem
                padding-bottom: .18rem
                font-size: .55rem
                font-weight: bold
                border-bottom: .03rem solid #e5e5e5
             >>> .markdown-text h1
                margin-top: .64rem
                margin-left: .3rem
                padding-bottom: .18rem
                font-size: .6rem
                font-weight: bold
            >>> .markdown-text ul
                font-size: .3rem
                padding: .3rem
                line-height: .8rem
                li
                    padding: .3rem
                    font-size: .33rem
                    :before
                        content: "•"
                        margin-right: .15rem
                    a
                        color: #0088cc
</style>

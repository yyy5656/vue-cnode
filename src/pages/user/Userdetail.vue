<template>
    <div class="userdetail">
      <home-header></home-header>
        <div class="userdetail-top">
          <div class="userdetail-return"><router-link to="/">主页</router-link> /</div>
          <span class="userdetail-img"><img :src="userDetail.avatar_url">{{userDetail.loginname}}</span>
          <p>{{userDetail.score}} 积分</p>
          <p>{{userCollect.length}}个话题收藏</p>
          <p>@{{userDetail.githubUsername}}</p>
          <p>注册时间<time-date :contenttime="userDetail.create_at"></time-date></p>
        </div>
        <div class="userdetail-topic">
          <div class="userdetail-topictitle">最近创建的话题</div>
          <div class="cell" v-for= "item of userTopic.slice(0 , 5)" :key= "item.id">
            <router-link :to="'/user/'+ item.author.loginname"><img class="content-img" :src="item.author.avatar_url"></router-link>
            <router-link :to="'/detail/' + item.id" class="content-title" tag="span"><span>{{item.title}}</span></router-link>
            <router-link :to="'/detail/' + item.id" class="content-date" tag="span"><time-date :contenttime="item.last_reply_at"></time-date></router-link>
          </div>
          <div class="cell-more">查看更多>></div>
        </div>
        <div class="userdetail-topic">
          <div class="userdetail-topictitle">最近参与的话题</div>
          <div class="cell" v-for= "item of userCollect.slice(0 , 5)" :key= "item.id">
            <router-link :to="'/user/'+ item.author.loginname"><img class="content-img" :src="item.author.avatar_url"></router-link>
            <router-link :to="'/detail/' + item.id" class="content-title" tag="span"><span>{{item.title}}</span></router-link>
            <router-link :to="'/detail/' + item.id" class="content-date" tag="span"><time-date :contenttime="item.last_reply_at"></time-date></router-link>
          </div>
          <div class="cell-more">查看更多>></div>
        </div>
        <to-top></to-top>
    </div>
</template>

<script>
import axios from 'axios'
import HomeHeader from '../home/components/Header'
import TimeDate from '../Time.vue'
import ToTop from '../Totop'
export default {
  name: 'Userdetail',
  components: {
    HomeHeader,
    TimeDate,
    ToTop
  },
  data () {
    return {
      userDetail: [],
      userCollect: [],
      userTopic: []
    }
  },
  methods: {
    getHomeInfo: function () {
      axios.get('https://cnodejs.org/api/v1/user/' + this.$route.params.loginname)
        .then(this.getHomeInfoSucc, this.getHomeInfoErr)
      axios.get('https://cnodejs.org/api/v1/topic_collect/' + this.$route.params.loginname)
        .then(this.getCollectInfoSucc, this.getHomeInfoErr)
    },
    getHomeInfoSucc: function (res) {
      console.log(res)
      this.userDetail = res.data.data
      this.userTopic = res.data.data.recent_topics
    },
    getCollectInfoSucc: function (res) {
      console.log(res)
      this.userCollect = res.data.data
    },
    getHomeInfoErr: function (err) {
      console.log(err)
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang="stylus" scoped>
  .userdetail
    background-color: #e5e5e5
    .userdetail-top
      background: #ffffff
      margin-top: .5rem
      .userdetail-return
        padding: .3rem
        font-size: .3rem
        border-bottom: .03rem solid #e5e5e5
        border-radius: .1rem
        background: #f6f6f6
        a
          color: #80bd01
      .userdetail-img
        color: #778087
        font-size: .28rem
        img
          margin: .2rem .3rem 0 .3rem
          width: .8rem
      p
        margin-top: .3rem
        margin-left: .3rem
        font-size: .28rem
      p:last-child
          padding-bottom: .5rem
          color: #ababab
    .userdetail-topic
      .userdetail-topictitle
        background: #f6f6f6
        padding .25rem 0 .25rem .3rem
      .cell-more
        height: .8rem
        padding: .35rem .2rem 0rem .4rem
        border-bottom: .02rem solid #f0f0f0
        background: #ffffff
      .cell
        height: .8rem
        padding: .14rem .2rem 0rem .2rem
        border-bottom: .02rem solid #f0f0f0
        background: #ffffff
        .content-img
          width: .6rem
          height: .6rem
          border-radius: .1rem
        .content-title
          display: inline-block
          width: 4.3rem
          margin-left: .2rem
          margin-right: .3rem
          font-size: .28rem
          color: #0088cc
          white-space: nowrap; //文本强制不换行；
          text-overflow:ellipsis; //文本溢出显示省略号；
          overflow:hidden; //溢出的部分隐藏；
        .content-date
          padding-top: 2rem
          font-size: .224rem
          color: #778087
</style>

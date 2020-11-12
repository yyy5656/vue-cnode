<template>
    <span>{{res}}</span>
</template>

<script>
export default {
  name: 'TimeDate',
  props: ['contenttime'],
  data () {
    return {
      res: '',
      contentdate: this.contenttime
    }
  },
  methods: {
    dateFormat: function (time) {
      let date = new Date(time)
      let year = date.getFullYear()
      /* 在日期格式中，月份是从0开始的，因此要加0
     * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
     * */
      let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
      let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      //   let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      // 拼接
      let nowdate = new Date()
      let nowyear = nowdate.getFullYear()
      let nowmonth = nowdate.getMonth() + 1 < 10 ? '0' + (nowdate.getMonth() + 1) : nowdate.getMonth() + 1
      let nowday = nowdate.getDate() < 10 ? '0' + nowdate.getDate() : nowdate.getDate()
      let nowhours = nowdate.getHours() < 10 ? '0' + nowdate.getHours() : nowdate.getHours()
      let nowminutes = nowdate.getMinutes() < 10 ? '0' + nowdate.getMinutes() : nowdate.getMinutes()
      let yearDiff = Math.abs(nowyear - year)
      let monthDiff = Math.abs(month - nowmonth)
      let dayDiff = Math.abs(day - nowday)
      let hoursDiff = Math.abs(hours - nowhours)
      let minutesDiff = Math.abs(minutes - nowminutes)
      if (yearDiff > 0) {
        this.res = ' ' + parseInt(yearDiff) + '年前'
      } else if (monthDiff > 0) {
        this.res = ' ' + parseInt(monthDiff) + '个月前'
      } else if (dayDiff > 0) {
        this.res = ' ' + parseInt(dayDiff) + '天前'
      } else if (hoursDiff > 0) {
        this.res = ' ' + parseInt(hoursDiff) + '小时前'
      } else if (minutesDiff > 0) {
        this.res = ' ' + parseInt(minutesDiff) + '分钟前'
      } else {
        this.res = '刚刚'
      }
    }
  },
  mounted () {
    this.dateFormat(this.contentdate)
  }
}
</script>

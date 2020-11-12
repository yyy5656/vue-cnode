<template>
  <div>
      <home-header></home-header>
      <home-list></home-list>
      <to-top></to-top>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeContent from './components/Content'
import HomeList from './components/List'
import ToTop from '../Totop'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeContent,
    HomeList,
    ToTop
  }
}
</script>

<style></style>

<template>
  <div id="app">
    <div id="nav">
      <Header></Header>
<!--      <PostList></PostList>-->
<!--      <Article></Article>-->
      <div class="main">
        <router-view name="slideBar"></router-view>
        <router-view name="main"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  // import Article from "./components/Article";
  // import PostList from "./components/PostList";
  import Header from "./components/Header";
  export default {
    name: 'App',
    components: {
      Header,
      // PostList,
      // Article
    }
  }
</script>

<style>

</style>

<template>
  <div id="app">
      <Header></Header>
      <div class="main">
        <router-view name="slideBar"></router-view>
        <router-view name="main"></router-view>

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
  .main{
    width: 90%;
    margin: 10px auto;
  }
  .postContent img {
      width: 100%;
  }

</style>

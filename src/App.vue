<template>
  <nav>
    <router-link to="/">
      <img className="app_logo" src="@/img/zenyth_logo.png" alt="" @click="openAbout">
    </router-link>
  </nav>
  <router-view/>
</template>

<script>


export default {
  mounted() {

  },
  methods: {
    openAbout() {
      // window.open("http://localhost:8080/about") todo: about page routing working only on localhost
    }
  }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100vh;
  margin: auto;
}

.app_logo {
  width: 10vw;
  margin-bottom: 1vw;
  object-fit: scale-down;
}

nav {
  width: 100%;
  aspect-ratio: 24/1;
  font-size: 2vw;
  padding-top: 1vw;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

div {
  user-select: none;
}
</style>

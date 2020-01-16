<template>
  <div id="app">
    <div id="nav">
      <ti></ti>
      <router-link to='/'></router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import ti from "@/components/title.vue";
export default {
  components: {
    ti,
  }
  
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(238, 238, 238)
}

#nav {
  padding-top: 22px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body{
  margin: 0;
}
</style>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{counter}}</h1>
  </div>
</template>

<style scoped>
  h1  {
    color: red;
    font-size: 45px;
  }
</style>

<script>
export default {
  name: 'hello',
  created() {
    this.tick();
  },
  methods: {
    tick() {
      setInterval(() => {
        this.counter++;
      }, 500);
    }
  },
  data () {
    return {
      msg: 'welcome to Your Vue.js App',
      counter: 0,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 12px;
}

a {
  color: #42b983;
}
</style>

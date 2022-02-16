<template>
  <div id="app">
    <div class="inputValue">
      <label for="inputValue">Введите значение </label>
      <input v-model.number="value" type="number" name="inputValue">
    </div>
   <v-input-range v-model="value" />
  </div>
</template>

<script>
import VInputRange from './components/v-input-range.vue'

export default {
  name: 'App',
  components: {
    VInputRange
  },
  data () {
    return {
      value: 35.4
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
.inputValue {
  margin: 0 auto;
  padding: 30px;
  display: grid;
  max-width: 300px;
  justify-items: center;
}
.inputValue > input {
  margin-top: 10px;
  max-width: 200px;
}
</style>

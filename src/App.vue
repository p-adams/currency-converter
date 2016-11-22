<template>
  <div id="app">

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  created(){
    axios.get('http://api.fixer.io/latest')
    .then(function (response) {
      console.log(response.data.rates);
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>

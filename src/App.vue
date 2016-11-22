<template>
  <div id="app">
    <ul>
      <li v-for="currency in currencies">
          {{currency.id}} - {{currency.curr}}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import forIn from 'lodash'
export default {
  name: 'app',
  created(){
    var self = this
    axios.get('http://api.fixer.io/latest')
    .then(function (response) {
     _.forIn(response.data.rates, function(value, key) {
        console.log(key, value);
        self.currencies.push({id: key, curr: value})
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  data () {
    return {
      currencies: []
    }
  }
}
</script>

<style>

</style>

<template>
  <div id="app">
    <!--<ul>
      <li v-for="currency in currencies">
          {{currency.id}} - {{currency.curr}}
      </li>
    </ul>-->
    <h1>Currency Coverter</h1>
    
      <table>
        <tr>
          <td>
            <input type="text">
          </td>
          <td>
            <select>
                <option v-for="currency in currencies">{{currency.id}}</option>
            </select>
          </td>
          <td>
             <select>
                <option v-for="currency in currencies">{{currency.id}}</option>
            </select>
          </td>
        </tr>
      </table>
    
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
  table, tr, td{
    width: 50%;
    height: 50%;
    border: 1px solid black;
  }
  #table{
    border: 1px solid blue;
  }
</style>

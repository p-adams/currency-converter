<template>
  <div id="app">
    <!--<ul>
      <li v-for="currency in currencies">
          {{currency.id}} - {{currency.curr}}
      </li>
    </ul>-->
    <h1>Currency Coverter</h1>
    
      <!--<table>
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
      </table>-->

      <el-table
        :data="currencyData"
        border
        style="width: 100%">

  <!-- curr input 
    <el-table-column
      inline-template
      label="Date"
      width="180">
      <div>
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ row.date }}</span>
      </div>
    </el-table-column>
  --> 


  <!-- curr A
     <el-table-column
      :context="_self"
      inline-template
      label="Operations">
      <div>
        <el-select v-model="value" placeholder="Select">
          <el-option
          v-for="currency in currencies"
          :label="currency.id"
          :value="currency.curr">
          </el-option>
        </el-select>
      </div>
    </el-table-column>
-->

<!-- curr B 
    <el-table-column
      inline-template
      label="Name"
      width="180">
      <el-popover trigger="hover" placement="top">
        <p>Name: {{ row.name }}</p>
        <p>Addr: {{ row.address }}</p>
        <div slot="reference">
          <el-tag>{{ row.name }}</el-tag>
        </div>
      </el-popover>
    </el-table-column>

-->

<!-- convert 

    <el-table-column
      :context="_self"
      inline-template
      label="Operations">
      <div>
        <el-button
          size="small"
          @click="handleEdit($index, row)">
          Edit
        </el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete($index, row)">
          Delete
        </el-button>
      </div>
    </el-table-column>

-->

  </el-table>

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
        //console.log(key, value);
        self.currencyData.push({id: key, curr: value})
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  },
  data () {
    return {
      currencyData: [{id: '', curr: ''}],
        value: '',
    }
  },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
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

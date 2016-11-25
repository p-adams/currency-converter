<template>
  <div id="app">
    <!--<ul>
      <li v-for="currency in currencies">
          {{currency.id}} - {{currency.curr}}
      </li>
    </ul>-->

      <el-menu title="Currency Converter">
        <h1>Currency Coverter</h1>
      </el-menu>
    
  
      <el-row :gutter="20">
      <el-col :span="16">
        
        <div class="grid-content bg-purple">
                    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="curr"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="curra" placeholder="choose currency">
            <el-option v-for="currency in currencyData"
                       :label="currency.id" 
                       :value="currency.curr">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="currb" placeholder="choose currency">
            <el-option v-for="currency in currencyData"
                       :label="currency.id" 
                       :value="currency.curr">
            </el-option>
          </el-select>
        </el-form-item>
        
        
        
        <el-form-item>
          <el-button type="primary"><i class="el-icon-arrow-right"></i></el-button>
        </el-form-item>
      </el-form>
        
        
        
        </div>
      </el-col>

      <el-col :span="8">
        <div class="grid-content bg-purple">
          <h3>Popular currencies</h3>
          </div>
          </el-col>
      </el-row>







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
        curr: '',
        curra: '',
        currb: ''
    }
  },
    methods: {
    
  }
}
</script>
<style>
  .el-menu{
    background-color: #20A0FF;
    margin-bottom: 25px;
  }

  h1{
      margin-left: 10px;
      font-family: 'helvetica';
      color: ghostwhite;
      font-size: 20px large;
  }
</style>

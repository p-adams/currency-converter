<template>
  <div id="app">
      <el-menu title="Currency Converter">
        <h1>Currency Coverter</h1>
      </el-menu>
      <el-row :gutter="20">
      <el-col :span="16">
        <div class="grid-content bg-purple">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          {{curr}}
          <el-input v-model="curr"></el-input>
        </el-form-item>
        <el-form-item>
          <h3>Base currency: {{a}} </h3>
          {{curra}}
          <el-select v-model="curra" @change="loadConversions" placeholder="choose currency">
            <el-option v-for="currency in currencyData"
                       :label="currency.id" 
                       :value="currency.id">{{currency.id}} - {{currency.curr}}
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <h3>Quote currency: {{b}}</h3>
          {{currb}}
          <el-select v-model="currb" placeholder="choose currency">
            <el-option v-for="currency in currencyData"
                       :label="currency.id" 
                       :value="currency.id">{{currency.id}} - {{currency.curr}}
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
      {{convert}}
  </div>
</template>

<script>
import axios from 'axios'
import forIn from 'lodash'
import codes from './currency.js'

export default {
  name: 'app',
  created(){
    var self = this
    codes.map(code => {
      self.currencyData.push(
        {id: code.code, curr: code.name}
        )
    }) 
    
  },
  data () {
    return {
      currencyData: [],
        curr: '',
        curra: '',
        currb: ''
    }
  },
    methods: {
      loadConversions(){
        axios.get('http://api.fixer.io/latest?base=' + this.curra)
        .then(function (response) {
        _.forIn(response.data.rates, function(value, key) {
          console.log(value, key)
          })
        })
        .catch(function (error) {
          console.log(error);
        });
      }     
  },
  computed: {
   convert(){
      return this.curr * this.currb
    },
    a(){
      var self = this
      var sel = ""
      this.currencyData.map(c=>{
        if(c.curr === self.curra){
           sel = c.id
        } 
      })
      return sel
    },
    b(){
      var self = this
      var sel = ""
      this.currencyData.map(c=>{
        if(c.curr === self.currb){
           sel = c.id
        } 
      })
      return sel
    }
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

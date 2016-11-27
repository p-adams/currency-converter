<template>
  <div id="app">
      <el-menu title="Currency Converter">
        <h1>Currency Coverter</h1>
      </el-menu>
      <el-row :gutter="18">
      <el-col :span="13">
        <div class="grid-content bg-purple">
          <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input v-model.number="curr"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="currA" @change="loadConversions" placeholder="choose currency">
            <el-option v-for="currency in currencyData"
                       :value="currency.id">{{currency.id}} - {{currency.curr}}
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-select v-model="currB" placeholder="choose currency">
            <el-option v-for="currency in conv"
                      :label="currency.id"
                      :value="currency.curr"                   
                      >
            </el-option>
          </el-select>
        </el-form-item>    
        <el-form-item>
          <el-button type="primary" @click="convert"><i class="el-icon-arrow-right"></i></el-button>
        </el-form-item>
      </el-form>
      <transition name="fade">
      <el-table v-if="clicked"
          :data="cc"
          style="width: 100%">
          <el-table-column
            prop="amount"
            label="Amount"
            width="180">
          </el-table-column>
          <el-table-column
            prop="base"
            label="Base currency"
            width="180">
          </el-table-column>
          <el-table-column
            prop="quote"
            label="Quote currency">
          </el-table-column>
          <el-table-column
            prop="total"
            label="Total">
          </el-table-column>
    </el-table>
    <transition>
        </div>
      </el-col>
      <el-col :span="11">
        <div class="grid-content bg-purple">
          <h3>Popular currencies</h3>
            <el-table
              :data="popularCurrencies"
              border
              style="width: 100%">
              <el-table-column       
                label="Symbol"
                prop="symbol"
                width="150">
              </el-table-column>
              <el-table-column   
                label="Code"
                prop="code"
                width="150">
            </el-table-column>
          <el-table-column
              prop="name"
              label="Name"     
              >
              </div>
            </el-table-column>
          </el-table>
        </div>
        </el-col>
      </el-row>
  </div>
</template>

<script>
import axios from 'axios'
import forIn from 'lodash'
import codes from './currency.js'
import pop from './pop.js'

export default {
  name: 'app',
  created(){
    var self = this
    codes.map(code => {
      self.currencyData.push({
        id: code.code,
        curr: code.name
      })
    }) 
    this.loadPop() 
  },
  data () {
    return {
      currencyData: [],
      conv: [],
      popularCurrencies: [],
        curr: 1,
        currA: '',
        currB: '',
        currId: '',
        cc:[],
        clicked: false
    }
  },
    methods: {
      convert(){
        this.clicked = true
        var self = this
        var opt = ''
        this.conv.map(c => {
          c.curr===self.currB ? opt = c.id : null
        })
        this.cc = [{
          amount :this.curr,
          base : this.currA,
          quote : opt,
          total : (this.curr * this.currB).toFixed(2)
        }]

      },
      loadConversions(){
        var self = this
        axios.get('http://api.fixer.io/latest?base=' + this.currA)
        .then(function (response) {
        _.forIn(response.data.rates, function(value, key) {
            self.conv.push({id: key, curr: value})
          })
        })
        .catch(function (error) {
          console.log(error);
        });
        this.conv = []
      },
      loadPop(){
        var self = this
        pop.map(currency => {
          self.popularCurrencies.push({
            name: currency.name,
            code: currency.code,
            symbol: currency.symbol
          })
        })
      }
  }
}
</script>
<style>
  .el-menu{
    background-color: #20A0FF;
    margin-bottom: 25px;
  }
  h3{
    font-family: 'helvetica';
    color: gray;
    text-align: center;
  }
  h1{
      margin-left: 10px;
      font-family: 'helvetica';
      color: ghostwhite;
      font-size: 20px large;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .11s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>

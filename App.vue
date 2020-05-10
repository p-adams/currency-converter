<template>
  <div></div>
</template>

<script>
//import axios from "axios";
//import forIn from "lodash";
import codes from "./currency.js";
import pop from "./popularCurrencies";

export default {
  name: "app",
  created() {
    codes.map((code) => {
      this.currencyData.push({
        id: code.code,
        curr: code.name,
      });
    });
    this.loadPop();
  },
  data() {
    return {
      currencyData: [],
      conv: [],
      popularCurrencies: [],
      curr: 1,
      currA: "",
      currB: "",
      currId: "",
      cc: [],
      clicked: false,
    };
  },
  methods: {
    convert() {
      this.clicked = true;

      var opt = "";
      this.conv.map((c) => {
        c.curr === this.currB ? (opt = c.id) : null;
      });
      this.cc = [
        {
          amount: this.curr,
          base: this.currA,
          quote: opt,
          total: (this.curr * this.currB).toFixed(2),
        },
      ];
    },
    loadConversions() {
      axios
        .get(`http://api.fixer.io/latest?base=${this.currA}`)
        .then((response) => {
          _.forIn(response.data.rates, function (value, key) {
            this.conv.push({ id: key, curr: value });
          });
        })
        .catch((error) => {
          throw new error();
        });
      this.conv = [];
    },
    loadPop() {
      pop.map((currency) => {
        this.popularCurrencies.push({
          name: currency.name,
          code: currency.code,
          symbol: currency.symbol,
        });
      });
    },
  },
};
</script>
<style>
.el-menu {
  background-color: #20a0ff;
  margin-bottom: 25px;
}
h3 {
  font-family: "helvetica";
  color: gray;
  text-align: center;
}
h1 {
  margin-left: 10px;
  font-family: "helvetica";
  color: ghostwhite;
  font-size: 20px large;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.11s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>

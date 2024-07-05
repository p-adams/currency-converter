<template>
  <div>
    <h1>Currency Converter</h1>
    <div class="converter">
      <input v-model.number="amount" type="number" placeholder="Amount" />
      <select v-model="fromCurrency">
        <option
          v-for="currency in currencyData"
          :key="currency.code"
          :value="currency.code"
        >
          {{ currency.name }}
        </option>
      </select>
      <select v-model="toCurrency">
        <option
          v-for="currency in currencyData"
          :key="currency.code"
          :value="currency.code"
        >
          {{ currency.name }}
        </option>
      </select>
      <button @click="convert">Convert</button>
    </div>
    <div v-if="result" class="result">
      <h3>Result</h3>
      <p>
        {{ formatCurrency(amount, fromCurrency) }} =
        {{ formatCurrency(result, toCurrency) }}
      </p>
    </div>
    <div class="popular-currencies">
      <h3>Popular Currencies</h3>
      <ul>
        <li v-for="currency in popularCurrencies" :key="currency.code">
          {{ currency.name }} ({{ currency.code }}) - {{ currency.symbol }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import codes from "./currency";
import pop from "./popularCurrencies";

interface Currency {
  code: string;
  name: string;
}

interface PopularCurrency {
  name: string;
  code: string;
  symbol: string;
}

export default defineComponent({
  name: "CurrencyConverter",
  setup() {
    const currencyData = ref<Currency[]>([]);
    const popularCurrencies = ref<PopularCurrency[]>([]);
    const amount = ref<number>(1);
    const fromCurrency = ref<string>("");
    const toCurrency = ref<string>("");
    const result = ref<number | null>(null);

    const loadCurrencies = (): void => {
      currencyData.value = codes.map((code) => ({
        code: code.code,
        name: code.name,
      }));
    };

    const loadPopularCurrencies = (): void => {
      popularCurrencies.value = pop.map((currency) => ({
        name: currency.name,
        code: currency.code,
        symbol: currency.symbol,
      }));
    };

    const convert = async (): Promise<void> => {
      try {
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency.value}`
        );
        const data = await response.json();
        const rate = data.rates[toCurrency.value];
        result.value = amount.value * rate;
      } catch (error) {
        console.error("Error fetching exchange rates:", error);
      }
    };

    const formatCurrency = (amount: number, currency: string): string => {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(amount);
    };

    onMounted(() => {
      loadCurrencies();
      loadPopularCurrencies();
    });

    return {
      currencyData,
      popularCurrencies,
      amount,
      fromCurrency,
      toCurrency,
      result,
      convert,
      formatCurrency,
    };
  },
});
</script>

<style scoped>
.converter {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.result {
  text-align: center;
  margin-bottom: 20px;
}

.popular-currencies {
  max-width: 600px;
  margin: 0 auto;
}

h1,
h3 {
  text-align: center;
  font-family: Helvetica, Arial, sans-serif;
}

h1 {
  color: #20a0ff;
}

h3 {
  color: #666;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}
</style>

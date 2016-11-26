const curr_codes = [
    {
        "symbol": "$",
        "name": "US Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "USD",
        "name_plural": "US dollars"
    },
    {
        "symbol": "CA$",
        "name": "Canadian Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CAD",
        "name_plural": "Canadian dollars"
    },
    {
        "symbol": "€",
        "name": "Euro",
        "symbol_native": "€",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "EUR",
        "name_plural": "euros"
    },
    {
        "symbol": "AU$",
        "name": "Australian Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "AUD",
        "name_plural": "Australian dollars"
    },
    {
        "symbol": "BGN",
        "name": "Bulgarian Lev",
        "symbol_native": "лв.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BGN",
        "name_plural": "Bulgarian leva"
    },
    {
        "symbol": "R$",
        "name": "Brazilian Real",
        "symbol_native": "R$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "BRL",
        "name_plural": "Brazilian reals"
    },
    {
        "symbol": "CHF",
        "name": "Swiss Franc",
        "symbol_native": "CHF",
        "decimal_digits": 2,
        "rounding": 0.05,
        "code": "CHF",
        "name_plural": "Swiss francs"
    },
    {
        "symbol": "CN¥",
        "name": "Chinese Yuan",
        "symbol_native": "CN¥",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CNY",
        "name_plural": "Chinese yuan"
    },
    {
        "symbol": "Kč",
        "name": "Czech Republic Koruna",
        "symbol_native": "Kč",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "CZK",
        "name_plural": "Czech Republic korunas"
    },
    {
        "symbol": "Dkr",
        "name": "Danish Krone",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "DKK",
        "name_plural": "Danish kroner"
    },
    {
        "symbol": "£",
        "name": "British Pound Sterling",
        "symbol_native": "£",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "GBP",
        "name_plural": "British pounds sterling"
    },
    {
        "symbol": "HK$",
        "name": "Hong Kong Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HKD",
        "name_plural": "Hong Kong dollars"
    },
    {
        "symbol": "kn",
        "name": "Croatian Kuna",
        "symbol_native": "kn",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "HRK",
        "name_plural": "Croatian kunas"
    },
    {
        "symbol": "Ft",
        "name": "Hungarian Forint",
        "symbol_native": "Ft",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "HUF",
        "name_plural": "Hungarian forints"
    },
    {
        "symbol": "Rp",
        "name": "Indonesian Rupiah",
        "symbol_native": "Rp",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "IDR",
        "name_plural": "Indonesian rupiahs"
    },
    {
        "symbol": "₪",
        "name": "Israeli New Sheqel",
        "symbol_native": "₪",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ILS",
        "name_plural": "Israeli new sheqels"
    },
    {
        "symbol": "Rs",
        "name": "Indian Rupee",
        "symbol_native": "টকা",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "INR",
        "name_plural": "Indian rupees"
    },
    {
        "symbol": "¥",
        "name": "Japanese Yen",
        "symbol_native": "￥",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "JPY",
        "name_plural": "Japanese yen"
    },
    
    {
        "symbol": "₩",
        "name": "South Korean Won",
        "symbol_native": "₩",
        "decimal_digits": 0,
        "rounding": 0,
        "code": "KRW",
        "name_plural": "South Korean won"
    },
   
    {
        "symbol": "MX$",
        "name": "Mexican Peso",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MXN",
        "name_plural": "Mexican pesos"
    },
    {
        "symbol": "RM",
        "name": "Malaysian Ringgit",
        "symbol_native": "RM",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "MYR",
        "name_plural": "Malaysian ringgits"
    },
   
    {
        "symbol": "Nkr",
        "name": "Norwegian Krone",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NOK",
        "name_plural": "Norwegian kroner"
    },
   
    {
        "symbol": "NZ$",
        "name": "New Zealand Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "NZD",
        "name_plural": "New Zealand dollars"
    },
    
    {
        "symbol": "₱",
        "name": "Philippine Peso",
        "symbol_native": "₱",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PHP",
        "name_plural": "Philippine pesos"
    },
    {
        "symbol": "zł",
        "name": "Polish Zloty",
        "symbol_native": "zł",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "PLN",
        "name_plural": "Polish zlotys"
    },
    
    {
        "symbol": "RON",
        "name": "Romanian Leu",
        "symbol_native": "RON",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "RON",
        "name_plural": "Romanian lei"
    },
 
    {
        "symbol": "RUB",
        "name": "Russian Ruble",
        "symbol_native": "руб.",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "RUB",
        "name_plural": "Russian rubles"
    },
    {
        "symbol": "Skr",
        "name": "Swedish Krona",
        "symbol_native": "kr",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SEK",
        "name_plural": "Swedish kronor"
    },
    {
        "symbol": "S$",
        "name": "Singapore Dollar",
        "symbol_native": "$",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "SGD",
        "name_plural": "Singapore dollars"
    },
    {
        "symbol": "฿",
        "name": "Thai Baht",
        "symbol_native": "฿",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "THB",
        "name_plural": "Thai baht"
    },
    {
        "symbol": "TL",
        "name": "Turkish Lira",
        "symbol_native": "TL",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "TRY",
        "name_plural": "Turkish Lira"
    },
    
    {
        "symbol": "R",
        "name": "South African Rand",
        "symbol_native": "R",
        "decimal_digits": 2,
        "rounding": 0,
        "code": "ZAR",
        "name_plural": "South African rand"
    }
]

export default curr_codes
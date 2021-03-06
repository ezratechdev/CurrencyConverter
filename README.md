# Currency Converter

Currency converter is a free and light weight way to convert one currency to another and avoid third parties.

### Installation

This package can be installed using `npm`

```bash
npm i currency-converter-swp
```

Or using `yarn`

```bash
yarn add currency-converter-swp
```

## Usage
Import `currency-converter-swp`.

```javascript
const CurrencyConverter = require('currency-converter-swp')
```
Then instantiate with an empty constructor

```javascript
const convert = new CurrencyConverter()
```
Convert method will return a value based on the current exchange rates

```javascript
convert.from("usd").to("kes").amount(10).convert()
.then(convertedValue => console.log(convertedValue))
.catch(error => console.log(error))
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
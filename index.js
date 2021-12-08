const {currencyCode} = require("./data")
const cheerio = require("cheerio")
const request = require("request")

class CurrencyConverter {
    constructor(params){
        this.fromData = ''
        this.toData = ''
        this.amountData = 1
        this.swappedValue = 0
    }
    currencyVerify = currencyData =>{
        if(!currencyCode.includes(currencyData.toUpperCase())) 
            throw new Error(`Currency code ${currencyData} passed is invalid! \n`)
        if(currencyData.length <= 0) 
            throw new Error(`Currency code ${currencyCode} has an invalid length`)
    }
    from = fromInput =>{
        this.currencyVerify(fromInput)
        this.fromData = fromInput
        return this
    }
    to = toInput =>{
        this.currencyVerify(toInput)
        this.toData = toInput
        return this
    }
    amount = amountInput =>{
        if(!(amountInput >= 0))
            throw new Error(`Amount should be greater than zero passed : ${amountInput} \n`)
        if(typeof amountInput !== "number")
            throw new Error(`Amount should be a number \n`)
            this.amountData = amountInput
        return this
    }
    convert = () =>{
        if(this.fromData == this.toData)
            throw new Error(`Cannot convert same currency ${this.fromData} , ${this.toData}`)
        else
        return new Promise((resolve , reject) =>{
            if(this.fromData && this.toData && this.amountData){
                request(`https://www.google.com/search?q=${this.fromData}+to+${this.toData}` , (error , response , html) =>{
                    if(!error && response.statusCode ==200){
                        const $ = cheerio.load(html)
                        const rate = parseFloat($(".iBp4i").text().split(" ")[0])
                        this.swappedValue = (rate * this.amountData)
                        resolve(this.swappedValue)
                    }else{
                        reject(`Something went wrong Status Code : ${response.statusCode}`)
                    }
                })
            }else{
                reject(`No data was passed in try again`)
            }
        })
    }
}
module.exports = CurrencyConverter
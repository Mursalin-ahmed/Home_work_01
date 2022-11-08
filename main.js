import { myList } from "./myList.js";

myList.map((item,i)=>{
    let information = `My country name is ${item.name} and currencyName is ${item.currencyName}`
    console.log(information);
})
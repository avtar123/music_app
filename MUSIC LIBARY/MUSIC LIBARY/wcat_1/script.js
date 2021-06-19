#!/usr/bin/env node

//console.log("hello");
const fs= require('fs');

let data= fs.readFileSync("abc.txt","utf-8");
fs.writeFileSync("abc.txt");
#!/usr/bin/env node

//console.log("hello");
import * as fs from 'fs';

let data: string = fs.readFileSync("abc.txt","utf-8");
fs.writeFileSync("abc.txt");
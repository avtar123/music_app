require('chromedriver');
let wd = require('selenium-webdriver');

let browser = new wd.Builder().forBrowser('chrome').build();

async function main(){
await browser.get('https://youtube.com');
await browser.wait(wd.until.elementLocated(wd.By.css("#serch")));
let serchbox = await browser.findElement(wd.By.css("#serch"));
await serchbox.sendkeys(Serching + wd.Key.ENTER);
}
await browser.wait(wd.until.elementLocated(wd.By.css("#video-title")));
let allvideos = await browser.findElements(wd.By.css("#video-title"));
let secondvideo = allvideos[1];
await
console.log(video);
await video.click();
let link = await browser.getCurrentUrl();
let ss1=link.substring(0,12);
let ss2=link.substring(12);
let durl=ss1+"ss"+ss2;
//await browser.get(durl);
await browser.get(downloadvideourl);
await browser.wait(wd.until.elementLocated(wd.By.css(".link.link-download.subname.ga_track_event.download-icon")));
let videodownloadbutton=await browser.findElement(wd.By.css(".link.link-download.subname.ga_track_event.download-icon")).getAttribute("href");
await videodownloadbutton.click();
main();

function timebreak(time) {
    return new Promise(function (resolve, reject) { 
        setTimeout(resolve, time);
     });
}
const result = timebreak(1000).then(() => {
    console.log("1s");
    return timebreak(2000);
}).then(() => {
    console.log("2s");
}).then((data) => {
    console.log(data);
    console.log("hello");
    return timebreak(5000);
});
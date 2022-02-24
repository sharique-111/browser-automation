const puppeteer =  require("puppeteer");
console.log("before");
let page;
let browserOpenPromise = puppeteer.launch({
    headless: false,
    slowMo: true,
    defaultViewport: null,
    args:["--start-maximized"]
});
browserOpenPromise
    .then(function (browser) {
        // currently opened tabs
        const pagesArrPromise = browser.pages();
        return pagesArrPromise;
    }).then(function (browserPages) {
        page = browserPages[0];
        let gotoPromise =  page.goto("https://www.google.com/");
        return gotoPromise;
    }).then(function () {
        // waiting for the element to appear on the page
        let elementWaitPromise = page.waitForSelector("input[type='text']",{ visible: true });
        return elementWaitPromise;
    })
    .then(function () {
        // console.log("Reached google page");
        // typing an element on that page -> selector
        let keysWillBeSentPromise = page.type("input[type='text']","pepcoding");
        return keysWillBeSentPromise;
    }).then(function () {
        // page.keyboard to type special characters
        let enterWillBePressed = page.keyboard.press("Enter");
        return enterWillBePressed;
    }).then(function () {
        let elementWaitPromise =  page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md",{visible: true});
        return elementWaitPromise;
    }).then(function () {
        //mouse
        let keyWillBeSentPromise = page.click("h3.LC20lb.MBeuO.DKV0Md");
        return keyWillBeSentPromise;
    })
    .catch(function (err) {
        console.log(err);
    })
console.log("after");
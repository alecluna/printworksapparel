const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page
        .goto('http://127.0.0.1:5500/src/request_quote.html', {
            waitUntil: 'load',
            timeout: 0,
        })
        .then(() => {
            console.log('estimate page successful load')
        })
        .catch(res => {
            console.log('fails', res)
        })
    await page.waitFor('input[name=search]')

    await page.type('input[name=search]', 'hello')
    await page.$eval('input[name=search]', el => (el.value = 'hello'))

    await page.click('input[type="submit"]')
    await page.waitForSelector('#mw-content-text')
    const text = await page.evaluate(() => {
        const anchor = document.querySelector('#mw-content-text')
        return anchor.textContent
    })
    console.log(text)

    await browser.close()
})()


;(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page
        .goto('http://127.0.0.1:5500/src/gallery.html', {
            waitUntil: 'load',
            timeout: 0,
        })
        .then(() => {
            console.log('success')
        })
        .catch(res => {
            console.log('fails', res)
        })
    await page.screenshot({ path: 'Gallery.png' })

    await browser.close()
})()

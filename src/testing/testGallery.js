const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page
        .goto('http://127.0.0.1:5500/src/gallery.html', {
            waitUntil: 'load',
            timeout: 0,
        })
        .then(() => {
            console.log('gallery page successful load')
        })
        .catch(res => {
            console.log('fails', res)
        })
    await page.screenshot({ path: 'Gallery.png' })

    await browser.close()
})()

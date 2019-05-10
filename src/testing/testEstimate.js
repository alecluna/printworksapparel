const puppeteer = require('puppeteer')

;(async () => {
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

    const inputName = 'input[id=name]'
    console.log('typing test name into email form...')

    await page.waitFor(inputName)
    await page.type(inputName, 'test name')
    await page.$eval(inputName, el => (el.value = 'test name'))

    console.log('succesful render of input with test name text')

    const inputEmail = 'input[type=email]'
    console.log('typing test@email into email form...')
    await page.waitFor(inputEmail)
    await page.type(inputEmail, 'test@email.com')
    await page.$eval(inputEmail, el => (el.value = 'test@email.com'))

    console.log('succesful render of input email form and test text')
    // await page.click('input[type="submit"]')
    // await page.waitForSelector('#mw-content-text')
    // const text = await page.evaluate(() => {
    //     const anchor = document.querySelector('#mw-content-text')
    //     return anchor.textContent
    // })

    await browser.close()
})()

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

    const inputPhone = 'input[type=tel]'
    console.log('typing 9161235555 into phone number form...')
    await page.waitFor(inputPhone)
    await page.type(inputPhone, '9161235555')
    await page.$eval(inputPhone, el => (el.value = '916-123-5555'))

    console.log('succesful render of 9161235555 phone number form')

    const inputQuantity = 'input[name=quantity]'
    console.log('selecting 4 for quantity form...')
    await page.waitFor(inputQuantity)
    await page.type(inputQuantity, '4')
    await page.$eval(inputQuantity, el => (el.value = '4'))

    console.log('succesful render of 4 for quantity form')

    const inputNeedbyDate = 'input[id=needBy]'
    console.log('selecting test Need By Date')
    await page.waitFor(inputNeedbyDate)
    await page.type(inputNeedbyDate, '11122019')
    await page.$eval(inputNeedbyDate, el => (el.value = '11122019'))

    console.log('succesful render of test Need by Date form')

    //add total subission later on
    // await page.click('input[type="submit"]')
    // await page.waitForSelector('#mw-content-text')
    // const text = await page.evaluate(() => {
    //     const anchor = document.querySelector('#mw-content-text')
    //     return anchor.textContent
    // })

    await page.screenshot({ path: 'Estimate.png' })
    await browser.close()
})()

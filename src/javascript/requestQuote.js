//Text box if user selects "Other" in quote form
const CheckStyle = val => {
    let element = document.getElementById('style')
    val === 'other'
        ? (element.style.display = 'block')
        : (element.style.display = 'none')
}

//form validation for phone number form
let zChar = new Array(' ', '(', ')', '-', '.')
let maxphonelength = 13
let phonevalue1
let phonevalue2
let cursorposition

const ParseForNumber1 = object => {
    phonevalue1 = ParseChar(object.value, zChar)
}

const ParseForNumber2 = object => {
    phonevalue2 = ParseChar(object.value, zChar)
}

const backspacerUP = (object, e) => {
    let keycode

    if (e) {
        e = e
    } else {
        e = window.event
    }
    if (e.which) {
        keycode = e.which
    } else {
        keycode = e.keyCode
    }

    ParseForNumber1(object)

    if (keycode >= 48) {
        ValidatePhone(object)
    }
}

const backspacerDOWN = (object, e) => {
    let keycode

    if (e) {
        e = e
    } else {
        e = window.event
    }
    if (e.which) {
        keycode = e.which
    } else {
        keycode = e.keyCode
    }
    ParseForNumber2(object)
}

const GetCursorPosition = () => {
    let t1 = phonevalue1
    let t2 = phonevalue2
    let bool = false

    for (i = 0; i < t1.length; i++) {
        if (t1.substring(i, 1) != t2.substring(i, 1)) {
            if (!bool) {
                cursorposition = i
                bool = true
            }
        }
    }
}

const ValidatePhone = object => {
    var p = phonevalue1

    p = p.replace(/[^\d]*/gi, '')

    if (p.length < 3) {
        object.value = p
    } else if (p.length == 3) {
        pp = p
        d4 = p.indexOf('(')
        d5 = p.indexOf(')')
        if (d4 == -1) {
            pp = '(' + pp
        }
        if (d5 == -1) {
            pp = pp + ')'
        }
        object.value = pp
    } else if (p.length > 3 && p.length < 7) {
        p = '(' + p
        l30 = p.length
        p30 = p.substring(0, 4)
        p30 = p30 + ')'

        p31 = p.substring(4, l30)
        pp = p30 + p31

        object.value = pp
    } else if (p.length >= 7) {
        p = '(' + p
        l30 = p.length
        p30 = p.substring(0, 4)
        p30 = p30 + ')'

        p31 = p.substring(4, l30)
        pp = p30 + p31

        l40 = pp.length
        p40 = pp.substring(0, 8)
        p40 = p40 + '-'

        p41 = pp.substring(8, l40)
        ppp = p40 + p41

        object.value = ppp.substring(0, maxphonelength)
    }

    GetCursorPosition()

    if (cursorposition >= 0) {
        if (cursorposition == 0) {
            cursorposition = 2
        } else if (cursorposition <= 2) {
            cursorposition = cursorposition + 1
        } else if (cursorposition <= 5) {
            cursorposition = cursorposition + 2
        } else if (cursorposition == 6) {
            cursorposition = cursorposition + 2
        } else if (cursorposition == 7) {
            cursorposition = cursorposition + 4
            e1 = object.value.indexOf(')')
            e2 = object.value.indexOf('-')
            if (e1 > -1 && e2 > -1) {
                if (e2 - e1 == 4) {
                    cursorposition = cursorposition - 1
                }
            }
        } else if (cursorposition < 11) {
            cursorposition = cursorposition + 3
        } else if (cursorposition == 11) {
            cursorposition = cursorposition + 1
        } else if (cursorposition >= 12) {
            cursorposition = cursorposition
        }
    }
}

const ParseChar = (sStr, sChar) => {
    sChar.length == null ? (zChar = new Array(sChar)) : (zChar = sChar)

    for (i = 0; i < zChar.length; i++) {
        sNewStr = ''

        let iStart = 0
        var iEnd = sStr.indexOf(sChar[i])

        while (iEnd != -1) {
            sNewStr += sStr.substring(iStart, iEnd)
            iStart = iEnd + 1
            iEnd = sStr.indexOf(sChar[i], iStart)
        }
        sNewStr += sStr.substring(sStr.lastIndexOf(sChar[i]) + 1, sStr.length)

        sStr = sNewStr
    }

    return sNewStr
}

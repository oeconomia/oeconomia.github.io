'use strict'

function l(str) {
    var subs = arguments, lstr
    
    if (lstr = g.local[str]) str = lstr
    if (subs.length == 1) return str

    return str.replace(/\{(\d+)\}/g, function() {
        return subs[arguments[1]]
    })
}


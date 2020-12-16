const typed = new Typed('.typed', {
    strings: [
        '<i class= "texto">Platillos principales</i>',
        '<i class= "texto">Postres</i>',
        '<i class= "texto">Y mas</i>'
    ],
    stringElement: '.tit',
    typeSpeed: 75,
    startDelay: 500,
    backSpeed: 50,
    smartBackspace: true,
    shuffle: false,
    backDelay: 1000,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html'
})
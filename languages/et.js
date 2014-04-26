function getString(string) {
    var library = {
        'silent': 'Vaikus',
        'continuewithmusic': 'Kas soovid selle seansi taustamuusikaga jätkata?',
        'resumeafterintro': 'Seansi taustamuusika jätkub pärast sissejuhatust.',
        'cancel': 'EI',
        'ok': 'JAH',
        'introplaying' : 'Seanss käib, taustamuusika jätkub peale seansi sissejuhatust',
        'chooseduration' : 'Vali seansi pikkus ja sulle sobiv taustamuusika'
    };
    return library[string];
}

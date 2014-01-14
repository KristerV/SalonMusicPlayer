function getString(string) {
    var library = {
        'silent': 'Vaikus',
        'continuewithmusic': 'Kas soovid selle muusikaga jätkata?',
        'resumeafterintro': 'Muusika jätkub pärast sissejuhatust.',
        'cancel': 'EI',
        'ok': 'JAH',
        'introplaying' : 'Sissejuhatus mängib',
    };
    return library[string];
}
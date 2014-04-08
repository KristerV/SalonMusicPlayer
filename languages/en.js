function getString(string) {
    var library = {
        'silent': 'Silent',
        'continuewithmusic': 'Would you like to continue with this music?',
        'resumeafterintro': 'We will now play an introduction, after which the music will resume.',
        'cancel': 'CANCEL',
        'ok': 'OK',
        'introplaying' : 'Introduction playing',
        'chooseduration' : 'Choose session duration'
    };
    return library[string];
}

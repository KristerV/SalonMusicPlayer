function htmlListItem(title) {
    var html = '<button id="'+ title +'" class="list-item '+ layout_size +'">'+ title +'</button>';
    $('#music-list').append(html);
}

function htmlPopupStart() {
    var message = '<h2 class="'+ layout_size +'">'+ getString('continuewithmusic') +'</h2><p class="'+ layout_size +'">'+ getString('resumeafterintro') +'</p>';
    var html = '<div id="popup-dark-back">\
                    <div id="popup-solid-back" class="'+ layout_size +'">'+
                        message + htmlConfirmButton(getString('cancel'), "cancel") + htmlConfirmButton(getString('ok'), "ok")
                    +'</div>\
                </div>';
    $('#popup-space')
            .append(html)
            .on(touchClick, '.ok', function(){
                window.saved_selection = $('.active').attr('id');
                window.intro_played = true;
                $('#popup-space').empty();
                htmlPopupIntroPlaying();
                play("1_Intro");
            })
            .on(touchClick, '.cancel', function(){
                $('#popup-space').empty();
            });
    $('#popup-solid-back').css('background-color', app_color);
    $('#popup-solid-back').css('bottom', $(window).height()/2-$('#popup-solid-back').height()/2);
}

function htmlConfirmButton(label, _class) {
    html = '<button class="confirm-button '+ _class +' '+ layout_size +'">'+ label +'</button>';
    return html;
}

function htmlPopupIntroPlaying() {
    var message = '<h2 class="'+ layout_size +'">'+ getString('introplaying') +'</h2>';
    var html = '<div id="popup-dark-back">\
                    <div id="popup-solid-back" class="'+ layout_size +'">'+
                        message
                    +'</div>\
                </div>';
    $('#popup-space')
            .append(html);
    $('#popup-solid-back').css('background-color', app_color);
    $('#popup-solid-back').css('bottom', $(window).height()/2-$('#popup-solid-back').height()/2);
}

function htmlVolumeSlider() {
    var html = '<img src="img/iconmonstr-audio-4-icon.svg" id="volume-icon" /><input id="volume-slider" type="range" min="0" max="100">';
    $('#volume-space').append(html);
    $("#volume-slider").change(function(){
            var value = $("#volume-slider").val() / 100;
            $(".playing").prop('volume', value);
    });
    $("#volume-slider").val(volume_slider_default_percent);
}

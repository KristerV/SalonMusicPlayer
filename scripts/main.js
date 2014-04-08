$(document).ready(function(){
    var mobile   = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent);
    // window.touchClick = mobile ? "touchstart" : "mousedown";
    window.touchClick = "click";
    window.intro_played = false;
    window.session_started = false;
    window.stopping_initiated = false;

    getOptions();
    useOptions();
    if (volume_slider) {
        $('#music-list').css('height', '90%');
        htmlVolumeSlider();
    }

    $('#music-list').on(touchClick, ".list-item", function(event){
        if (!session_started) {
            window.session_timer_stop = setTimeout(function(){stop_session()}, session_duration*60000);
            window.session_started = true;
        }
        $('.list-item.active').removeClass("active");
        $(this).addClass('active');
        var filename = $(this).attr("id");
        play(filename);
        if (typeof timer != 'undefined' && typeof timer == 'number') {
            clearTimeout(timer);
        }
        if (!intro_played) {
            window.timer = setTimeout(function(){
                htmlPopupConfirmMusic();
            },start_popop_delay*1000);
        }
    });
});

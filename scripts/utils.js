window.last_played = '';

function useOptions() {
    $('body').css('background-color', app_color);
    $.getScript('languages/'+ Language +'.js', function(){
        getFileList();
    });
    // head.js('languages/'+ Language +'.js');
}

function getFileList() {
    $.post('php/getList.php', {path_to_music: path_to_music}, function(data, status) {
        try {
            result = JSON.parse(data);
        } catch(err) {
            console.log("Failed to get files: " + err + "\n" + data);
            exit();
        }
        fillMusicList(result);
    });
}

function fillMusicList(result) {
    // Add silent track
    htmlListItem(getString('silent'));

    // Add music
    window.playlist = result;
    var exclude = ["1_Intro", "2_Outro", "3_Hidden"];
    for (var key in result) {
        if (result.hasOwnProperty(key) && exclude.indexOf(key) == -1) {
            htmlListItem(key);
        }
    }
}

function play(selection, track) {
    console.log("play");

    // Stop any playing audio
    $('.playing').each(function(){
        this.pause();
    }).removeClass("playing");

    // Deal with silent track
    if (selection == getString('silent')) {
        return true;
    }

    // Combine audio file path
    var folder = selection;
    var file = (typeof track == 'undefined') ? choose_file_to_play(selection) : track;
    var full_path = fix_path(path_to_music) + fix_path(folder) + file;

    // Create audio element
    $('<audio></audio>').attr({
        'src': full_path,
        'autoplay':'autoplay',
    }).appendTo("body")
            .addClass("playing")
            // Play next after finished
            .bind('ended', function(){
                if (selection == "1_Intro") {
                    $('#popup-space').empty();
                    play(saved_selection, last_played);
                } else if (selection == "2_Outro") {
                    var timer_reset = setTimeout(function(){
                        location.reload();
                    }, session_reset_delay_minutes*60000);
                } else {
                    play(selection);
                }
            });
}

function choose_file_to_play(selection) {
    var temp_list = playlist[selection].slice(0);
    var index = temp_list.indexOf(last_played);
    if (index > -1) {
        temp_list.splice(index, 1);
    }
    if (!temp_list.length) {
        if (selection == "2_Outro") {
            // if outro is to be played, but there is no file for it.
            location.reload();
        }
        temp_list = playlist[selection].slice(0);
    }
    var file = temp_list[Math.floor(Math.random()*temp_list.length)]
    if (selection != "1_Intro") {
        window.last_played = file;
    }
    return file;

}

function fix_path(path) {
        if (path.slice(-1) == "*") {
            path = path.substring(0, path.length - 1);
        }
        if (path.slice(-1) != "/") {
            path += "/";
        }
        return path;
}

function stop_session() {
    if (!stopping_initiated) {
        console.log("here1");
        window.stopping_initiated = true;
        $('.playing').animate({volume: 0}, session_gradual_end_seconds*1000);
        var pause_timer = setTimeout(function(){
            $('.playing').each(function(){
                this.pause();
            });
        }, session_gradual_end_seconds*1000);
        var outro = setTimeout(function(){
            play("2_Outro");
        }, (session_outro_delay_minutes*60000)+(session_gradual_end_seconds*1000));
    }
}

function check_time() {
    var current_minutes = new Date().getMinutes();
    if (session_end_time_minutes_from < current_minutes && session_end_time_minutes_to > current_minutes) {
        stop_session();
    }
}

function getStyleRule(name) {
    // used to change CSS rules directly
    for(var i=0; i<document.styleSheets.length; i++) {
        var ix, sheet = document.styleSheets[i];
        for (ix=0; ix<sheet.cssRules.length; ix++) {
            if (sheet.cssRules[ix].selectorText === name)
                return sheet.cssRules[ix].style;
        }
    }
    return null;
}
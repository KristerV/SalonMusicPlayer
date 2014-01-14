function getOptions() {
    ////////////
    // NOTES: //
    ////////////

    // Because the player chooses files at random from inside
    // folders, there should only be one audio file in 1_Intro and 2_Outro.

    // Music folder may not contain any files that are not audio
    // and playable by HTML5 standards.

    // If you'd like to specify time in half-units, do not
    // use comma, use dot.
    // correct: 0.4
    // false: 0,4

    //////////////
    // OPTIONS: //
    //////////////

    // App language
    window.Language = 'et';

    // root is the php folder
    window.path_to_music = "../../music";

    // Nuppude, tekstide suurus
    // võimalikud väärutsed: null, 'doublesize', 'quadruplesize'
    window.layout_size = 'null';

    // http://hexcolorgenerator.com/
    window.app_color = '#1a1a2c';

    // The introduction popup will appear after this amount of milliseconds
    window.timer_duration_seconds = 6;

    // How long does one session last in minutes
    window.session_duration_minutes = 45;

    // Makse sure app is restarted between "from" and "to" minutes
    // This means app is not usable between these values.
    // This is useful when a client is late for the booked session
    // and the system needs to make sure the room is ready for
    // next booking.
    // Default example: App is not usable between X:50 and X:59
    // To disable this option change value to false.
    window.session_end_time_minutes_from = false;
    window.session_end_time_minutes_to = false;

    // Before session ends, for how long does the music gradually turn down volume
    window.session_gradual_end_seconds = 20;

    // How long till outro will play (and app will reset) after volume has gone down
    window.session_outro_delay_minutes = 1;

    // After outro has played, how long until app resets?
    window.session_reset_delay_minutes = 1;


}

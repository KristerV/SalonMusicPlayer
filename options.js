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

    // App language (et/en)
    window.Language = 'et';

    // root is the php folder
    window.path_to_music = "../../music";

    // Nuppude, tekstide suurus
    // võimalikud väärutsed: null, 'doublesize', 'quadruplesize'
    window.layout_size = null;

    // http://hexcolorgenerator.com/
    window.app_color = '#1a1a2c';

    // How long does one session last in minutes
    window.session_duration_minutes = [5, 20, 40];

    // Before session ends, for how long does the music gradually turn down volume
    window.session_gradual_end_seconds = 20;

    // The introduction popup will appear after this amount of seconds
    window.start_popop_delay = 3;

    // How long till outro will play (and app will reset) after volume has gone down
    window.session_outro_delay_minutes = 0,05;

    // After outro has played, how long until app resets?
    window.session_reset_delay_minutes = 0,3;

    // Is volume slider visible?
    window.volume_slider = false;

    // What is the default volume
    window.volume_slider_default_percent = 90;


}

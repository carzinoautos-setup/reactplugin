<?php
<?php
if ( ! defined( 'ABSPATH' ) ) exit;

// Enqueue React build files
function carzino_enqueue_assets() {
    $plugin_url = plugin_dir_url(__FILE__) . '../build/';
    wp_enqueue_style('carzino-style', $plugin_url . 'style.css', [], null);
    wp_enqueue_script('carzino-react', $plugin_url . 'bundle.js', [], null, true);
}
add_action('wp_enqueue_scripts', 'carzino_enqueue_assets');

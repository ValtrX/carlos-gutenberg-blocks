<?php
/**
 * Plugin Name:       Carlos Gutenberg Blocks
 * Description:       Gutenberg blocks created for Carlo's Portfolio.
 * Version:           1.0.0
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Carlos Bermudez
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       carlos-gutenberg-blocks
 *
 * @package CreateBlock
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_carlos_gutenberg_blocks_block_init() {
	register_block_type( __DIR__ . '/build/carlos-gutenberg-blocks' );
}
add_action( 'init', 'create_block_carlos_gutenberg_blocks_block_init' );

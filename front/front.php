<?php
if (!defined('ABSPATH')) exit;
class wpmgFront {
	private static $initiated = false;

	public function init() {
		if ( ! self::$initiated ) {
			self::init_hooks();
		}
	}

	/**
	 * Initializes WordPress hooks
	 */
	private static function init_hooks() {
		self::$initiated = true;
		add_action( 'wp_enqueue_scripts', ['wpmgFront', '_load_script'] );
		add_shortcode( 'wpm-gallery', ['wpmgFront', 'wpmgGalleryShortcode'] );
	}

	public static function _load_script(){
		
	}

	public static function getVimeoThumb($id) {
		$request = wp_remote_get( "https://vimeo.com/api/v2/video/{$id}.json" );
		if( is_wp_error( $request ) ) {
			return WPMG__URL . '/front/images/video_1280x720.jpg';
		}
		$body = json_decode(wp_remote_retrieve_body( $request ));
		if( is_array($body) && count($body) > 0 ){
			$body = array_pop($body);
			return $body->thumbnail_large;
		} else {
			return WPMG__URL . '/front/images/video_1280x720.jpg';
		}
	}

	public static function wpmgGalleryShortcode($attr){
		ob_start();
		include 'inc/index.php';
		wp_enqueue_style( 'wpmg--style', plugins_url( '/style/style.css' , __FILE__ ) );

		wp_enqueue_script( 'wpmg--libs', plugins_url( '/script/wpmg.libs.js', __FILE__ ), array( 'jquery' ), '1.0.0', true );
		wp_enqueue_script( 'wpmg--script', plugins_url( '/script/wpmg-script.js', __FILE__ ), array( 'jquery' ), '1.0.0', true );
		wp_localize_script( 'wpmg--script', 'wpmg', array(
		        'ajax'     => admin_url('admin-ajax.php'),
		        'site_url' => get_site_url(),
		        'hashtag'  => get_option('social-media-hastag'),
		        'youtubeChaneelId' => get_option('youtube-chaneel-id'),
		        'lightBoxType' => get_option('lightBoxType'),
		        'isPro' => (WPMG::$licenced) ? 'true' : 'false'
		    )
		);
		return ob_get_clean();
	}

	public static function wpmg_get_filters($gallery_id = 0){
		global $wpdb;
		$_wpmg_gallery_tags = $wpdb->prefix . 'a_wpmg_gallery_tags';
		$get_tags = $wpdb->get_results(" SELECT * FROM  $_wpmg_gallery_tags WHERE gallery_id = $gallery_id  ORDER BY $_wpmg_gallery_tags.`menu_order` ASC");
		?>
		<div class="wpmg-filter controls <?php echo get_option('wpmg-filter-align') ?>">
			<div class="mixitup_menu_group">
				<button type="button" class="control" data-filter="all">Show All</button>
				<?php foreach ($get_tags as $key => $tag) {
					if( strtoupper($tag->title) == "ALL" && $tag->first == '0' ) continue;
					$ifDefault = ( $tag->first == '1' ) ? 'default-tag' : '';
					echo '<button type="button" class="control '.$ifDefault.'" data-filter=".filter-'.$tag->id.'">'.$tag->title.'</button>';
				} ?>
			</div>
			<div class="mixitup_menu_group mixitup_menu_sort">
				<button type="button" class="control" data-sort="id:asc" title="Sort ascending">
					<i class="svg-icon svg-icon__arrow-down">
					    <svg viewBox="0 0 100 100">
					        <polyline fill="none" stroke-width="6" stroke-miterlimit="10" points="12.7,68.7 50,31.3 87.3,68.7"></polyline>
					    </svg>
					</i>
				</button>
				<button type="button" class="control mixitup-control-active" data-sort="id:descending" title="Sort descending">
					<i class="svg-icon svg-icon__arrow-down">
					    <svg viewBox="0 0 100 100">
					        <polyline fill="none" stroke-width="6" stroke-miterlimit="10" points="12.656,31.328 50,68.672 87.344,31.328 "></polyline>
					    </svg>
					</i>
				</button>
				<button type="button" class="control" data-sort="random" title="Sort random">
					<i class="svg-icon svg-icon__shuffle">
					    <svg viewBox="0 0 100 100">
					    <path d="M74.576,64.456h-9.171L50.948,50l14.456-14.456h9.171V50l20.239-20.239L74.576,9.522v14.456H63.011
					c-1.532,0-3.004,0.61-4.088,1.694L42.772,41.823L26.621,25.673c-1.084-1.084-2.556-1.694-4.088-1.694H5.185v11.565h14.954L34.595,50
					L20.139,64.456H5.185v11.565h17.348c1.532,0,3.004-0.61,4.088-1.694l16.151-16.151l16.151,16.151
					c1.084,1.084,2.556,1.694,4.088,1.694h11.565v14.456l20.239-20.239L74.576,50V64.456z"></path>
					    </svg>
					</i>
				</button>
			</div>
			<div class="mixitup_menu_group mixitup_menu_dropdown">
				<select name="wpmg-filter-dropdown" id="wpmg-filter-dropdown">
					<!-- <option value=".filter-11">All</option> -->
					<?php foreach ($get_tags as $key => $tag) {
						if( strtoupper($tag->title) == "ALL" && $tag->first == '0' ) continue;
						$ifDefault = ( $tag->first == '1' ) ? 'selected' : '';
						echo '<option '.$ifDefault.' value=".filter-'.$tag->id.'">'.$tag->title.'</option>';
					} ?>
				</select>
			</div>

		</div>
		<?php
	}

	public static function wpmg_get_tag_ref($tags){
		$tagsArr = explode(',', $tags);
		$srt     = ''; 

		foreach ($tagsArr as $key => $tag) {
			 $srt .= 'filter-'.(int)$tag . ' ';
		}
		return $srt;
	}

	public static function slugify($text)
	{
		// replace non letter or digits by -
		$text = preg_replace('~[^\pL\d]+~u', '-', $text);

		// transliterate
		$text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

		// remove unwanted characters
		$text = preg_replace('~[^-\w]+~', '', $text);

		// trim
		$text = trim($text, '-');

		// remove duplicate -
		$text = preg_replace('~-+~', '-', $text);

		// lowercase
		$text = strtolower($text);

		if (empty($text)) {
			return 'n-a';
		}

		return $text;
	}

	public static function frontDebug(){
		global $wpdb;
		$tbl = $wpdb->prefix.'a_wpmg_gallery_items';

		$get = $wpdb->get_results(" SELECT * FROM $tbl ");

		foreach ($get as $key => $gl) {

			if( $gl->type == 'youtube' ){
				$post_content = '<div class="fitVids-wrapper">
							<iframe width="1200" height="675" src="https://www.youtube.com/embed/'.$gl->url.'?controls=0&autoplay=1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
						</div>';
				$seo_image = 'https://i3.ytimg.com/vi/'.$gl->url.'/hqdefault.jpg';
			} elseif ( $gl->type == 'vimeo' ) {
				$post_content = '<div class="fitVids-wrapper">
							<iframe src="https://player.vimeo.com/video/'.$gl->url.'?autoplay=1" width="1200" height="675" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
						</div>';
				$seo_image = self::getVimeoThumb($gl->url);
			} else {
				$post_content = '<img src="'.$gl->image.'" alt="'.$gl->caption.'" style="max-width: 100%">';
				$seo_image = $gl->image;
			}
			$post_id = wp_insert_post(
				[
					'post_title' 	=> wp_strip_all_tags( $gl->caption ),
					'post_content'  => $post_content,
  					'post_status'   => 'publish',
  					'post_type'     => WPMG::$post_type,
				]
			);

			if( $post_id ){
				$wpdb->update(
					$tbl,
					[ 'post_id' => $post_id ],
					[ 'id' => $gl->id ]
				);

				update_post_meta( $post_id, '_wp_page_template', 'template-microsite.php' );
				update_post_meta( $post_id, '_dt_sidebar_position', 'disabled' );
				update_post_meta( $post_id, '_dt_header_title', 'disabled' );

				// SEO Tags
				update_post_meta( $post_id, '_yoast_wpseo_opengraph-title', wp_strip_all_tags( $gl->caption ) );
				update_post_meta( $post_id, '_yoast_wpseo_opengraph-description', wp_strip_all_tags( $gl->description.' ' . get_option('social-media-hastag') ) );
				update_post_meta( $post_id, '_yoast_wpseo_opengraph-image', $seo_image );

				update_post_meta( $post_id, '_yoast_wpseo_twitter-title', wp_strip_all_tags( $gl->caption ) );
				update_post_meta( $post_id, '_yoast_wpseo_twitter-description', wp_strip_all_tags( $gl->description.' ' . get_option('social-media-hastag') ) );
				update_post_meta( $post_id, '_yoast_wpseo_twitter-image', $seo_image );
			}
		}
		return "done";
		exit;
	}
}
?>
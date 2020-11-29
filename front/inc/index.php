<?php
//silance
if (!defined('ABSPATH')) exit;

$_id = (int)$attr['id'];
global $wpdb;
$_a_wpmg_gallery_items = $wpdb->prefix . 'a_wpmg_gallery_items';
$gall_items = $wpdb->get_results(" SELECT * FROM  $_a_wpmg_gallery_items where gallery_id = {$_id} ORDER BY $_a_wpmg_gallery_items.`id` DESC");


if( count($gall_items) > 0 ) :
	echo "<div class='wpmg-wrap wpmg-dark wpmg-loading'>";
	include 'loading-spinner.tpl.php';
	if( !isset($attr['filter']) )
		wpmgFront::wpmg_get_filters($_id)
?>

	<div class="wpmfgmixer gcontainer">
	<?php foreach ($gall_items as $key => $item) :

		$item->caption = wp_strip_all_tags(str_replace('|', '-', str_replace('/', '-', $item->caption)));
		$item->description = wp_strip_all_tags(str_replace('|', '-', str_replace('/', '-', $item->description)));

		if( $item->type == 'youtube' && (int)$item->attachment_id > 0 )
		{
			echo '
			<div class="mix '.$item->type.' '. wpmgFront::wpmg_get_tag_ref($item->tags) . ' " comboY data-id="'.$item->id.'">
				<a href="https://www.youtube.com/watch?v='.$item->url.'?rel=0&width=940&height=528" ref="ref-'.$item->id.'" rel="pp['.$item->type.']" title="'.$item->description.'-id-'.$item->id.'" caption="'.$item->caption.'" data-cta-link="'.$item->cta.'" data-cta-text="'.$item->cta_text.'" 
				data-subs="'.$item->subscribe.'"  data-post="'.get_the_permalink($item->post_id).'"
					class="lozad"
					data-background-image="'.$item->image.'"
				>
					
				</a>
			</div>';
		}
		elseif( $item->type == 'vimeo' && (int)$item->attachment_id > 0 )
		{
			echo '
			<div class="mix '.$item->type.' '. wpmgFront::wpmg_get_tag_ref($item->tags) . '" comboV data-id="'.$item->id.'">
				<a href="https://vimeo.com/'.$item->url.'?rel=0&width=940&height=528" ref="ref-'.$item->id.'" rel="pp['.$item->type.']" title="'.$item->description.'-id-'.$item->id.'" caption="'.$item->caption.'" data-cta-link="'.$item->cta.'" data-cta-text="'.$item->cta_text.'" 
				data-subs="'.$item->subscribe.'" data-post="'.get_the_permalink($item->post_id).'"
					class="lozad"
					data-background-image="'.$item->image.'"
				>
					
				</a>
			</div>';
		}
		elseif( $item->type == 'youtube' && (int)$item->attachment_id == 0 )
		{
			$image = 'https://i3.ytimg.com/vi/'.$item->url.'/hqdefault.jpg'; //maxresdefault
			echo '
			<div class="mix '.$item->type.' '. wpmgFront::wpmg_get_tag_ref($item->tags) . '" youtube data-id="'.$item->id.'">
				<a href="https://www.youtube.com/watch?v='.$item->url.'?rel=0&width=940&height=528" ref="ref-'.$item->id.'" rel="pp['.$item->type.']" title="'.$item->description.'-id-'.$item->id.'" caption="'.$item->caption.'" data-cta-link="'.$item->cta.'" data-cta-text="'.$item->cta_text.'" 
				data-subs="'.$item->subscribe.'" data-post="'.get_the_permalink($item->post_id).'"
					class="lozad"
					data-background-image="'.$image.'"
				>
					
				</a>
			</div>';
		} 
		elseif ( $item->type == 'vimeo' && (int)$item->attachment_id == 0 ) 
		{
			$image = SELF::getVimeoThumb($item->url);
			echo '
			<div class="mix '.$item->type.' '. wpmgFront::wpmg_get_tag_ref($item->tags) . '" vimeo data-id="'.$item->id.'">
				<a href="https://vimeo.com/'.$item->url.'?rel=0&width=940&height=528" ref="ref-'.$item->id.'" rel="pp['.$item->type.']" title="'.$item->description.'-id-'.$item->id.'" caption="'.$item->caption.'" data-cta-link="'.$item->cta.'" data-cta-text="'.$item->cta_text.'" 
				data-subs="'.$item->subscribe.'" data-post="'.get_the_permalink($item->post_id).'"
					class="lozad"
					data-background-image="'.$image.'"
				>
					
				</a>
			</div>';
		} 
		else
		{
			echo '
			<div class="mix '.$item->type.' '. wpmgFront::wpmg_get_tag_ref($item->tags) . '" iamge data-id="'.$item->id.'">
				<a href="'.$item->image.'?rel=0&width=940&height=528" ref="ref-'.$item->id.'" rel="pp['.$item->type.']" title="'.$item->description.'-id-'.$item->id.'" caption="'.$item->caption.'" data-cta-link="'.$item->cta.'" data-cta-text="'.$item->cta_text.'" 
				data-subs="'.$item->subscribe.'" data-post="'.get_the_permalink($item->post_id).'"
					class="lozad"
					data-background-image="'.$item->image.'"
				>
					
				</a>
			</div>';
		}
	endforeach; ?>
		<div class="gap"></div>
		<div class="gap"></div>
		<div class="gap"></div>
		<div class="gap"></div>
	</div>
	<div class="mixitup-state">
		<div class="mixitup-page-list"></div>
		<div class="mixitup-page-stats"></div>
	</div>

	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	
	<div class="wpmgEnd" data-id="<?php echo $_id ?>"></div>
	<style>
		/*Filter*/
		.wpmg-wrap .wpmg-filter.controls{ 
			<?php if( get_option('filter-wrapper-bg') != "" ) echo 'background: '.get_option('filter-wrapper-bg').';' ?>
		}
		.wpmg-wrap .wpmg-filter button,
		.wpmg-wrap button.mixitup-control{
			<?php if( get_option('filter-text-color') != "" ) echo 'color: '.get_option('filter-text-color').';' ?>
			<?php if( get_option('filter-bg-color') != "" ) echo 'background: '.get_option('filter-bg-color').';' ?>
			<?php if( get_option('filter-border-color') != "" ) echo 'border: 2px solid '.get_option('filter-border-color').';' ?>
		}
		.wpmg-wrap .svg-icon polyline{
			<?php if( get_option('filter-text-color') != "" ) echo 'stroke: '.get_option('filter-text-color').';' ?>
		}
		.wpmg-wrap .mixitup-control-active .svg-icon polyline{
			<?php if( get_option('act-filter-text-color') != "" ) echo 'stroke: '.get_option('act-filter-text-color').';' ?>
		}
		.wpmg-wrap .svg-icon path{
			<?php if( get_option('filter-text-color') != "" ) echo 'fill: '.get_option('filter-text-color').';' ?>
		}
		.wpmg-wrap .mixitup-control-active .svg-icon path {
		    <?php if( get_option('act-filter-text-color') != "" ) echo 'fill: '.get_option('act-filter-text-color').';' ?>
		}
		.wpmg-wrap .wpmg-filter button.mixitup-control-active{
			<?php if( get_option('act-filter-text-color') != "" ) echo 'color: '.get_option('act-filter-text-color').';' ?>
			<?php if( get_option('act-filter-bg-color') != "" ) echo 'background: '.get_option('act-filter-bg-color').';' ?>
			<?php if( get_option('act-filter-border-color') != "" ) echo 'border: 2px solid '.get_option('act-filter-border-color').';' ?>
		}
		<?php if( (get_option('filter-border-color') != "") || (get_option('act-filter-border-color') != "") ) : ?>
		.wpmg-wrap .mixitup_menu_sort button{
			height: 40px;
			width: 40px;
		}
		<?php endif; ?>
		/*Paginate*/
		.wpmg-wrap button.mixitup-control.mixitup-control-active{
			<?php if( get_option('act-paginate-text-color') != "" ) echo 'color: '.get_option('act-paginate-text-color').';' ?>
			<?php if( get_option('act-paginate-bg-color') != "" ) echo 'background: '.get_option('act-paginate-bg-color').';' ?>
		}
		.wpmg-wrap #wpmg-filter-dropdown{
			<?php if( get_option('filter-text-color') != "" ) echo 'color: '.get_option('filter-text-color').' !important;' ?>
			<?php if( get_option('filter-bg-color') != "" ) echo 'background: '.get_option('filter-bg-color').';' ?>
			<?php if( get_option('filter-border-color') != "" ) echo 'border: 2px solid '.get_option('filter-border-color').';' ?>
		}
	</style>
	</div>
<?php
endif;
<?php
if (!defined('ABSPATH')) exit;

if( get_current_user_id() !=  1)
	die('access denied');

global $wpdb;
$_wpmg_gallery_tags = $wpdb->prefix . 'a_wpmg_gallery_tags';
$tags = $wpdb->get_results(" SELECT * FROM  $_wpmg_gallery_tags  ORDER BY $_wpmg_gallery_tags.`id` ASC");

function hasPermissiontoGData($user_id = 0){
	return (get_user_meta($user_id, 'hasPermissiontoGData', true) == 'true') ? true : false;
}
?>

<div id="wpmg_wrap">
	<?php include 'admin-header.tpl.php'; ?>

	<?php $users = get_users('orderby=id'); ?>

	<div class="CSSTableGenerator" id="tbl-wpmg" style="padding-top: 25px;">
		
        <table class="widefat responsive">
            <thead>
	            <tr class="not-mobile">
	                <td> Nick Name </td>
	                <td> Full Name </td>
	                <td width="120"> Email </td>
	                <td width="120"> Permission </td>
	            </tr>
            </thead>
            <tbody id="filtertbl" class="tagsListTbl">
            	<?php foreach ($users as $key => $user) : if( $user->ID == get_current_user_id() ) continue;?>
	            <tr>
	                <td data-title="Name">
	                    <?php echo $user->user_nicename ?>
	                </td>
	                <td data-title="Name">
	                    <?php echo get_user_meta($user->ID, 'first_name', true) . ' ' . get_user_meta($user->ID, 'last_name', true) ?>
	                </td>
	                <td data-title="Name">
	                    <?php echo $user->user_email; ?>
	                </td>
	                <td data-title="Action" class="actions">
	                    <label class="switch switchPermissiontoGData">
	 						<input type="checkbox" id="hasPermissiontoGData-<?php echo $user->ID ?>" <?php if( hasPermissiontoGData($user->ID) )  echo 'checked' ?> value="<?php echo $user->ID ?>">
	  						<span class="slider round"></span>
						</label>
	                </td>
	            </tr>
	        	<?php endforeach; ?>
        	</tbody>
        </table>
    </div>
</div>

<style>
	.switch {
	  position: relative;
	  display: inline-block;
	  width: 60px;
	  height: 34px;
	}

	.switch input { 
	  opacity: 0;
	  width: 0;
	  height: 0;
	}

	.slider {
	  position: absolute;
	  cursor: pointer;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  background-color: #ccc;
	  -webkit-transition: .4s;
	  transition: .4s;
	}

	.slider:before {
	  position: absolute;
	  content: "";
	  height: 26px;
	  width: 26px;
	  left: 4px;
	  bottom: 4px;
	  background-color: white;
	  -webkit-transition: .4s;
	  transition: .4s;
	}

	input:checked + .slider {
	  background-color: #2196F3;
	}

	input:focus + .slider {
	  box-shadow: 0 0 1px #2196F3;
	}

	input:checked + .slider:before {
	  -webkit-transform: translateX(26px);
	  -ms-transform: translateX(26px);
	  transform: translateX(26px);
	}

	/* Rounded sliders */
	.slider.round {
	  border-radius: 34px;
	}

	.slider.round:before {
	  border-radius: 50%;
	}
</style>
(function ($) {
    Drupal.behaviors.CommerceWvBounceback = {
        attach: function (context, settings) {
		$("input[type=radio][name='line_item_fields[field_wv_bb_line_predet_texts][und]'").change(function() {
			$('#edit-line-item-fields-field-wv-bounceback-text-und-0-value').val($(this).parent().text());
		});

		$('.commerce-add-to-cart .form-radio[value=_none]').parent().hide();
	}
    };
})(jQuery);

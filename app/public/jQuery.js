/**
 * The jQuery plugin namespace.
 * @external "jQuery.fn"
 * @see {@link http://learn.jquery.com/plugins/|jQuery Plugins}
 */

/**
 * A jQuery plugin to send a POST request to /collections/:id.
 * @function external:"jQuery.fn"
 */

$(document).ready(function() {
  $('button.add-to-collection').click(function() {
    /**
     * Sets productId constant
     * @const
     * @type {string}
     * @default
     */
    const productId = $(this).parent().prop('id');

    /**
     * Sets productId constant
     * @const
     * @type {string}
     * @default
     */
    const collectionId = $(`#${productId} select :selected`).val();
    $.post(`/collections/${collectionId}`, { productId, collectionId });
    $(this).parent().append('<p class="confirmation-message">This lucky find has been saved to your collection!</p>');
  });
});

/**
 * @file
 * JavaScript behaviors for help.
 */

(function ($, Drupal, once) {

  'use strict';

  /**
   * Handles disabling help dialog for mobile devices.
   *
   * @type {Drupal~behavior}
   *
   * @prop {Drupal~behaviorAttach} attach
   *   Attaches the behavior for disabling help dialog for mobile devices.
   */
  Drupal.behaviors.content_syncHelpDialog = {
    attach: function (context) {
      once('content_sync-help-dialog', '.button-content_sync-play', context).forEach(function (element) {
        var $element = $(element);
        $element.on('click', function (event) {
          if ($(window).width() < 768) {
            event.stopImmediatePropagation();
          }
        });

        // Must make sure that this click event handler is execute first and
        // before the Ajax dialog handler.
        // @see http://stackoverflow.com/questions/2360655/jquery-event-handlers-always-execute-in-order-they-were-bound-any-way-around-t
        var handlers = $._data($element, 'events')['click'];
        var handler = handlers.pop();
        // Move it at the beginning.
        handlers.splice(0, 0, handler);
      });
    }
  };

})(jQuery, Drupal, once);

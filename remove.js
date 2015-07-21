(function() {
  'use strict';
  window.HTMLElement = (typeof HTMLElement === 'undefined' && Element) || HTMLElement;

  HTMLElement.prototype.remove = function() {
    this.parentNode.removeChild(this);
  }
})();

(function() {
  'use strict';
  window.HTMLElement = (typeof HTMLElement === 'indefined' && Element) || HTMLElement;

  HTMLElement.prototype.remove = function() {
    this.parentNode.removeChild(this);
  }
})();

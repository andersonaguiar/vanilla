(function() {
  'use strict';

  window.HTMLElement = (typeof HTMLElement === 'undefined' && Element) || HTMLElement;

  HTMLElement.prototype.getAttributes = function() {
    var attrs = {};

    Array.prototype.map.call(this.attributes, function(attr) {
      attrs[attr.name] = attr.value;
    });

    return attrs;
  }

  HTMLElement.prototype.setAttributes = function(attrs) {
    if (typeof attrs !== 'object') {
      return;
    }

    for (var attr in attrs) {
      this.setAttribute(attr, attrs[attr]);
    }

    return this;
  }
})();

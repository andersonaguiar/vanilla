(function() {
  'use strict';

  window.HTMLElement = (typeof HTMLElement === 'undefined' && Element) || HTMLElement;

  HTMLElement.prototype.getAttributes = function() {
    var attrs = {};
    var nativeAttrs = this.attributes;
    var i = 0;

    for (; i < nativeAttrs.length; i++) {
      var attr = nativeAttrs[i];
      attrs[attr.name] = attr.value;
    }

    return attrs;
  }

  HTMLElement.prototype.setAttributes = function(attrs) {
    if (typeof attrs !== 'object') {
      return;
    }

    var attr;
    for (attr in attrs) {
      this.setAttribute(attr, attrs[attr]);
    }

    return this;
  }
})();

(function() {
  'use strict';
  window.HTMLElement = (typeof HTMLElement === 'undefined' && Element) || HTMLElement;

  if (!Event.prototype.preventDefault) {
    Event.prototype.preventDefault = function() {
      this.returnValue = false;
    }
  }

  if (!Event.prototype.stopPropagation) {
    Event.prototype.stopPropagation = function() {
      this.cancelBubble = true;
    }
  }

  HTMLElement.prototype.on = function(type, listener, useCapture) {
    useCapture = useCapture || false;

    if (this.attachEvent) {
      return this.attachEvent('on' + type, listener.bind(this));
    }
    return this.addEventListener(type, listener, useCapture);
  }

  HTMLElement.prototype.off = function(type, listener, useCapture) {
    useCapture = useCapture || false;

    if (this.detachEvent) {
      return this.detachEvent('on' + type, listener);
    }
    return this.removeEventListener(type, listener, useCapture);
  }
})();

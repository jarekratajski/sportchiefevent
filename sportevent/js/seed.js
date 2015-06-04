
  Polymer({

    is: 'sport-event',
    
    handleClick:function() {
      alert('Ow!');
    },

    properties: {

      /**
       * `fancy` indicates that the element should don a monocle and tophat,
       * while checking its pocket watch.
       */
      fancy: Boolean,
      event : {
            type: Object
      }
      

    },

    // Element Lifecycle

    ready: function() {
      // `ready` is called after all elements have been configured, but
      // propagates bottom-up. This element's children are ready, but parents
      // are not.
      //
      // This is the point where you should make modifications to the DOM (when
      // necessary), or kick off any processes the element wants to perform.
    },

    attached: function() {
      // `attached` fires once the element and its parents have been inserted
      // into a document.
      //
      // This is a good place to perform any work related to your element's
      // visual state or active behavior (measuring sizes, beginning animations,
      // loading resources, etc).
    },

    detached: function() {
      // The analog to `attached`, `detached` fires when the element has been
      // removed from a document.
      //
      // Use this to clean up anything you did in `attached`.
    },

    // Element Behavior

    /**
     * The `seed-element-lasers` event is fired whenever `fireLasers` is called.
     *
     * @event seed-element-lasers
     * @detail {{sound: String}}
     */

    /**
     * Sometimes it's just nice to say hi.
     *
     * @param {string} greeting A positive greeting.
     * @return {string} The full greeting.
     */
    sayHello: function(greeting) {
      var response = greeting || 'Hello World!';
      return 'seed-element says, ' + response;
    },

    /**
     * Attempts to destroy this element's enemies with an any beam of light!
     *
     * Or, at least, dispatches an event in the vain hope that someone else will
     * do the zapping.
     */
    fireLasers: function() {
      this.fire('seed-element-lasers', {sound: 'Pew pew!'});
    }

  });



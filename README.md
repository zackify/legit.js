legit.js
=========

Legit.js is meant to be an extremely lightweight library for manipulating the DOM, handling events, and a few other miscellaneous functions that are commonly used. The point of legit is to stay under 5K, which is a hard goal to keep. 

  - Handles only the things you always need
  - Easily extended

Click Events
----

All native click events (see [here](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers.onabort)) work with legit. Our event system works similar to jQuery:
```
_('div').on('click', function(event){
    console.log(event);
});
```

Tips
-----------

Most functions called returns an instance of legit.js except for when you call certain ones, like .html(), which will return a value instead. This means calling anything other than these special functions lets you chain calls. You can do:

```
_('div').parent().children(1).css('background-color','black').attr('name','value')
```

Obviously, doing .parent and then .child is pretty pointless, but you get the idea!
When using something like .attr(), if you only pass in a name and not the value, it will return the current value.
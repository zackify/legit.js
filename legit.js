function _(selector){
	var self = {};
	self.selector = selector;
	if(typeof selector === 'object'){
		self.element = self.selector
	}
	else{
		var allElements = document.querySelectorAll(self.selector);
		if(allElements.length == 1) self.element = document.querySelector(self.selector);
		else self.elements = allElements
	}
	/* BASIC FUNCTIONS */

	//grab the html of an element mz('selector').html()
	self.html = function(){
		return self.elements || self.element;
	}
	//get the height of an element
	self.height = function(){
		return self.element.offsetHeight;
	}
	//get the width
	self.width = function(){
		return self.element.offsetWidth;
	}
	//get parent element
	self.first = function(){
		if(self.elements) self.element = self.elements[0]
		return self;
	}
	self.parent = function(){
		self.element = self.element.parentNode;
		return self;
	}
	//get children elements
	self.children = function(key){
		if(!key) key = 0;
		self.element = self.element.childNodes[key];
		return self;
	}
	//get and set attribute values
	self.attr = function(name,value){
		//if no value set, return the current value
	  if(!value) return self.element.getAttribute(name);
		else if(self.elements){
			for (var i=0; i < self.elements.length; i++){
				self.elements[i].setAttribute(name,value);
			}
		}
		else{
			self.element.setAttribute(name,value);
		}
		return self;
	}

	/* Event FUNCTIONS */

	self.on = function(type,callback){
		if(self.elements){
			for (var i=0; i < self.elements.length; i++){
				self.elements[i]['on' + type] = callback;
			}
		}
		else self.element['on' + type] = callback;
		return self
	}

	/* CSS Related FUNCTIONS */

	//add a CSS rule directly to the stylesheet
	self.insertRule = function(name,value,position,stylesheet){
		if(!stylesheet) stylesheet = 0;
		if(!position) position = 0;
		//check for the specified style sheet
		if(document.styleSheets[stylesheet]){
			document.styleSheets[stylesheet].insertRule(self.selector + '{'+ name + ': ' + value + '}',position);
		}

		//if that one doesn't exist, check if there are any stylesheets at all
		else if(document.styleSheets[0]){
			//warn them
			console.warn("the specified stylesheet doesn't exist, the first was used instead");
			document.styleSheets[0].insertRule(self.selector + '{'+ name + ': ' + value + '}',position);
		}
		//if none are available, give error
		else console.error('No style sheets available to modify');

		return self;
	}
	//add css rule inline
	self.css = function(name,value){
		//if no value set, return the current value
		if(self.elements){
			for (var i=0; i < self.elements.length; i++){
				self.elements[i].style[name] = value;
			}
		}
		else{
			if(!value) return self.element.style[name];
			self.element.style[name] = value;
		}
		return self;
	}

	return self;
}

function mz(selector){
	var self = {};
	self.selector = selector;
	self.element = document.querySelector(self.selector);

	//grab the html of an element mz('selector').html()
	self.html = function(){
		return self.element;
	}

	//add a CSS rule to a stylesheet easily. mz('selector').insertRule(name,value)
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

	return self;
}
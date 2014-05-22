function mz(selector){
	var self = {}
	self.selector = selector
	self.element = document.querySelector(self.selector);

	//grab the html of an element mz('selector').html()
	self.html = function(){
		return self.element
	}
	
	//add a CSS rule to a stylesheet easily. mz('selector').addRule(name,value)
	self.addRule = function(name,value,stylesheet){
		if(!stylesheet) stylesheet = 0

		//check for the specified style sheet
		if(document.styleSheets[stylesheet]){
			document.styleSheets[stylesheet].addRule(self.selector,name + ': ' + value);
		}

		//if that one doesn't exist, check if there are any stylesheets at all
		else if(document.styleSheets[0]){
			//warn them
			console.log("the specified stylesheet doesn't exist, the first was used instead")
			document.styleSheets[0].addRule(self.selector,name + ': ' + value);
		}
		//if none are available, give error
		else console.log('No style sheets available to modify')

		return self
	}

	return self
}

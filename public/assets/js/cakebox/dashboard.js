/* ------------------------------------------------------------------------------
 *
 *  Cakebox Dashboard Functions
 *
 *
 *  Version: 1.0
 *  Latest update: July 20, 2017
 *
 * ---------------------------------------------------------------------------- */

var cakeboxDashboard = new function(){
	this.tab_loaded = {
		"#tab_meraki":false,
		"#tab_main":false,
		"#tab_social":false,
		"#tab_engagement":false
	};
	
	
	this.isLoaded = function(name){
		if(typeof(this.tab_loaded[name]) !== "undefined"){
			return this.tab_loaded[name];
		}else{
			return null;
		}
	};
	
	this.setTabLoaded = function(name){
		if(typeof(this.tab_loaded[name]) !== "undefined"){
			this.tab_loaded[name] = true;
		}
	};
}
/*
* This need to be modified in the future released for the dynamic setup of widgets from the user's backoffice
*
* Created by Tri
* Last update: June 30, 2017
*/

var all_widgets = [{
		"title":"Dwelltime",
		"id":"widget_dwelltime",
		"txt":"Dw"
	},
	{
		"title":"Zone",
		"id":"widget_zone_analytics",
		"txt":"Zn"
	},
	{
		"title":"Demography",
		"id":"widget_demography",
		"txt":"Dm"
	},
	{
		"title":"Visitor",
		"id":"widget_visitor",
		"txt":"Vi"
	},
/*	{
		"title":"Profile",
		"id":"widget_profile",
		"txt":"Pr"
	},*/
/*	{
		"title":"Test",
		"id":"widget_test",
		"txt":"Te"
	},*/
    {
		"title":"Logged-in User",
		"id":"widget_logged_in_user",
		"txt":"Usr"
	},
];

var drag_idx = -1;
var cakebox_widgets = {};

var opt_dwelltime = {
		yAxis:{
			format:'{value} mins'
		},
		grid: {
			x: 60
		},
		btn_remove: null
	};
	
var opt_demography = {
		grid: {
			x: 50
		},
		filters:{
			enabled:false
		},
		btn_remove: null
	};
	
var opt_zone = {
		chart:{
			dwelltime:{
				yAxis:{
					format:'{value} mins'
				}
			}
		},
		grid: {
			x: 60
		},
		btn_remove: null
	};

var opt_visitor = {
		chartType: 'line',
		btn_remove: null
	};

var opt_profile = {
		btn_remove: null	
	};

function createWidgetToolbox(){
	var widget_div = $("<div />").addClass("widgets_box").appendTo("body");
	var widget_title = $('<div />').addClass("title").text("WIDGETS").appendTo(widget_div);
	
	var w;
	
	$.each(all_widgets, function( index, value ) {
		var o = all_widgets[index];
		w = $("<a />").attr("title", o.title).addClass("widget_dd").attr("rel", o.id).appendTo(widget_div);
		$("<div />").text(o.txt).appendTo(w);
	});
	
	$('.widgets_box>a').draggable({
		helper: 'clone',
		start:function(){
			if($(this).hasClass("disabled")){
				return false;
			}else{
				$('.content-layout.active').addClass("dragging");
				var rel = $(this).attr("rel");
				//console.log("drag "+rel);
			}
		},
		revert: function(is_valid_drop){
			return true;
		},
		stop: function(){
			$('.content-layout.active').removeClass("dragging");
		}
	});	
}

function bindDraggable(){
	$('.content-layout>div>div').draggable({
		revert: true,
		/*containment:".content",*/
		start:function(){
			var w = $(this);
			w.parent().parent().addClass("dragging");
			drag_idx = w.parent().index();
			//console.log("dragging idx: "+drag_idx);			
			$(this).removeClass("auto-size");
			
			var w_id = w.attr("id");
			if(typeof(cakebox_widgets[w_id]) !== "undefined"){
				eval(cakebox_widgets[w_id]).refreshChart();
			}
		},
		revert: function(is_valid_drop){
			if(!is_valid_drop){
				drag_idx = -1;
				$(this).addClass("auto-size");
			}
		},
		stop: function(){
			var w = $(this);
			w.parent().parent().removeClass("dragging");
			
			var w_id = w.attr("id");
			if(typeof(cakebox_widgets[w_id]) !== "undefined"){
				eval(cakebox_widgets[w_id]).refreshChart();
			}
		}
	});
}

function bindDroppable(){
	$('.content-layout>div').droppable({
		accept: ".cakebox-widget, .widgets_box>a",
		drop: function(ev, ui){
			var idx = $(this).index();
			//console.log("A: "+idx);
			
			if(ui.draggable.hasClass("widget_dd")){
				//console.log("widget dropped");
				
				//remove existing widget if existed
				var w = $(this).find(".cakebox-widget");
				if(w.length>0){
					w.remove();
					var w_id = w.attr("id");
					if(typeof(cakebox_widgets[w_id]) !== "undefined"){
						eval(cakebox_widgets[w_id]).removeChart();
						delete cakebox_widgets[w_id];
					}
				}
				
				var o = $(ui.draggable);
				var rel = o.attr("rel");
				var div = $('<div />').attr("id",rel).addClass("cakebox-widget").appendTo($('.content-layout.active>div').eq(idx));
				
				buildChart(rel, div);
				bindDraggable();
			}
			
			if(ui.draggable.hasClass("cakebox-widget")){
				//console.log("another box dropped");
				
				var w = $(this).find(".cakebox-widget");
				if(w.length>0){
					//console.log("B: "+drag_idx);
					//swap item
					if(drag_idx > -1){
						w.appendTo($('.content-layout.active>div').eq(drag_idx));
						var w_id1 = w.attr("id");
						if(typeof(cakebox_widgets[w_id1]) !== "undefined"){
							eval(cakebox_widgets[w_id1]).refreshChart();
						}
					}
				}
				
				ui.draggable.position( { of: $(this), my: 'left top', at: 'left top' } );
				//ui.draggable.draggable( 'option', 'revert', false );
				ui.draggable.addClass("auto-size").appendTo($(this));
				
				var w_id2 = ui.draggable.attr("id");
				if(typeof(cakebox_widgets[w_id2]) !== "undefined"){
					eval(cakebox_widgets[w_id2]).refreshChart();
				}
				
				drag_idx = -1;
			}			
		}
	});
}

function buildChart(type, div){
	var chart = null;
	
	switch(type){
		case "widget_dwelltime":
			chart = div.cakeboxDwelltime(opt_dwelltime);
			break;
		case "widget_zone_analytics":
			chart = div.cakeboxZone(opt_zone);
			break;
		case "widget_demography":
			chart = div.cakeboxDemography(opt_demography);
			break;
		case "widget_visitor":
			chart = div.cakeboxVisitors(opt_visitor);
			break;
/*		case "widget_profile":
			chart = div.cakeboxProfiles(opt_profile);
			break;*/
/*		case "widget_test":
			chart = div.cakeboxTest(opt_profile);
			break;*/
		case "widget_logged_in_user":
			chart = div.cakeboxUsers(opt_profile);			
			break;
		default:
	}
	
	if(chart !== null){
		cakebox_widgets[type] = chart;		
	}
}
/*
* For dashboard in general
*
* Created By Tri
* Last update: July 20, 2017
*/

function loadTab(name){
	switch(name){
		case "#tab_main":
			buildChart("widget_visitor", $('#tab_main>div').eq(0));
			buildChart("widget_zone_analytics", $('#tab_main>div').eq(1));
			//buildChart("widget_logged_in_user", $('#tab_main>div').eq(2));
			buildChart("widget_demography", $('#tab_main>div').eq(3));
			buildChart("widget_dwelltime", $('#tab_main>div').eq(4));

$('#tab_main>div').eq(2).remove();

			bindDraggable();
			bindDroppable();
			break;
		case "#tab_social":
			loadSocialStats();
			break;
		case "#tab_engagement":
			break;
	}
	
	cakeboxDashboard.setTabLoaded(name);
}

$( document ).ready(function() {
	$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
		var target = $(e.target).attr("href"); // activated tab
		
		//load tab if not loaded yet
		if(cakeboxDashboard.isLoaded(target) === false && $(target).length>0){
			loadTab(target);
		}		
	});
	
	//load first tab
	loadTab($('a[data-toggle="tab"]:first').attr("href"));
});

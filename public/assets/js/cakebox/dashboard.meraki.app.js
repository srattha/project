app.controller('DashboardMerakiController', function ($scope, $http, $timeout, dataService, fn) {
	$scope.BranchStatusLists = {};
	$scope.TopBranchLists = {};
	$scope.TrafficDiff = {};
	$scope.VisitorStatus = {};
	$scope.VisitorRating = {};
	$scope.NPSLists = {};
	$scope.NPSTotal = {};

	var drawChartData1 = {}
	var drawChartData2 = {}

	dataService.getData("/api/v1/dashboard/branch/status").then(res => {
		if(res.data.status){
			$scope.BranchStatusLists = res.data.result;

		}
	});
	console.log("test")

	dataService.getData("/api/v1/dashboard/visitor/top-branch").then(res => {
		if(res.data.status){
			$scope.TopBranchLists = res.data.result;
			console.log($scope.TopBranchLists)
		}
	});

	dataService.getData("/api/v1/dashboard/traffic/branch-decline").then(res => {
		if(res.data.status){
			$scope.TrafficDiff = res.data.result;

		}
	});		

	dataService.getData("/api/v1/dashboard/visitor/status").then(res => {
		if(res.data.status){
			$scope.VisitorStatus = res.data.result;

		}
	});

	dataService.getData("/api/v1/dashboard/visitor/rating").then(res => {
		if(res.data.status){
			$scope.VisitorRating = res.data.result;

		}
	});	

	dataService.getData("/api/v1/dashboard/top-nps").then(res => {
		if(res.data.status){
			$scope.NPSLists = res.data.result;

		}
	});	

	$scope.loadTOPNPS = function(){
		dataService.getData("/api/v1/dashboard/total-nps").then(res => {
			if(res.data.status){
				$scope.NPSTotal = res.data.result;
				survey_chart_data = [['Type', 'Result']];
				survey_chart_colors = [];
				processSurveyData($scope.NPSTotal)
			}
		});			
	}
	setInterval(function(){
		$scope.loadTOPNPS();
	}, 60000);

	dataService.getData("/api/v1/dashboard/visitor/traffic").then(res => {
		if(res.data.status){
			drawChartData1 = res.data.result;
			$scope.drawChart1(res.data.result);
		}
	});		

	dataService.getData("/api/v1/dashboard/visitor/traffic").then(res => {
		if(res.data.status){
			drawChartData2 = res.data.result;
			$scope.drawChart2(res.data.result);
		}
	});	

	$scope.loadTOPNPS();


	$scope.drawChart1 = function(data) {
		data = data || drawChartData1;

		if(!data){
			return
		}		

		var dataTable = new google.visualization.DataTable();
		dataTable.addColumn('string', 'Date');
		var location = data.location;
		if(location){
			for(var i in location){
				dataTable.addColumn('number', location[i]['name']);
			}
		}
		dataTable.addRows(data.lists);

		var options = {
			title: '',
			legend: { position: 'top' },
			tooltip: { isHtml: false },
			width: '75%',
			height:$('.quick-view-status').height()-80,
			vAxis: {
				title: 'Number of Visitors'
			},
			titleTextStyle: {
				color: "red",    
				fontName: "Arial", 
				fontSize: "12px", 
				bold: true,    
				italic: false
			},
			chartArea: {
				left:'15%',
				width: '85%',
				height: '60%',
				top:"50"
			},
		};

		var chart = new google.visualization.LineChart(document.getElementById('chart_traffic'));

		chart.draw(dataTable, options);
	}

	$scope.drawChart2= function(data) {
		data = data || drawChartData2;

		if(!data){
			return
		}
		var dataTable = new google.visualization.DataTable();
		dataTable.addColumn('string', 'Date');
		var location = data.location;
		if(location){
			for(var i in location){
				dataTable.addColumn('number', location[i]['name']);
			}
		}
		dataTable.addRows(data.lists);

		var options = {
			title: '',
			legend: { position: 'top' },
			tooltip: { isHtml: false },
			width: '75%',
			height:'500',
			vAxis: {
				title: 'Number of Notification'
			},
			titleTextStyle: {
				color: "red",    
				fontName: "Arial", 
				fontSize: "12px", 
				bold: true,    
				italic: false
			},
			chartArea: {
				left:'10%',
				width: '90%',
				height: '60%',
				top:"50"
			},
		};

		var chart = new google.visualization.AreaChart(document.getElementById('chart-daily-peaks'));

		chart.draw(dataTable, options);
	}


	// $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
	// 	  var target = $(e.target).attr("href") // activated tab
	// 	  setTimeout(function(){
	// 	  	if(target =="#tab_meraki"){
	// 	  		dataService.getData("/api/v1/dashboard/visitor/traffic").then(res => {
	// 	  			if(res.data.status){
	// 	  				drawChartData1 = res.data.result;
	// 	  				$scope.drawChart1(res.data.result);
	// 	  			}
	// 	  		});				
	// 	  		dataService.getData("/api/v1/dashboard/visitor/traffic").then(res => {
	// 	  			if(res.data.status){
	// 	  				drawChartData2 = res.data.result;
	// 	  				$scope.drawChart2(res.data.result);
	// 	  			}
	// 	  		});	
	// 	  	}
	// 	  },500)
	// 	})



	window.addEventListener('resize', function(){
		setTimeout(function(){
			$scope.drawChart1();
			$scope.drawChart2();
		},200)
	})

})
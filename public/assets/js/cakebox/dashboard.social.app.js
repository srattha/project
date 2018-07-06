/*
* For dashboard social login api via javascript
* Supported on facebook, google, linkedin
*
* Created By Tri
* Last update: July 31, 2017
*/

function loadSocialStats(page){	
	if(typeof(page) === "undefined") page = 1;
	if(isNaN(page)) page = 1;

	var params = {};
	params.page = page;
	
	var tab = $('#tab_social');
	if(tab.length>0){
		tab.html("");
		$("<div />").addClass("loading").html("<i class=\"icon-spinner2 spinner\"></i> Loading...").appendTo(tab);
	}

	$.post( "/api/social/overall", params, function( data ) {
		//console.log(data);
		tab.html("");
		if(data.result === 1){
			buildSocialStats(data.data);
		}else{
			alert(data.msg);
		}
	}, 'json');
}

var social_types = {};

function buildSocialStats(data){
	var tab = $('#tab_social');
	if(tab.length>0){
		$.each(data, function( k, v ) {
			social_types[k] = v.name;
			
			var container = $("<div />").addClass("col-lg-3")
									.addClass("col-md-4")
									.addClass("col-sm-6")
									.addClass("col-xs-6")
									.appendTo(tab);
				var box = $("<div />").addClass("box").appendTo(container);
					$("<div />").addClass("logo").addClass(k).appendTo(box);
					$("<div />").addClass("title").text(v.name).appendTo(box);
					var div = $("<div />").addClass("action").addClass("row").appendTo(box);
						var div1 = $("<div />").attr("id", "social_"+k)
											.addClass("col-md-12")
											.addClass("col-sm-12")
											.addClass("col-xs-12")
											.attr("align", "center")
											.appendTo(div);
						var ul = $("<ul />").addClass("list-unstyled").appendTo(div1);
							var li1 = $("<li />").text("Last Login: ").appendTo(ul);
								var sp1 = $("<span />").attr("id", k+"_lastlogin").text(v.dt).appendTo(li1);
							var li2 = $("<li />").text("Login Count: ").appendTo(ul);
								var sp2 = $("<span />").attr("id", k+"_count").appendTo(li2);
			
								if(!isNaN(v.count)){
									if(v.count>1){
										sp2.text(v.count+" times");
									}else{
										sp2.text(v.count+" time");
									}
								}else{
									sp2.text(v.count);
								}
			
					$("<div />").addClass("connected").attr("title", "Connected").appendTo(box);
					var btn_detail = $("<div />").addClass("btn_detail")
												.attr("title", "See Detail")
												.html("<i class=\"icon-file-text2\"></i>")
												.appendTo(box);
						btn_detail.click(function(e){
							loadSocialDetail(k);							
						});
		});
		
		
		var div_modal = $('<div />').attr("id", "social_detail")
									.addClass("modal")
									.addClass("fade")
									.appendTo(tab);

			var div_modal_dia = $('<div />').addClass("modal-dialog")
											//.addClass("modal-full")
											.appendTo(div_modal);

				var div_modal_cnt = $('<div />').addClass("modal-content")
												.appendTo(div_modal_dia);

					var div_modal_hdr = $('<div />').addClass("modal-header")
													.appendTo(div_modal_cnt);

						$('<button />').attr("type", "button")
										.addClass("close")
										.attr("data-dismiss", "modal")
										.html("×")
										.appendTo(div_modal_hdr);
		
						$('<h5 />').addClass("modal-title")
									.appendTo(div_modal_hdr);
				
					$('<div />').addClass("modal-body")
								.appendTo(div_modal_cnt);
		
					var div_modal_ftr = $('<div />').addClass("modal-footer")
													.appendTo(div_modal_cnt);
		
						$('<button />').addClass("btn")
										.addClass("btn-link")
										.attr("data-dismiss", "modal")
										.html("<i class=\"icon-cross\"></i> Close")
										.appendTo(div_modal_ftr);

	}	
}

function loadSocialDetail(type, page){	
	if(typeof(page) === "undefined") page = 1;
	if(isNaN(page)) page = 1;

	$('#social_detail').modal('show');
	
	var div = $('#social_detail .modal-body');
	if(div.length>0){
		div.html("");
		$("<div />").addClass("loading").html("<i class=\"icon-spinner2 spinner\"></i> Loading...").appendTo(div);
		
		$('#social_detail .modal-title').attr("id", type).text(social_types[type]);
	
		var params = {};
		params.page = page;
		params.type = type;
		
		$.post( "/api/social/detail", params, function( data ) {
			//div.html(data);
			
			div.html("");
			if(data.result === 1){
				makeDetailHTML(data.data, data.nav, type);
			}else{
				var msg = data.msg;
				
				var p = $('<p />').attr("align", "center").appendTo(div);
					$('<div />').addClass("alert")
								.addClass("alert-warning")
								.addClass("alert-bordered")
								.html("<span class=\"text-semibold\">Warning!</span> "+msg)
								.appendTo(p);
			}
		});
	}	
}

function makeDetailHTML(data, nav, type){
	var div = $('#social_detail .modal-body');
	div.html("");
	
	var data_total = typeof(nav.total) !== "undefined" ? nav.total : 0;
	var data_page = typeof(nav.page) !== "undefined" ? nav.page : 0;
	var data_size = typeof(nav.size) !== "undefined" ? nav.size : 0;
	var data_page_total = data_size>0 ? Math.ceil(data_total/data_size) : 0;
	
	if(data.length<=0){
		var p = $('<p />').attr("align", "center").appendTo(div);
			$('<div />').addClass("alert")
						.addClass("alert-warning")
						.addClass("alert-bordered")
						.html("<span class=\"text-semibold\">Oops!</span> Data not found")
						.appendTo(p);
	
	}else{
		$('<div />').text("Found: "+data_total+" rows").appendTo(div);
	
		var div_table = $('<div />').addClass("table-responsive").appendTo(div);
			var table = $('<table />').addClass("table").appendTo(div_table);
				var thead = $('<thead />').appendTo(table);
					var tr = $('<tr />').appendTo(thead);
						$('<th />').text("Datetime").appendTo(tr);
						$('<th />').text("Version").appendTo(tr);
						$('<th />').text("IP Address").appendTo(tr);
	
				var tbody = $('<tbody />').appendTo(table);
	
				$.each(data, function( index, data_row ) {
					//var data_id = typeof(data_row.id) !== "undefined" ? data_row.id : "";
					//var data_name = typeof(data_row.name) !== "undefined" ? data_row.name : "";
					var data_dt = typeof(data_row.dt) !== "undefined" ? data_row.dt : "";
					//var data_deploy_name = typeof(data_row.deploy) !== "undefined" && typeof(data_row.deploy.name) !== "undefined" ? data_row.deploy.name : "";
					var data_deploy_version = typeof(data_row.deploy) !== "undefined" && typeof(data_row.deploy.version) !== "undefined" ? data_row.deploy.version : "";
					//var data_product_name = typeof(data_row.product) !== "undefined" && typeof(data_row.product.name) !== "undefined" ? data_row.product.name : "";
					//var data_company_name = typeof(data_row.company) !== "undefined" && typeof(data_row.company.name) !== "undefined" ? data_row.company.name : "";
					var data_ip = typeof(data_row.ip) !== "undefined" ? data_row.ip : "";
	
					var tr = $('<tr />').appendTo(tbody);
						$('<td />').text(data_dt).appendTo(tr);
						$('<td />').text(data_deploy_version).appendTo(tr);
						$('<td />').text(data_ip).appendTo(tr);
	
				});

		if(data_total>0 && data_page_total>1){
			var prev_page = data_page>1 ? data_page-1 : 1;
			var next_page = data_page>1 && data_page<data_page_total ? data_page+1 : 1;
			
			var div_ftr = $('<div />').addClass("text-center")
									.css("padding-top", "20px")
									.appendTo(div);
			
				var pg = $('<ul />').addClass("pagination").appendTo(div_ftr);
			
					var prev_li = $('<li />').html("<a href=\"javascript:loadSocialDetail('"+type+"', '"+prev_page+"');\">‹</a>")
											.appendTo(pg);
			
					if(data_page<=1){
						prev_li.addClass("disabled");
					}
			
					for(var i=1; i<=data_page_total; i++){
						var li = $('<li />').html("<a href=\"javascript:loadSocialDetail('"+type+"', '"+i+"');\">"+i+"</a>")
											.appendTo(pg);
						
						if(i === data_page){
							li.addClass("active");
						}						
					}			
					
					var next_li = $('<li />').html("<a href=\"javascript:loadSocialDetail('"+type+"', '"+next_page+"');\">›</a>")
											.appendTo(pg);
			
					if(data_page>=data_page_total){
						next_li.addClass("disabled");
					}			
		}
	}	
}

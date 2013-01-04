var args = arguments[0] || {};
if(args !== {})
	init(args);
function init(o){
	$.title.text = o.title || "";
	$.main.text = o.main || "";
	$.licence.text = o.licence || "";
	if(o.thanksTo || $.thanksTo.text != ""){
		$.thanksTitle.text = o.thanksTitle || ($.thanksTitle.text == ""? "Thanks to:" : $.thanksTitle.text);
	}else{
		$.mainView.remove($.thanksTo);
		//$.thanksTo.hide();
	}
	if(o.imgTitle == false){
		$.head.remove($.thanksTo);
		//$.imgTitle.hide();
	}else{
		$.imgTitle.image = o.imgTitle || $.imgTitle.image;
	}
	if(o.imgMain == false){
		$.mainView.remove($.imgMain);
		//$.imgMain.hide();
	}else{
		$.imgMain.image = o.imgMain || $.imgMain.image;
	}
	if(o.imgWin == false){
		$.win.backgroundImage = null;
	}else{
		$.win.backgroundImage = o.imgWin || $.win.backgroundImage;
	}
	if(o.thanksTo){
		var data = [];
		_.each(o.thanksTo.split(','), function(pair) {
			var row = Alloy.createWidget('es.kabomi.about', 'rows', {
				name: pair.split('|')[0],
				contrib: pair.split('|')[1]
			}).getView();
			data.push(row);
		});
		$.table.setData(data);
		$.thanksTo.hide();
	}
	
	if(OS_IOS){
		//Ti.API.info("Test locales back:" + L('back'));
		$.navButton.on('click', function() {
			Ti.API.info("NavButton Click!!" );
				$.win.close();
		});
	}
	if(OS_ANDROID){
		$.win.on('android:back', function(){
			$.win.close();
		});
	}
};
exports.init = init;
exports.show = function(){
	$.win.open();
};
exports.hide = function(){
	$.win.close();
};
exports.setPath = function(o, path){
	switch(o){
		case "main":
			$.imgMain.image = WPATH(path);
			break;
		case "logo":
			$.imgTitle.image = WPATH(path);
			break;
		case "win":
			$.win.backgroundImage = WPATH(path);
			break;
	}
};

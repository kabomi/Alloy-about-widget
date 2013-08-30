var args = arguments[0] || {};
if(args !== {})
	init(args);
function init(o){
	initPlatformStuff();
	parseOptions(o);
};
function initPlatformStuff(){
	//dynamic exprs in tss files no longer accepted
	if(OS_IOS){
		$.imgMain.top = 7;//0
		$.table.top = 0;//-15
	}
	if(OS_ANDROID){
		$.win.addEventListener('android:back', function(){
			$.win.close();
		});
	}
};
function parseOptions(o){
	parseOptionsTexts(o);
	parseOptionsImgs(o);
	parseOptionsTable(o);
};
function parseOptionsTexts(o){
	$.title.text = o.title || "";
	$.main.text = o.main || "";
	$.licence.text = o.licence || "";
	if(o.thanksTo || $.thanksTo.text != ""){
		$.thanksTitle.text = o.thanksTitle || ($.thanksTitle.text == ""? "Thanks to:" : $.thanksTitle.text);
	}else{
		$.mainView.remove($.thanksTo);
	}
};
function parseOptionsImgs(o){
	if(!o.imgTitle){
		$.head.remove($.thanksTo);
	}else{
		$.imgTitle.image = o.imgTitle || $.imgTitle.image;
	}
	if(!o.imgMain){
		$.mainView.remove($.imgMain);
	}else{
		$.imgMain.image = o.imgMain || $.imgMain.image;
	}
	if(!o.imgWin){
		$.win.backgroundImage = null;
	}else{
		$.win.backgroundImage = o.imgWin || (OS_ANDROID?$.win.backgroundImage.toLowerCase():$.win.backgroundImage);
	}
};
function parseOptionsTable(o){
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
};

function show(){
	if(Alloy.CFG.navgroup){
		Alloy.CFG.navgroup.open($.win);
	}else{
		$.win.open();
	}
};

function hide(){
	if(Alloy.CFG.navgroup){
		Alloy.CFG.navgroup.close($.win);
	}else{
		$.win.close();
	}
};

function setPath(o, path){
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

exports.init = init;
exports.show = show;
exports.hide = hide;
exports.setPath = setPath;

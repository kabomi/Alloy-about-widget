if (OS_IOS || OS_MOBILEWEB) {
	// attach the navgroup to Alloy.CFG so it can be accessed globally
	Alloy.CFG.navgroup = $.navgroup;
}
function doClick(e) {  
    //alert($.label.text);
    var about = Alloy.createWidget('es.kabomi.about', 'widget',
    {
			title: "MyApp Title",
			main : "Created by me",
			thanksTo: "Caro|Traductor,Tony|Tester",
			thanksTitle: L("thanksTo"),
			licence: "All rights reserved 2013",
			//imgWin: false, //false value = don't show this image
			//imgMain: false,
			//imgTitle: "/default.png"
		});
		//Set images included in this widget
		//about.setPath('logo', 'logo.png');
		about.setPath('main', '/app.png');
		//about.setPath('win', 'background.png');
		
    about.show();
}

$.index.open();

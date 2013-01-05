
## About Widget

This widget can be used to provide your "About this app" window.
Is not really amazing but you can save up a couple of hours (perhaps days :P)

### Install into your own project
As any other widget you should copy the contents of the [widgets folder](https://github.com/kabomi/Alloy-about-widget/tree/master/app/widgets)
to your local `MyAlloyApp/app/widgets` folder. If you don't found it create one.
Then add dependency line to your `app/config.json` like [this one](https://github.com/kabomi/Alloy-about-widget/blob/master/app/config.json):

```javascript
  "dependencies": {
  		"es.kabomi.about": "1.0"
	}
```
You are done. [Usage example](#usage-example)

### Use this test project
In Titanium Studio:
* go to Menu/Import
* select Git/Git Repository as a new project
* set `https://github.com/kabomi/Alloy-about-widget.git` as uri
* choose a destination
* you are done. Run it on ios or android


### Usage example:

```javascript
function doClick(e) {  
    //alert($.label.text);
    var about = Alloy.createWidget('es.kabomi.about', 'widget',
    {
      title: "MyApp title?",
      main : "Created by me",
      thanksTo: "Caro|Traductor,Tony|Tester",
      thanksTitle: L("thanksTo"),
      //imgWin: false, //false value = don't show this image
      //imgMain: false,
      //imgTitle: "/default.png"
    });
    //Set images included in this widget
    //about.setPath('logo', 'logo.png');
    about.setPath('main', 'app.png');
    //about.setPath('win', 'background.png');

    about.show();
}
$.index.open();
```

### Result

![Result](https://raw.github.com/kabomi/Alloy-about-widget/master/app/assets/alloyAboutWidget.png)

## Notes

Every param is listed above.
imgWin, imgMain and imgTitle are set in the widget.xml
  * You can override its image value with a app path like "/default.png" or
  * You can override its image value with a widget path calling setPath method like so 
    about.setPath('main', 'app.png') or
  * You can pass a false value in order to delete the object (hide the window backgroundImage)


## Questions?

Contact me: 
* [at]kabomi5 on twitter
* kabomi[at]gmail[dot]com

Or ask your question [here](http://developer.appcelerator.com/question/ask)
___
___

Welcome to your Appcelerator Titanium Mobile Project

This is a blank project.  Start by editing your application's app.js to 
make your first mobile project using Titanium.



----------------------------------
Stuff our legal folk make us say:

Appcelerator, Appcelerator Titanium and associated marks and logos are 
trademarks of Appcelerator, Inc. 

Titanium is Copyright (c) 2008-2013 by Appcelerator, Inc. All Rights Reserved.

Titanium is licensed under the Apache Public License (Version 2). Please
see the LICENSE file for the full license.


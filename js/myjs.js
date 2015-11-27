
var myApp = new Framework7();

 var changeimage = function (_src)
  {
	 alert(_src);
	  var url = _src.substring(_src.indexOf("emoji"));
	  var joiner = 'www/' + url
	  
	   alert(joiner);
   window.plugins.socialsharing.shareViaWhatsApp(null, null, ''+joiner+'', null);
  }
  var changeimage1 = function ()
  {
   window.plugins.socialsharing.share(null, null, 'www/emoji/twit.png', null);
  }=
  
   var sahreviawhastpp = function ()
  {
	
   window.plugins.socialsharing.shareViaWhatsApp(null, null, 'www/emoji/twit.png', null);
  }
  
   var sahreviafacebook = function ()
  {
    window.plugins.socialsharing.shareViaWhatsApp(null, null, 'www/emoji/twit.png', null);
  }
  
 
var $$ = Dom7;
 
//- One group, three buttons
$$('.ac-1').on('click', function () {
    var buttons = [
        {
            text: 'Whatsapp',
            bold: true,
			 onClick: function () {
                sahreviawhastpp();
            }
        },
        {
            text: 'Facebook',
			 onClick: function () {
                sahreviafacebook();
            }
        },
        {
            text: 'Cancel',
            color: 'red'
        },
    ];
    myApp.actions(buttons);
});
 


function resizeDivText(context,fontSize,key,maxWidth){
	var lineWidth = context.width();
	//alert('width: '+lineWidth);
	if((lineWidth > maxWidth) && (key != 8) && (key != 46)){
		fontSize-=2;
		return fontSize;
	}
	else if((lineWidth < maxWidth) && (fontSize < 44) && (key == 8 || key == 46)){
		fontSize = parseInt(fontSize)+2;
		return fontSize;
	}
	else{
		return fontSize;
	}
}

function drawText(context,text,color,fontSize,x,y){
	context.font='bold '+fontSize+'px Arial';
	context.fillStyle=color;
	context.fillText(text,x,y);
}

$(document).ready(function(){
	
	var c=document.getElementById("lucas-meme");
	var ctx=c.getContext("2d");
	
	var img=document.getElementById("lucas_img");
	ctx.drawImage(img,0,0);
	
	var line1 = $("#first-line-holder");
	var line2 = $("#second-line-holder");
	var line3 = $("#third-line-holder");
	
	$(document).on('keyup','#first-line',function(event){
		//alert('type');
		var key = event.keyCode || event.charCode;
		var theText = $(this).val();
		if(theText == ''){
			$(this).attr('font-size',44);
		}
		var fontSize = $(this).attr('font-size');

		//put the text into the div
		newFontSize=resizeDivText(line1,fontSize,key,225);
		$(this).attr('font-size',newFontSize);
		line1.text(theText).css('font-size',newFontSize+'px');
	});
	
	$(document).on('keyup','#second-line',function(event){
		//alert('type');
		var key = event.keyCode || event.charCode;
		var theText = $(this).val();
		if(theText == ''){
			$(this).attr('font-size',44);
		}
		var fontSize = $(this).attr('font-size');

		//put the text into the div
		newFontSize=resizeDivText(line2,fontSize,key,200);
		$(this).attr('font-size',newFontSize);
		line2.text(theText).css('font-size',newFontSize+'px');
	});
	
	$(document).on('keyup','#third-line',function(event){
		//alert('type');
		var key = event.keyCode || event.charCode;
		var theText = $(this).val();
		if(theText == ''){
			$(this).attr('font-size',44);
		}
		var fontSize = $(this).attr('font-size');

		//put the text into the div
		newFontSize=resizeDivText(line3,fontSize,key,260);
		$(this).attr('font-size',newFontSize);
		line3.text(theText).css('font-size',newFontSize+'px');
	});
	
	$(document).on('click','.save-button',function(){
		//drawText(text,color,fontSize,x,y)
		if(line1.text() == 'has a' && line2.text() == 'MEME' && line3.text() == 'generator'){
			alert('Be more original!');
		}
		else{
		$('#image_holder').empty().append('<canvas id="generated" width="630" height="484"></canvas>');
		
		var c2=document.getElementById("generated");
		var ctx2=c2.getContext("2d");
		ctx2.drawImage(img,0,0);
		
		var text2 = $("#second-line-holder").text();
		text2 = text2.toUpperCase();
		
		drawText(ctx2,$("#first-line-holder").text(),$("#first-line-holder").css('color'),$("#first-line").attr('font-size'),58,144);
		drawText(ctx2,text2,$("#second-line-holder").css('color'),$("#second-line").attr('font-size'),58,190);
		drawText(ctx2,$("#third-line-holder").text(),$("#third-line-holder").css('color'),$("#third-line").attr('font-size'),58,232);
		
		var newImg = c2.toDataURL("image/png");
		var dataString = "imgData="+newImg;
		
		$.ajax({
			type: "POST",
			contentType: 'application/x-www-form-urlencoded',
			url: "php/save_image.php",
			data: dataString,
			success: function(data){
				//$('.container').append('<img src="saved/'+data+'" />');
				var page = data.replace('.png', '');
				$('#image_holder').empty().append('<div id="popup_holder"><img src="saved/'+data+'" /><p class="instructions">Right click or tap and hold to save... or use the links below to share!</p><div class="addthis_toolbox addthis_default_style addthis_32x32_style add_this_strip" addthis:url="http://lucasisame.me/meme.php?page='+page+'"><a class="addthis_button_preferred_1"></a><a class="addthis_button_preferred_2"></a><a class="addthis_button_preferred_3"></a><a class="addthis_button_compact"></a></div><script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-52e56f6472994223"></script></div>');
				//open the colorbox
				$.colorbox({width: "672px",height:"660px",opacity: 0.6,scrolling: false,inline:true,href:$('#popup_holder')});
			}
		});
		}
		//$('#image_holder').empty().append('<div id="popup_holder"><img src="'+newImg+'" /><p>Right-click to save your image.</p></div>');
		
	});
});
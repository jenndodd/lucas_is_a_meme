function resizeText(context,text,fontSize,key,maxWidth){
  var lineWidth = context.measureText(text).width;
  if((lineWidth > maxWidth) && (key != 8) && (key != 46)){
    fontSize-=2;
    return fontSize;
  }
  else if((lineWidth < maxWidth) && (fontSize < 30) && (key == 8 || key == 46)){
    fontSize = parseInt(fontSize)+2;
    return fontSize;
  }
  else{
    return fontSize;
  }
}

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
    $('#image_holder').empty().append('<canvas id="generated" width="630" height="484"></canvas>');
    
    var c2=document.getElementById("generated");
    var ctx2=c2.getContext("2d");
    ctx2.drawImage(img,0,0);
    
    var text2 = $("#second-line-holder").text();
    text2 = text2.toUpperCase();
    
    drawText(ctx2,$("#first-line-holder").text(),$("#first-line-holder").css('color'),$("#first-line").attr('font-size'),58,144);
    drawText(ctx2,text2,$("#second-line-holder").css('color'),$("#second-line").attr('font-size'),58,186);
    drawText(ctx2,$("#third-line-holder").text(),$("#third-line-holder").css('color'),$("#third-line").attr('font-size'),58,220);
    
    var newImg = c2.toDataURL("image/jpg");
    //$('#image_holder').empty().append('<img src="'+newImg+'" />');
    
    var new_window = window.open("","","width=800,height=650");
    new_window.document.write('<img src="'+newImg+'" />');
  })
});
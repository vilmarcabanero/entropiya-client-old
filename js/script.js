	
$(document).ready(function(){	

  //Get the button
  var mybutton = document.getElementById("myBtn");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  

	// plugtrade.com - jQuery detect vertical scrollbar function //
	(function($) {
		$.fn.has_scrollbar = function() {
			var divnode = this.get(0);
			if(divnode.scrollHeight > divnode.clientHeight)
				return true;
		}
	})(jQuery);
	
	var oldHeight1 = 150, oldHeight2;

	/*
	var i=1;
	for(i; i<4; i++) {
		$("#button-problem"+i).click(function(){
			var j = i;
			if($("#content-problem1").has_scrollbar()) { 
				oldHeight1 = $("#content-problem1").height();
				$("#content-problem1").css("height", oldHeight1+oldHeight1)
				$("#content-answer1").css("height", oldHeight1+oldHeight1)
				
				if($("#content-problem1").has_scrollbar()) {
					oldHeight2 = $("#content-problem1").height();
					$("#content-problem1").css("height", oldHeight1+oldHeight2)
					$("#content-answer1").css("height", oldHeight1+oldHeight2)
				}
			} 
		});
	} */
		
	
	
			
	for(var i=1; i<1000; i++) {
		$("#button-problem"+i).css("background-color", "#ddd")
		$("#button-answer"+i).css("background-color", "inherit")
		$("#content-problem"+i).show()
		$("#content-answer"+i).hide()
		
		
		/*
		$("#expand"+i).hide()
		
		if($("#content-problem"+i).has_scrollbar()) {
			//$("#expand"+i).show()
		}
		
		$("#expand"+i).click(function(){
			$(".tabcontent").css("height", "300px");
		}); 
		
		*/

				
		$("#button-problem"+i).click(function(){
			//alert("Height of div element: " + $("#button-problem1").height());
			for(var i=1; i<1000; i++) {
				$("#button-problem"+i).css("background-color", "#ddd")
				$("#button-answer"+i).css("background-color", "inherit")
				$("#content-problem"+i).show()
				$("#content-answer"+i).hide()
						
			} 
		});
				
		$("#button-answer"+i).click(function(){
			for(var i=1; i<1000; i++) {
				$("#button-problem"+i).css("background-color", "inherit")
				$("#button-answer"+i).css("background-color", "#ddd")
				$("#content-problem"+i).hide()
				$("#content-answer"+i).show()
			};	
		});	
		
		
	 //end of for
	};
	
});

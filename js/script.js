	
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

		//Initial
		$("#button-problem1").css("background-color", "#ddd")
		$("#button-answer1").css("background-color", "inherit")
		$("#content-problem1").show()
		$("#content-answer1").hide()
			
		//If clicked
		$("#math-collapsible").click(function(){
			$("#button-problem1").css("background-color", "#ddd")
			$("#button-answer1").css("background-color", "inherit")
			$("#content-problem1").show()
			$("#content-answer1").hide()		
		});
		
	
	//Problem 1
	//Initial
	$("#button-problem1").css("background-color", "#ddd")
	$("#button-answer1").css("background-color", "inherit")
	$("#content-problem1").show()
	$("#content-answer1").hide()
		
	//If clicked
	$("#button-problem1").click(function(){
		$("#button-problem1").css("background-color", "#ddd")
		$("#button-answer1").css("background-color", "inherit")
		$("#content-problem1").show()
		$("#content-answer1").hide()		
	});

	$("#button-answer1").click(function(){
		$("#button-problem1").css("background-color", "inherit")
		$("#button-answer1").css("background-color", "#ddd")
		$("#content-answer1").show()
	});	

	//Problem 2
	//Initial
	$("#button-problem2").css("background-color", "#ddd")
	$("#button-answer2").css("background-color", "inherit")
	$("#content-problem2").show()
	$("#content-answer2").hide()
		
	//If clicked
	$("#button-problem2").click(function(){
		$("#button-problem2").css("background-color", "#ddd")
		$("#button-answer2").css("background-color", "inherit")
		$("#content-problem2").show()
		$("#content-answer2").hide()		
	});

	$("#button-answer2").click(function(){
		$("#button-problem2").css("background-color", "inherit")
		$("#button-answer2").css("background-color", "#ddd")
		$("#content-answer2").show()
	});	
		
	//Problem 3
	//Initial
	$("#button-problem3").css("background-color", "#ddd")
	$("#button-answer3").css("background-color", "inherit")
	$("#content-problem3").show()
	$("#content-answer3").hide()
		
	//If clicked
	$("#button-problem3").click(function(){
		$("#button-problem3").css("background-color", "#ddd")
		$("#button-answer3").css("background-color", "inherit")
		$("#content-problem3").show()
		$("#content-answer3").hide()		
	});

	$("#button-answer3").click(function(){
		$("#button-problem3").css("background-color", "inherit")
		$("#button-answer3").css("background-color", "#ddd")
		$("#content-answer3").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem4").css("background-color", "#ddd")
	$("#button-answer4").css("background-color", "inherit")
	$("#content-problem4").show()
	$("#content-answer4").hide()
		
	//If clicked
	$("#button-problem4").click(function(){
		$("#button-problem4").css("background-color", "#ddd")
		$("#button-answer4").css("background-color", "inherit")
		$("#content-problem4").show()
		$("#content-answer4").hide()		
	});

	$("#button-answer4").click(function(){
		$("#button-problem4").css("background-color", "inherit")
		$("#button-answer4").css("background-color", "#ddd")
		$("#content-answer4").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem5").css("background-color", "#ddd")
	$("#button-answer5").css("background-color", "inherit")
	$("#content-problem5").show()
	$("#content-answer5").hide()
		
	//If clicked
	$("#button-problem5").click(function(){
		$("#button-problem5").css("background-color", "#ddd")
		$("#button-answer5").css("background-color", "inherit")
		$("#content-problem5").show()
		$("#content-answer5").hide()		
	});

	$("#button-answer5").click(function(){
		$("#button-problem5").css("background-color", "inherit")
		$("#button-answer5").css("background-color", "#ddd")
		$("#content-answer5").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem6").css("background-color", "#ddd")
	$("#button-answer6").css("background-color", "inherit")
	$("#content-problem6").show()
	$("#content-answer6").hide()
		
	//If clicked
	$("#button-problem6").click(function(){
		$("#button-problem6").css("background-color", "#ddd")
		$("#button-answer6").css("background-color", "inherit")
		$("#content-problem6").show()
		$("#content-answer6").hide()		
	});

	$("#button-answer6").click(function(){
		$("#button-problem6").css("background-color", "inherit")
		$("#button-answer6").css("background-color", "#ddd")
		$("#content-answer6").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem7").css("background-color", "#ddd")
	$("#button-answer7").css("background-color", "inherit")
	$("#content-problem7").show()
	$("#content-answer7").hide()
		
	//If clicked
	$("#button-problem7").click(function(){
		$("#button-problem7").css("background-color", "#ddd")
		$("#button-answer7").css("background-color", "inherit")
		$("#content-problem7").show()
		$("#content-answer7").hide()		
	});

	$("#button-answer7").click(function(){
		$("#button-problem7").css("background-color", "inherit")
		$("#button-answer7").css("background-color", "#ddd")
		$("#content-answer7").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem8").css("background-color", "#ddd")
	$("#button-answer8").css("background-color", "inherit")
	$("#content-problem8").show()
	$("#content-answer8").hide()
		
	//If clicked
	$("#button-problem8").click(function(){
		$("#button-problem8").css("background-color", "#ddd")
		$("#button-answer8").css("background-color", "inherit")
		$("#content-problem8").show()
		$("#content-answer8").hide()		
	});

	$("#button-answer8").click(function(){
		$("#button-problem8").css("background-color", "inherit")
		$("#button-answer8").css("background-color", "#ddd")
		$("#content-answer8").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem9").css("background-color", "#ddd")
	$("#button-answer9").css("background-color", "inherit")
	$("#content-problem9").show()
	$("#content-answer9").hide()
		
	//If clicked
	$("#button-problem9").click(function(){
		$("#button-problem9").css("background-color", "#ddd")
		$("#button-answer9").css("background-color", "inherit")
		$("#content-problem9").show()
		$("#content-answer9").hide()		
	});

	$("#button-answer9").click(function(){
		$("#button-problem9").css("background-color", "inherit")
		$("#button-answer9").css("background-color", "#ddd")
		$("#content-answer9").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem10").css("background-color", "#ddd")
	$("#button-answer10").css("background-color", "inherit")
	$("#content-problem10").show()
	$("#content-answer10").hide()
		
	//If clicked
	$("#button-problem10").click(function(){
		$("#button-problem10").css("background-color", "#ddd")
		$("#button-answer10").css("background-color", "inherit")
		$("#content-problem10").show()
		$("#content-answer10").hide()		
	});

	$("#button-answer10").click(function(){
		$("#button-problem10").css("background-color", "inherit")
		$("#button-answer10").css("background-color", "#ddd")
		$("#content-answer10").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem11").css("background-color", "#ddd")
	$("#button-answer11").css("background-color", "inherit")
	$("#content-problem11").show()
	$("#content-answer11").hide()
		
	//If clicked
	$("#button-problem11").click(function(){
		$("#button-problem11").css("background-color", "#ddd")
		$("#button-answer11").css("background-color", "inherit")
		$("#content-problem11").show()
		$("#content-answer11").hide()		
	});

	$("#button-answer11").click(function(){
		$("#button-problem11").css("background-color", "inherit")
		$("#button-answer11").css("background-color", "#ddd")
		$("#content-answer11").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem12").css("background-color", "#ddd")
	$("#button-answer12").css("background-color", "inherit")
	$("#content-problem12").show()
	$("#content-answer12").hide()
		
	//If clicked
	$("#button-problem12").click(function(){
		$("#button-problem12").css("background-color", "#ddd")
		$("#button-answer12").css("background-color", "inherit")
		$("#content-problem12").show()
		$("#content-answer12").hide()		
	});

	$("#button-answer12").click(function(){
		$("#button-problem12").css("background-color", "inherit")
		$("#button-answer12").css("background-color", "#ddd")
		$("#content-answer12").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem13").css("background-color", "#ddd")
	$("#button-answer13").css("background-color", "inherit")
	$("#content-problem13").show()
	$("#content-answer13").hide()
		
	//If clicked
	$("#button-problem13").click(function(){
		$("#button-problem13").css("background-color", "#ddd")
		$("#button-answer13").css("background-color", "inherit")
		$("#content-problem13").show()
		$("#content-answer13").hide()		
	});

	$("#button-answer13").click(function(){
		$("#button-problem13").css("background-color", "inherit")
		$("#button-answer13").css("background-color", "#ddd")
		$("#content-answer13").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem14").css("background-color", "#ddd")
	$("#button-answer14").css("background-color", "inherit")
	$("#content-problem14").show()
	$("#content-answer14").hide()
		
	//If clicked
	$("#button-problem14").click(function(){
		$("#button-problem14").css("background-color", "#ddd")
		$("#button-answer14").css("background-color", "inherit")
		$("#content-problem14").show()
		$("#content-answer14").hide()		
	});

	$("#button-answer14").click(function(){
		$("#button-problem14").css("background-color", "inherit")
		$("#button-answer14").css("background-color", "#ddd")
		$("#content-answer14").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem15").css("background-color", "#ddd")
	$("#button-answer15").css("background-color", "inherit")
	$("#content-problem15").show()
	$("#content-answer15").hide()
		
	//If clicked
	$("#button-problem15").click(function(){
		$("#button-problem15").css("background-color", "#ddd")
		$("#button-answer15").css("background-color", "inherit")
		$("#content-problem15").show()
		$("#content-answer15").hide()		
	});

	$("#button-answer15").click(function(){
		$("#button-problem15").css("background-color", "inherit")
		$("#button-answer15").css("background-color", "#ddd")
		$("#content-answer15").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem16").css("background-color", "#ddd")
	$("#button-answer16").css("background-color", "inherit")
	$("#content-problem16").show()
	$("#content-answer16").hide()
		
	//If clicked
	$("#button-problem16").click(function(){
		$("#button-problem16").css("background-color", "#ddd")
		$("#button-answer16").css("background-color", "inherit")
		$("#content-problem16").show()
		$("#content-answer16").hide()		
	});

	$("#button-answer16").click(function(){
		$("#button-problem16").css("background-color", "inherit")
		$("#button-answer16").css("background-color", "#ddd")
		$("#content-answer16").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem17").css("background-color", "#ddd")
	$("#button-answer17").css("background-color", "inherit")
	$("#content-problem17").show()
	$("#content-answer17").hide()
		
	//If clicked
	$("#button-problem17").click(function(){
		$("#button-problem17").css("background-color", "#ddd")
		$("#button-answer17").css("background-color", "inherit")
		$("#content-problem17").show()
		$("#content-answer17").hide()		
	});

	$("#button-answer17").click(function(){
		$("#button-problem17").css("background-color", "inherit")
		$("#button-answer17").css("background-color", "#ddd")
		$("#content-answer17").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem18").css("background-color", "#ddd")
	$("#button-answer18").css("background-color", "inherit")
	$("#content-problem18").show()
	$("#content-answer18").hide()
		
	//If clicked
	$("#button-problem18").click(function(){
		$("#button-problem18").css("background-color", "#ddd")
		$("#button-answer18").css("background-color", "inherit")
		$("#content-problem18").show()
		$("#content-answer18").hide()		
	});

	$("#button-answer18").click(function(){
		$("#button-problem18").css("background-color", "inherit")
		$("#button-answer18").css("background-color", "#ddd")
		$("#content-answer18").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem19").css("background-color", "#ddd")
	$("#button-answer19").css("background-color", "inherit")
	$("#content-problem19").show()
	$("#content-answer19").hide()
		
	//If clicked
	$("#button-problem19").click(function(){
		$("#button-problem19").css("background-color", "#ddd")
		$("#button-answer19").css("background-color", "inherit")
		$("#content-problem19").show()
		$("#content-answer19").hide()		
	});

	$("#button-answer19").click(function(){
		$("#button-problem19").css("background-color", "inherit")
		$("#button-answer19").css("background-color", "#ddd")
		$("#content-answer19").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem20").css("background-color", "#ddd")
	$("#button-answer20").css("background-color", "inherit")
	$("#content-problem20").show()
	$("#content-answer20").hide()
		
	//If clicked
	$("#button-problem20").click(function(){
		$("#button-problem20").css("background-color", "#ddd")
		$("#button-answer20").css("background-color", "inherit")
		$("#content-problem20").show()
		$("#content-answer20").hide()		
	});

	$("#button-answer20").click(function(){
		$("#button-problem20").css("background-color", "inherit")
		$("#button-answer20").css("background-color", "#ddd")
		$("#content-answer20").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem21").css("background-color", "#ddd")
	$("#button-answer21").css("background-color", "inherit")
	$("#content-problem21").show()
	$("#content-answer21").hide()
		
	//If clicked
	$("#button-problem21").click(function(){
		$("#button-problem21").css("background-color", "#ddd")
		$("#button-answer21").css("background-color", "inherit")
		$("#content-problem21").show()
		$("#content-answer21").hide()		
	});

	$("#button-answer21").click(function(){
		$("#button-problem21").css("background-color", "inherit")
		$("#button-answer21").css("background-color", "#ddd")
		$("#content-answer21").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem22").css("background-color", "#ddd")
	$("#button-answer22").css("background-color", "inherit")
	$("#content-problem22").show()
	$("#content-answer22").hide()
		
	//If clicked
	$("#button-problem22").click(function(){
		$("#button-problem22").css("background-color", "#ddd")
		$("#button-answer22").css("background-color", "inherit")
		$("#content-problem22").show()
		$("#content-answer22").hide()		
	});

	$("#button-answer22").click(function(){
		$("#button-problem22").css("background-color", "inherit")
		$("#button-answer22").css("background-color", "#ddd")
		$("#content-answer22").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem23").css("background-color", "#ddd")
	$("#button-answer23").css("background-color", "inherit")
	$("#content-problem23").show()
	$("#content-answer23").hide()
		
	//If clicked
	$("#button-problem23").click(function(){
		$("#button-problem23").css("background-color", "#ddd")
		$("#button-answer23").css("background-color", "inherit")
		$("#content-problem23").show()
		$("#content-answer23").hide()		
	});

	$("#button-answer23").click(function(){
		$("#button-problem23").css("background-color", "inherit")
		$("#button-answer23").css("background-color", "#ddd")
		$("#content-answer23").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem24").css("background-color", "#ddd")
	$("#button-answer24").css("background-color", "inherit")
	$("#content-problem24").show()
	$("#content-answer24").hide()
		
	//If clicked
	$("#button-problem24").click(function(){
		$("#button-problem24").css("background-color", "#ddd")
		$("#button-answer24").css("background-color", "inherit")
		$("#content-problem24").show()
		$("#content-answer24").hide()		
	});

	$("#button-answer24").click(function(){
		$("#button-problem24").css("background-color", "inherit")
		$("#button-answer24").css("background-color", "#ddd")
		$("#content-answer24").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem25").css("background-color", "#ddd")
	$("#button-answer25").css("background-color", "inherit")
	$("#content-problem25").show()
	$("#content-answer25").hide()
		
	//If clicked
	$("#button-problem25").click(function(){
		$("#button-problem25").css("background-color", "#ddd")
		$("#button-answer25").css("background-color", "inherit")
		$("#content-problem25").show()
		$("#content-answer25").hide()		
	});

	$("#button-answer25").click(function(){
		$("#button-problem25").css("background-color", "inherit")
		$("#button-answer25").css("background-color", "#ddd")
		$("#content-answer25").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem26").css("background-color", "#ddd")
	$("#button-answer26").css("background-color", "inherit")
	$("#content-problem26").show()
	$("#content-answer26").hide()
		
	//If clicked
	$("#button-problem26").click(function(){
		$("#button-problem26").css("background-color", "#ddd")
		$("#button-answer26").css("background-color", "inherit")
		$("#content-problem26").show()
		$("#content-answer26").hide()		
	});

	$("#button-answer26").click(function(){
		$("#button-problem26").css("background-color", "inherit")
		$("#button-answer26").css("background-color", "#ddd")
		$("#content-answer26").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem27").css("background-color", "#ddd")
	$("#button-answer27").css("background-color", "inherit")
	$("#content-problem27").show()
	$("#content-answer27").hide()
		
	//If clicked
	$("#button-problem27").click(function(){
		$("#button-problem27").css("background-color", "#ddd")
		$("#button-answer27").css("background-color", "inherit")
		$("#content-problem27").show()
		$("#content-answer27").hide()		
	});

	$("#button-answer27").click(function(){
		$("#button-problem27").css("background-color", "inherit")
		$("#button-answer27").css("background-color", "#ddd")
		$("#content-answer27").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem28").css("background-color", "#ddd")
	$("#button-answer28").css("background-color", "inherit")
	$("#content-problem28").show()
	$("#content-answer28").hide()
		
	//If clicked
	$("#button-problem28").click(function(){
		$("#button-problem28").css("background-color", "#ddd")
		$("#button-answer28").css("background-color", "inherit")
		$("#content-problem28").show()
		$("#content-answer28").hide()		
	});

	$("#button-answer28").click(function(){
		$("#button-problem28").css("background-color", "inherit")
		$("#button-answer28").css("background-color", "#ddd")
		$("#content-answer28").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem29").css("background-color", "#ddd")
	$("#button-answer29").css("background-color", "inherit")
	$("#content-problem29").show()
	$("#content-answer29").hide()
		
	//If clicked
	$("#button-problem29").click(function(){
		$("#button-problem29").css("background-color", "#ddd")
		$("#button-answer29").css("background-color", "inherit")
		$("#content-problem29").show()
		$("#content-answer29").hide()		
	});

	$("#button-answer29").click(function(){
		$("#button-problem29").css("background-color", "inherit")
		$("#button-answer29").css("background-color", "#ddd")
		$("#content-answer29").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem30").css("background-color", "#ddd")
	$("#button-answer30").css("background-color", "inherit")
	$("#content-problem30").show()
	$("#content-answer30").hide()
		
	//If clicked
	$("#button-problem30").click(function(){
		$("#button-problem30").css("background-color", "#ddd")
		$("#button-answer30").css("background-color", "inherit")
		$("#content-problem30").show()
		$("#content-answer30").hide()		
	});

	$("#button-answer30").click(function(){
		$("#button-problem30").css("background-color", "inherit")
		$("#button-answer30").css("background-color", "#ddd")
		$("#content-answer30").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem31").css("background-color", "#ddd")
	$("#button-answer31").css("background-color", "inherit")
	$("#content-problem31").show()
	$("#content-answer31").hide()
		
	//If clicked
	$("#button-problem31").click(function(){
		$("#button-problem31").css("background-color", "#ddd")
		$("#button-answer31").css("background-color", "inherit")
		$("#content-problem31").show()
		$("#content-answer31").hide()		
	});

	$("#button-answer31").click(function(){
		$("#button-problem31").css("background-color", "inherit")
		$("#button-answer31").css("background-color", "#ddd")
		$("#content-answer31").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem32").css("background-color", "#ddd")
	$("#button-answer32").css("background-color", "inherit")
	$("#content-problem32").show()
	$("#content-answer32").hide()
		
	//If clicked
	$("#button-problem32").click(function(){
		$("#button-problem32").css("background-color", "#ddd")
		$("#button-answer32").css("background-color", "inherit")
		$("#content-problem32").show()
		$("#content-answer32").hide()		
	});

	$("#button-answer32").click(function(){
		$("#button-problem32").css("background-color", "inherit")
		$("#button-answer32").css("background-color", "#ddd")
		$("#content-answer32").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem33").css("background-color", "#ddd")
	$("#button-answer33").css("background-color", "inherit")
	$("#content-problem33").show()
	$("#content-answer33").hide()
		
	//If clicked
	$("#button-problem33").click(function(){
		$("#button-problem33").css("background-color", "#ddd")
		$("#button-answer33").css("background-color", "inherit")
		$("#content-problem33").show()
		$("#content-answer33").hide()		
	});

	$("#button-answer33").click(function(){
		$("#button-problem33").css("background-color", "inherit")
		$("#button-answer33").css("background-color", "#ddd")
		$("#content-answer33").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem34").css("background-color", "#ddd")
	$("#button-answer34").css("background-color", "inherit")
	$("#content-problem34").show()
	$("#content-answer34").hide()
		
	//If clicked
	$("#button-problem34").click(function(){
		$("#button-problem34").css("background-color", "#ddd")
		$("#button-answer34").css("background-color", "inherit")
		$("#content-problem34").show()
		$("#content-answer34").hide()		
	});

	$("#button-answer34").click(function(){
		$("#button-problem34").css("background-color", "inherit")
		$("#button-answer34").css("background-color", "#ddd")
		$("#content-answer34").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem35").css("background-color", "#ddd")
	$("#button-answer35").css("background-color", "inherit")
	$("#content-problem35").show()
	$("#content-answer35").hide()
		
	//If clicked
	$("#button-problem35").click(function(){
		$("#button-problem35").css("background-color", "#ddd")
		$("#button-answer35").css("background-color", "inherit")
		$("#content-problem35").show()
		$("#content-answer35").hide()		
	});

	$("#button-answer35").click(function(){
		$("#button-problem35").css("background-color", "inherit")
		$("#button-answer35").css("background-color", "#ddd")
		$("#content-answer35").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem36").css("background-color", "#ddd")
	$("#button-answer36").css("background-color", "inherit")
	$("#content-problem36").show()
	$("#content-answer36").hide()
		
	//If clicked
	$("#button-problem36").click(function(){
		$("#button-problem36").css("background-color", "#ddd")
		$("#button-answer36").css("background-color", "inherit")
		$("#content-problem36").show()
		$("#content-answer36").hide()		
	});

	$("#button-answer36").click(function(){
		$("#button-problem36").css("background-color", "inherit")
		$("#button-answer36").css("background-color", "#ddd")
		$("#content-answer36").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem37").css("background-color", "#ddd")
	$("#button-answer37").css("background-color", "inherit")
	$("#content-problem37").show()
	$("#content-answer37").hide()
		
	//If clicked
	$("#button-problem37").click(function(){
		$("#button-problem37").css("background-color", "#ddd")
		$("#button-answer37").css("background-color", "inherit")
		$("#content-problem37").show()
		$("#content-answer37").hide()		
	});

	$("#button-answer37").click(function(){
		$("#button-problem37").css("background-color", "inherit")
		$("#button-answer37").css("background-color", "#ddd")
		$("#content-answer37").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem38").css("background-color", "#ddd")
	$("#button-answer38").css("background-color", "inherit")
	$("#content-problem38").show()
	$("#content-answer38").hide()
		
	//If clicked
	$("#button-problem38").click(function(){
		$("#button-problem38").css("background-color", "#ddd")
		$("#button-answer38").css("background-color", "inherit")
		$("#content-problem38").show()
		$("#content-answer38").hide()		
	});

	$("#button-answer38").click(function(){
		$("#button-problem38").css("background-color", "inherit")
		$("#button-answer38").css("background-color", "#ddd")
		$("#content-answer38").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem39").css("background-color", "#ddd")
	$("#button-answer39").css("background-color", "inherit")
	$("#content-problem39").show()
	$("#content-answer39").hide()
		
	//If clicked
	$("#button-problem39").click(function(){
		$("#button-problem39").css("background-color", "#ddd")
		$("#button-answer39").css("background-color", "inherit")
		$("#content-problem39").show()
		$("#content-answer39").hide()		
	});

	$("#button-answer39").click(function(){
		$("#button-problem39").css("background-color", "inherit")
		$("#button-answer39").css("background-color", "#ddd")
		$("#content-answer39").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem40").css("background-color", "#ddd")
	$("#button-answer40").css("background-color", "inherit")
	$("#content-problem40").show()
	$("#content-answer40").hide()
		
	//If clicked
	$("#button-problem40").click(function(){
		$("#button-problem40").css("background-color", "#ddd")
		$("#button-answer40").css("background-color", "inherit")
		$("#content-problem40").show()
		$("#content-answer40").hide()		
	});

	$("#button-answer40").click(function(){
		$("#button-problem40").css("background-color", "inherit")
		$("#button-answer40").css("background-color", "#ddd")
		$("#content-answer40").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem41").css("background-color", "#ddd")
	$("#button-answer41").css("background-color", "inherit")
	$("#content-problem41").show()
	$("#content-answer41").hide()
		
	//If clicked
	$("#button-problem41").click(function(){
		$("#button-problem41").css("background-color", "#ddd")
		$("#button-answer41").css("background-color", "inherit")
		$("#content-problem41").show()
		$("#content-answer41").hide()		
	});

	$("#button-answer41").click(function(){
		$("#button-problem41").css("background-color", "inherit")
		$("#button-answer41").css("background-color", "#ddd")
		$("#content-answer41").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem42").css("background-color", "#ddd")
	$("#button-answer42").css("background-color", "inherit")
	$("#content-problem42").show()
	$("#content-answer42").hide()
		
	//If clicked
	$("#button-problem42").click(function(){
		$("#button-problem42").css("background-color", "#ddd")
		$("#button-answer42").css("background-color", "inherit")
		$("#content-problem42").show()
		$("#content-answer42").hide()		
	});

	$("#button-answer42").click(function(){
		$("#button-problem42").css("background-color", "inherit")
		$("#button-answer42").css("background-color", "#ddd")
		$("#content-answer42").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem43").css("background-color", "#ddd")
	$("#button-answer43").css("background-color", "inherit")
	$("#content-problem43").show()
	$("#content-answer43").hide()
		
	//If clicked
	$("#button-problem43").click(function(){
		$("#button-problem43").css("background-color", "#ddd")
		$("#button-answer43").css("background-color", "inherit")
		$("#content-problem43").show()
		$("#content-answer43").hide()		
	});

	$("#button-answer43").click(function(){
		$("#button-problem43").css("background-color", "inherit")
		$("#button-answer43").css("background-color", "#ddd")
		$("#content-answer43").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem44").css("background-color", "#ddd")
	$("#button-answer44").css("background-color", "inherit")
	$("#content-problem44").show()
	$("#content-answer44").hide()
		
	//If clicked
	$("#button-problem44").click(function(){
		$("#button-problem44").css("background-color", "#ddd")
		$("#button-answer44").css("background-color", "inherit")
		$("#content-problem44").show()
		$("#content-answer44").hide()		
	});

	$("#button-answer44").click(function(){
		$("#button-problem44").css("background-color", "inherit")
		$("#button-answer44").css("background-color", "#ddd")
		$("#content-answer44").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem45").css("background-color", "#ddd")
	$("#button-answer45").css("background-color", "inherit")
	$("#content-problem45").show()
	$("#content-answer45").hide()
		
	//If clicked
	$("#button-problem45").click(function(){
		$("#button-problem45").css("background-color", "#ddd")
		$("#button-answer45").css("background-color", "inherit")
		$("#content-problem45").show()
		$("#content-answer45").hide()		
	});

	$("#button-answer45").click(function(){
		$("#button-problem45").css("background-color", "inherit")
		$("#button-answer45").css("background-color", "#ddd")
		$("#content-answer45").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem46").css("background-color", "#ddd")
	$("#button-answer46").css("background-color", "inherit")
	$("#content-problem46").show()
	$("#content-answer46").hide()
		
	//If clicked
	$("#button-problem46").click(function(){
		$("#button-problem46").css("background-color", "#ddd")
		$("#button-answer46").css("background-color", "inherit")
		$("#content-problem46").show()
		$("#content-answer46").hide()		
	});

	$("#button-answer46").click(function(){
		$("#button-problem46").css("background-color", "inherit")
		$("#button-answer46").css("background-color", "#ddd")
		$("#content-answer46").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem47").css("background-color", "#ddd")
	$("#button-answer47").css("background-color", "inherit")
	$("#content-problem47").show()
	$("#content-answer47").hide()
		
	//If clicked
	$("#button-problem47").click(function(){
		$("#button-problem47").css("background-color", "#ddd")
		$("#button-answer47").css("background-color", "inherit")
		$("#content-problem47").show()
		$("#content-answer47").hide()		
	});

	$("#button-answer47").click(function(){
		$("#button-problem47").css("background-color", "inherit")
		$("#button-answer47").css("background-color", "#ddd")
		$("#content-answer47").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem48").css("background-color", "#ddd")
	$("#button-answer48").css("background-color", "inherit")
	$("#content-problem48").show()
	$("#content-answer48").hide()
		
	//If clicked
	$("#button-problem48").click(function(){
		$("#button-problem48").css("background-color", "#ddd")
		$("#button-answer48").css("background-color", "inherit")
		$("#content-problem48").show()
		$("#content-answer48").hide()		
	});

	$("#button-answer48").click(function(){
		$("#button-problem48").css("background-color", "inherit")
		$("#button-answer48").css("background-color", "#ddd")
		$("#content-answer48").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem49").css("background-color", "#ddd")
	$("#button-answer49").css("background-color", "inherit")
	$("#content-problem49").show()
	$("#content-answer49").hide()
		
	//If clicked
	$("#button-problem49").click(function(){
		$("#button-problem49").css("background-color", "#ddd")
		$("#button-answer49").css("background-color", "inherit")
		$("#content-problem49").show()
		$("#content-answer49").hide()		
	});

	$("#button-answer49").click(function(){
		$("#button-problem49").css("background-color", "inherit")
		$("#button-answer49").css("background-color", "#ddd")
		$("#content-answer49").show()
	});	

	//Problem 1
	//Initial
	$("#button-problem50").css("background-color", "#ddd")
	$("#button-answer50").css("background-color", "inherit")
	$("#content-problem50").show()
	$("#content-answer50").hide()
		
	//If clicked
	$("#button-problem50").click(function(){
		$("#button-problem50").css("background-color", "#ddd")
		$("#button-answer50").css("background-color", "inherit")
		$("#content-problem50").show()
		$("#content-answer50").hide()		
	});

	$("#button-answer50").click(function(){
		$("#button-problem50").css("background-color", "inherit")
		$("#button-answer50").css("background-color", "#ddd")
		$("#content-answer50").show()
	});	
			
	
});

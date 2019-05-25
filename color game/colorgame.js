var color=[ "rgb(255, 0, 0)",
            "rgb(0, 255, 0)",
            "rgb(0, 0, 255)",
            "rgb(225, 225, 0)",
            "rgb(225, 0, 225)",
            "rgb(0, 225, 225)"];
 var square= document.querySelectorAll(".square");
 var num = pickedColor();
 var colorChosen = color[num];
 var display= document.querySelector("#display");
 display.textContent= colorChosen;
 var bodyColor= document.querySelector("body");
 var p= document.querySelector("p");
 var blue= document.querySelector("#blue");
 //display.textContent= colorChosen;

 for (var i = 0; i < square.length; i++) 
 {
 	 square[i].style.backgroundColor= color[i];
 	 square[i].addEventListener("click",function()
 	 	{
 	 		
 	 		var clickedColor = this.style.backgroundColor;

 	 			
 	 			if (colorChosen === clickedColor) 
 	 			 	{
 	 			 		 for (var i = 0; i < square.length; i++) 
 	 			 		 {
 	 			 		 	square[i].style.backgroundColor=clickedColor;
 	 			 		 }
 	 			 		 p.textContent="well done!";
 	 			 		 blue.style.backgroundColor=clickedColor;
 	 			 		  
 	 			 	}
 	 			 else
 	 			 	{
 	 			 		this.style.backgroundColor= "#232323";
 	 			 		p.textContent="oops! try again";
 	 			 	}
 	 		 
 	 	});
 	 
 }
 function pickedColor()
 {
 	var p=Math.floor(Math.random()*6);
 	return p;
 }
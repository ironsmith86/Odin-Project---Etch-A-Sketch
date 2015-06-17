$(document).ready(function(){
        createGrid(64);
    
	   $('.block').on('mouseenter', function(){
		  $(this).css('background-color','#fff');
	   });
	   $('.block').on('mouseleave', function(){
		  $(this).fadeTo(600, 0);
	   });
    
//Clear or New Grid button
        $('.myButton').click(function (){
        var resetGrid = prompt('What size do you want the grid?');
        if(resetGrid > 0){
            createGrid(resetGrid);
        } else {
            alert('You need to give a numeric value!!');
            resetGrid();
        }
        
    });

});


//Clear button below

    

//Grid creation
                         
function createGrid(num){
	var blockNum = num * num;
	var blockSize = 600/num;
	for(var j=0; j < num; j++){
		for(var i=0; i < num; i++){
			$('<div />', {class: 'block',
				width: blockSize + 'px',
				height: blockSize + 'px'
			}).appendTo('#screen');
		}
	}
}



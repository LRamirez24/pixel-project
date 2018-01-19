// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

//function makeGrid() {


// Your code goes here!

//}




function makeGrid(width, height) {
	let grid;
	let pixelCanvas = $('#pixel_canvas');
	while (pixelCanvas.children().length) {
		pixelCanvas.empty();
	}
	for(let i = 0; i < height; i++) {
		grid += "<tr>";
		for (let h = 0; h < width; h++) {
			grid += "<td></td>";
		}
		grid += "</tr>";
	}
	pixelCanvas.html(grid);
	pixelCanvas.css("background-color", "#ffffff");
};

$(document).ready(function(){
	$('#submit-button').click(function(event) {
		let width = $('#input_width').val();
		let height = $('#input_height').val();
		event.preventDefault();
		makeGrid(width, height);
	});

	$('#pixel_canvas').click(function(event) {
		let color = $('#colorPicker').val();
		$(event.target).css('background-color', color);
	});
});



$('#removeBtn').click('.pixel_canvas',function (){
    $('td').toggleClass('grid_Button');
});



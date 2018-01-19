let Control = {

	makeGrid: function(width, height) {
		let grid;
		let pixelCanvas = %('#pixel_canvas');
		while (pixelCanvas.children().length) {
			pixelCanvas.empty();
		}
		for(let i = 0; i < this.height; i++) {
			grid += "<tr>";
			for (let h = 0; h < this.width; h++) {
				grid += "<td></td>";
			}
			grid += "</tr>";
		}
		pixelCanvas.html(grid);
		pixelCanvas.css("background-color", "#ffffff");
	};
}




let buttons = {
	Submit: $('#submit-button').click(function(event) {
		let width = $('#input_width').val();
		let height = $('#input_height').val();
		event.preventDefault();
		Control.makeGrid(width, height);
	}),
	Color: $('#pixel_canvas').click(function(event) {
		let colors = $('#colorPicker').val();
		$(event.target).css('background-color', colors);
	});
}


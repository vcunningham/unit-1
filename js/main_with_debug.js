//initialize function called when the script loads
function initialize(){
	cities();
};

//function to create a table with cities and their populations
function cities(){
	//define two arrays for cities and population
	var cityPop = [
		{ 
			city: 'Madison',
			population: 233209
		},
		{
			city: 'Milwaukee',
			population: 594833
		},
		{
			city: 'Green Bay',
			population: 104057
		},
		{
			city: 'Superior',
			population: 27244
		}
	];

	//append the table element to the div
	$("#mydiv").append("<table>");

	//append a header row to the table
	$("table").append("<tr>");
	
	//add the "City" and "Population" columns to the header row
	$("tr").append("<th>City</th><th>Population</th>");
	
	//loop to add a new row for each city
    for (var i = 0; i < cityPop.length; i++){
        //assign longer html strings to a variable
        var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
        //add the row's html string to the table
        $("table").append(rowHtml);
    };

	//set up the other parts of the table
    addColumns(cityPop);
    addEvents();
};

//adds a city size to each city in the table
function addColumns(cityPop){
	//for each
    $('tr').each(function(i){
		//first ele is the header
    	if (i == 0){
			$(this).append('<th>City Size</th>');
    	} else {

    		var citySize;
			//based on qualifiers set the city size
    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';

    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			
			//console.log(citySize);

    		$(this).append('<td>' + citySize + '</td>');
    	};
    });
};

//adds mouseover and click events
function addEvents(){
	//change color of the text on hover
	$('table').mouseover(function(){
		
		var color = "rgb(";
		
		//generate a random # in rgb range for each rgb val
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random;

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
			}
		};
		//change the css to match the generated color
		$(this).css('color', color);
	});
	
	//if clicked a dialog is triggered
	function clickme(){
		alert('Hey, you clicked me!');
	};

	$('table').on('click', clickme);
};

//call the initialize function when the document has loaded
$(document).ready(initialize);
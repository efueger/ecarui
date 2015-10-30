/* */
$(document).ready(function() {
	// JustGage
	var g = new JustGage({
		id: "speed",
		value: 67,
		min: 0,
		max: 4000,
		title: "",
		gaugeColor: 'transparent',
		gaugeWidthScale: 0.3,
		levelColors: ['#335']
	});	
	setInterval(function() {
		g.refresh(getRandomInt(g.config.value,g.config.value+30));
	}, 50);
		
});


 

// Google Chart API
google.load('visualization', '1', {packages: ['corechart', 'line']});
google.setOnLoadCallback(drawDataChart);
function drawDataChart() {
	/* DATA CHART KRAM */
	var dataChartOptions = {
		legend: {position: 'none'},
		colors: ['#335', '#b00'],
		chartArea: {height: '70%'},
		enableInteractivity: false,
		tooltip: {trigger: 'none'},
		animation: {
          duration: 500,
          easing: 'out',
          startup: true
        },
		hAxis: {
			gridlines: {count:2},
			title: "t in s"
		},
		vAxis: {gridlines: {count:0}}
	};
	var data = new google.visualization.DataTable();
	data.addColumn('number', 's');
	data.addColumn('number', 'VBat');

	data.addRows([
	[-15, 0],   [-14, 10],  [-13, 23],  [-12, 17],  [-11, 18],  [-10, 9],
	[-9, 11],  [-8, 27],  [-7, 33],  [-6, 40],  [-5, 32], [-4, 35],
	[-3, 30], [-2, 40], [-1, 42], [0, 47]
	]);	
	
	var chart = new google.visualization.LineChart(document.getElementById('dataChart'));
	
	$("#data").on('click', function() {
		$("#dataChartWrapper").toggleClass("r70").toggleClass("r100");
		$("#dataUpload").toggle();
		if (dataChartOptions.height === '70%') {
			dataChartOptions.chartArea.height = '100%';
		} else {
			dataChartOptions.chartArea.height = '70%';
		}
		chart.draw(data, dataChartOptions);
	});
	
	chart.draw(data, dataChartOptions);
}


/* MAP KRAM*/ 
var wedding = {lat: 52.544, lng: 13.353};

function initMap() {

  // Styles
  var styleArray = [
    {
      featureType: "all",
      stylers: [
       { saturation: -100 }
      ]
    },{
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        { hue: "#335" },
        { saturation: 100 }
      ]
    },{
      featureType: "poi.business",
      elementType: "labels",
      stylers: [
        { visibility: "off" }
      ]
    }
  ];

  // Create map
  var map = new google.maps.Map(document.getElementById('map'), {
    center: wedding,
    scrollwheel: false,
    disableDefaultUI: true,
    styles: styleArray,
    zoom: 14
  });
  
  // Create Marker
  var marker = new google.maps.Marker({position: wedding,
  map: map,
  icon: {
      path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
      scale: 3,
	  strokeColor: "#b00"
    },
  title: 'H'});
}
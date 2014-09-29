/*
----------------------------------
Author: 	Mehrdad Dastgir
Company: 	Tricor Senedi Sdn Bhd
Date: 		22 September 2014
----------------------------------
*/
$(
	function()
	{
		console.log('Tiger tiger burning bright, in the shadow of the night')
		drawElements()
	}
)

function drawElements()
{
	var html=[]

	html.push
	(
		// '<img src="img/branch.png" class="flora level1" id="branch" />',
		'<img src="img/leaf01.png" class="flora level2" id="leaf1" />',
		'<img src="img/leaf02.png" class="flora level2" id="leaf2" />',
		'<img src="img/leaf03.png" class="flora level2" id="leaf3" />',
		'<img src="img/leaf_tenacious.png" class="flora level2" id="leaf4" />',
		'<img src="img/leaf_actname2.png" class="flora level2" id="leaf5" />',
		'<img src="img/leaves_group01.png" class="flora" id="bush1" />',
		'<img src="img/leaves_group02.png" class="flora" id="bush2" />',
		'<img src="img/leaves_group03.png" class="flora" id="bush3" />',
		'<img src="img/logo_small.png" class="fauna" id="logoSmall" />',
		'<img src="img/tiger.png" class="fauna" id="tigerHead" />'
	)

	$('#loadHere').append
	(
		html.join(' ')
	)

	

	// $('#branch').animate
	// (
	// 	{
	// 		width: '60%'
	// 	},
	// 	{
	// 		duration: 1000,
	// 		queue: false
	// 	} 
	// )

	$('#leaf1').animate
	(
		{
			width: '7%'
		},
		{
			duration: 1400,
			queue: false
		} 
	)

	$('#leaf2').animate
	(
		{
			width: '40%'
		},
		{
			duration: 1800,
			queue: false
		} 
	)

	$('#leaf3').animate
	(
		{
			width: '10%'
		},
		{
			duration: 1200,
			queue: false
		} 
	)

	$('#leaf4').animate
	(
		{
			width: '35%'
		},
		{
			duration: 2600,
			queue: false
		} 
	)

	$('#leaf5').animate
	(
		{
			width: '29%'
		},
		{
			duration: 2200,
			queue: false
		} 
	)

	$('#bush1').animate
	(
		{
			width: '29%'
		},
		{
			duration: 1400,
			queue: false
		} 
	)

	$('#bush2').animate
	(
		{
			width: '30%'
		},
		{
			duration: 1800,
			queue: false
		} 
	)

	$('#bush3').animate
	(
		{
			width: '30%'
		},
		{
			duration: 1800,
			queue: false
		} 
	)

	$('#logoSmall').animate
	(
		{
			width: '30%'
		},
		{
			duration: 1800,
			queue: false
		} 
	)

	$('#tigerHead').animate
	(
		{
			right: 0
		},
		{
			duration: 4000,
			// queue: true
		} 
	)

	$('#logoSmall').click
	(
		function()
		{
			window.location='http://urbanscapes.com.my'
		}
	)

}
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
		'<img src="img/branch.png" class="flora" id="branch" />',
		'<img src="img/leaf01.png" class="flora" id="leaf1" />',
		'<img src="img/leaf02.png" class="flora" id="leaf2" />',
		'<img src="img/leaf03.png" class="flora" id="leaf3" />',
		'<img src="img/leaf04.png" class="flora" id="leaf4" />',
		'<img src="img/leaf05.png" class="flora" id="leaf5" />',
		'<img src="img/leaves_group01.png" class="flora" id="bush1" />',
		'<img src="img/leaves_group02.png" class="flora" id="bush2" />',
		'<img src="img/leaves_group03.png" class="flora" id="bush3" />',
		'<img src="img/tiger.png" class="fauna" id="tigerHead" />'
	)

	$('#loadHere').append
	(
		html.join(' ')
	)
}

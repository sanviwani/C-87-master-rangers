
// Create canvas variable
var Canvas= new fabric.Canvas("myCanvas");
 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	// to upload images
	fabric.Image.fromURL(get_image, function(img){
		block_image_object= img ;
		block_image_object.scaleToWidth(block_image_width);
		block_image_object.scaleToHeight(block_image_height);
		block_image_object.set({
			top:block_y , left:block_x
		});
Canvas.add(block_image_object);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		// upload red ranger
		block_x =10;
		new_image("rr1.png");
		console.log(" Key pressed is {r}")

	}
	if(keyPressed == '71')
	{
		block_x = 200;
		// upload green ranger
		new_image("gr.png");
		console.log("Key pressed is {g}")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		// upload yellow ranger
		new_image("yr.png");
		console.log("Key pressed is {y}")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		// upload pink ranger
		new_image("pr.png");
		console.log("Key pressed is {p}")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
	// upload blue ranger
	new_image("br.png");
	console.log("Key pressed is {b}")
	}
	
}


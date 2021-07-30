canvas = new fabric.Canvas('myCanvas')
player_x = 10;
player_y = 10;
var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("Hulk buster.jpg", function(Img) {
        player_object = Img;
        player_object.scaleToWidth(150)
        player_object.scaleToHeight(140)
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown)

function my_keydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    console.log(e.shiftKey)
    console.log(e.p)
    if (keypressed == '70') {
        new_image("ironman_face.jpg");
        console.log("f")
    }
    if (keypressed == '66') {
        new_image("spiderman_body.png");
        console.log("b")
    }
    if (keypressed == '76') {
        new_image("hulk_legs.png");
        console.log("l")
    }
    if (keypressed == '82') {
        new_image("spiderman_body.png");
        console.log("r")
    }
    if (keypressed == '38') {
        up();
        console.log("up")
    }
    if (keypressed == '40') {
        down();
        console.log("down")
    }
    if (keypressed == '37') {
        left();
        console.log("left")
    }
    if (keypressed == '39') {
        right();
        console.log("right")
    }
}

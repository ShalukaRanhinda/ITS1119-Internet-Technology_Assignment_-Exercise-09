$(document).ready(function () {
    console.log("Knight Rider Start");

   let colors = ['#FFFFFF', '#FFB3B3', '#FF4D4D', '#FF0000', '#FF4D4D', '#FFB3B3', '#FFFFFF'];
    
    let intervalId;
    let $boxes = $('.box');
    let totalBoxes = $boxes.length; 
    let trainLength = colors.length;
    
    
    let position = -trainLength; 
    let direction = 1;

    function updateQue() {

        $boxes.css('background-color', '#FFFFFF');

        for (let i = 0; i < trainLength; i++) {
            let boxIndex = position + i;

            if (boxIndex >= 0 && boxIndex < totalBoxes) {
                $($boxes[boxIndex]).css('background-color', colors[i]);
            }
        }

        position += direction;

        if (position > totalBoxes) {
            direction = -1;
            colors.reverse(); 
        } 

        else if (position < -trainLength) {
            direction = 1;
            colors.reverse(); 
        }
    }

    $('#btn-start').click(function () {
        if (!intervalId) {
            knightRiderAudio.play();
            intervalId = setInterval(updateQue, 100);
        }
    });

    $('#btn-end').click(function () {
        knightRiderAudio.pause();
        clearInterval(intervalId);
        intervalId = null;
    });

    let knightRiderAudio = new Audio('Assets/Knight Rider Theme (Sindirilla HOUSE remix) - SindirillaOfficial.mp3');
    knightRiderAudio.loop = true;
});
function colorchange(){
    var red  = document.getElementById('red').value;
    var green = document.getElementById('green').value;
    var blue  = document.getElementById('blue').value;

    document.querySelector('.color_box').style
    .backgroundColor = 'rgb('+red+','+green+','+blue+')';
    document.querySelector('.rgb').innerHTML = 'rgb('+red+','+green+','+blue+')';

}


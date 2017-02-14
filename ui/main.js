var button = document.getElementById('counter')
button.onclick = function (){
    
    // Rendering the variable in the current span
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
}
function myFunction() {
    document.body.style= 'background-color: red;';
    var elem = document.getElementById("demo");   
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
        if (pos == 500) {
        clearInterval(id);
        } else {
        pos++; 
        elem.style.left = pos + "px"; 
        }
    }
  }
function startTime() {

    const today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

        m = checkTime(m);
        s = checkTime(s);

        function checkTime(i) {

            if ( i < 10 ) { i = "0" + i};
            return i;
         } if ( h > 12 ) {
             h = h - 00;
             if ( h == 12) {
                 h = checkTime(h);
            document.getElementById ("time").innerHTML = h + ":" 
            + m + ":" + s + " AM";
        }else{
            h = checkTime(h);
            document.getElementById("time").innerHTML = h + ":"
            + m + ":" + s + " PM"
        }
}else {
    document.getElementById("time").innerHTML = h + ":" + 
    m + ":" + s + " AM";
    }
    setTimeout(startTime,1000);
}
    
    function myFunction() {
        console.log(myFunction);
        var x = document.getElementById("hide");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
      }
    



    

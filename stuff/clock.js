function time() {
    var d = new Date();
    var h = d.getHours();
    var m = d.getMinutes();
    var s = d.getSeconds();
  
    
    h = ("0" + h).slice(-2);
    m = ("0" + m).slice(-2);
    s = ("0" + s).slice(-2);


    document.getElementById("time").innerHTML = 
      h + ":" + m + ":" + s

    setTimeout(time, 0);
}

time()

function date() {
    var today = date.toLocaleString("en", {weekday: "long"});
    var day = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    year = ("" + year).slice(2);
    dw

    document.getElementById("date").innerHTML =
    today + ", " + month + "/" + day + "/" + year

    setTimeout(date, 0);
}

date()
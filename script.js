var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function time(){
    var d = new Date();
    var theDate = d.getDate() <10? "0"+d.getDate() :d.getDate() ;
    var month = d.getMonth() <10? "0"+d.getMonth() :d.getMonth() 
    var year = d.getFullYear();
    var finalDate = theDate+"/"+month+"/"+year;
    var s = d.getSeconds();
    var m = d.getMinutes();
    var h = d.getHours();
    document.getElementById("startDateTime").innerText=days[d.getDay()]+" "+finalDate+" "+ h + ":" + m + ":" + s;
}

setInterval(time,999);   // 999 instead of 1000 because time() takes about 1 millisecond to complete
  


function openTab1(evt1, TabNum) {
    var j, tabcontent1, tablinks1;
    tabcontent1 = document.getElementsByClassName("tabcontent1");
    for (j = 0; j < tabcontent1.length; j++) {
        tabcontent1[j].style.display = "none";
    }
    tablinks1 = document.getElementsByClassName("tablinks1");
    for (j = 0; j < tablinks1.length; j++) {
        tablinks1[j].className = tablinks1[j].className.replace(" active", "");
    }
    document.getElementById(TabNum).style.display = "block";
    evt1.currentTarget.className += " active";

}
document.getElementById("defaultopen2").click();

function openTab2(evt2, Tab2Num) {
    var k, tabcontent2, tablinks2;
    tabcontent2 = document.getElementsByClassName("tabcontent2");
    for (k = 0; k < tabcontent2.length; k++) {
        tabcontent2[k].style.display = "none";
    }
    tablinks2 = document.getElementsByClassName("tablinks2");
    for (k = 0; k < tablinks2.length; k++) {
        tablinks2[k].className = tablinks2[k].className.replace(" active", "");
    }
    document.getElementById(Tab2Num).style.display = "block";
    evt2.currentTarget.className += " active";

}
document.getElementById("defaultopen3").click();
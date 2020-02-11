var myWindow;
n = function () {
    var num = Math.floor(Math.random() * 10);
    var width = num * 1.5;
    var height = num * 1.5;
    myWindow = window.open("",
        "", '${width},${height}');
    for (var i = 0; i < 200; i++) {
        myWindow.moveTo(100 + i * Math.floor(Math.random()), 100 + 1 / 20);
    }
}

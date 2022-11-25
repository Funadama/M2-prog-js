class App
{
    runApplication()
    {
        console.log("Hello World!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        g.beginPath()
        g.moveTo(30,10);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.lineTo(30,10);
        g.moveTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.lineTo(80,30);
        g.lineTo(70,20);
        g.moveTo(80,30);
        g.lineTo(80,50);
        g.lineTo(60,60);
        g.moveTo(25,35);
        g.lineTo(55,42); //
        g.lineTo(55,55);
        g.lineTo(25,47);
        g.lineTo(25,35);
        g.moveTo(0,0);
        g.closePath();
        g.stroke();
        console.log(canvas)
    }
}

let app = new App();
app.runApplication();
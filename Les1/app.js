class App
{
    runApplication()
    {
        console.log("Hello World!");
        let canvas = document.getElementById("canvasId");
        let g = canvas.getContext("2d");
        this.tekenhuis(g, 0, 0, 2)
        this.tekenhuis(g, 350, 0, 1.6)
        this.Kerstboom(g, 200, 100)
        this.Kerstboom(g, 300, 100)
        this.Kerstboom(g, 400, 100)
        this.Kerstboom(g, 500, 100)
        console.log(canvas)
    }

    tekenhuis(g, x, y, scale)
    {
        g.beginPath()
        g.moveTo((30 + x) * scale,(10 + y) * scale);
        g.lineTo((70 + x) * scale,(20 + y) * scale);
        g.lineTo((60 + x) * scale,(40 + y) * scale);
        g.lineTo((20 + x) * scale,(30 + y) * scale);
        g.lineTo((30 + x) * scale,(10 + y) * scale);
        g.moveTo((20 + x) * scale,(30 + y) * scale);
        g.lineTo((20 + x) * scale,(50 + y) * scale);
        g.lineTo((60 + x) * scale,(60 + y) * scale);
        g.lineTo((60 + x) * scale,(40 + y) * scale);
        g.lineTo((80 + x) * scale,(30 + y) * scale);
        g.lineTo((70 + x) * scale,(20 + y) * scale);
        g.moveTo((80 + x) * scale,(30 + y) * scale);
        g.lineTo((80 + x) * scale,(50 + y) * scale);
        g.lineTo((60 + x) * scale,(60 + y) * scale);
        g.moveTo((25 + x) * scale,(35 + y) * scale);
        g.lineTo((55 + x) * scale,(42 + y) * scale); 
        g.lineTo((55 + x) * scale,(55 + y) * scale);
        g.lineTo((25 + x) * scale,(47 + y) * scale);
        g.lineTo((25 + x) * scale,(35 + y) * scale);
        g.moveTo((0 + x) * scale,(0 + y) * scale);
        g.closePath();
        g.stroke();
    }

    
    Kerstboom(g, x, y,)
    {
        g.beginPath()
        g.fillStyle = "green";
        g.moveTo(-25 + x,0 + y);
        g.lineTo(25 + x,0 + y);
        g.lineTo(0 + x,-75 + y);
        g.lineTo(-25 + x,0 + y);
        g.fill();
        g.closePath();
        g.stroke();
        g.fillStyle = "brown";
        g.beginPath()
        g.moveTo(-10 + x,0 + y);
        g.lineTo(10 + x,0 + y);
        g.lineTo(10 + x,20 + y);
        g.lineTo(-10 + x,20 + y);
        g.lineTo(-10 + x,0 + y);
        g.fill();
        g.closePath();
        g.stroke();
        this.kerstball(g, x, y, 10)
    }

    kerstball(g, x3, y3, repeat)
    {
        for (let step = 0; step < repeat; step++) 
        {
            let x = (Math.random() * 50);
            let x2 = 0
            if (x > 25)
            {
                x2 = x - 25;
                x2 = 25 - x2;
                x2 = x2 / 25;
                x2 = x2 * 75;
            }
            else
            {
                x2 = x / 25;
                x2 = x2 * 75;
            }
            let y = -1 * (Math.random() * x2);
            g.beginPath()
            g.fillStyle = "#" + Math.floor(Math.random()*16777215).toString(16);
            g.arc(x3 + x - 25,y3 + y,5,0,Math.PI*2);
            g.fill();
            g.closePath();
            g.stroke();
        }
        
    }
}

let app = new App();
app.runApplication();
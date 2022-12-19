

class App
{
    runApplication()
    {
        mario()
        let bwahh = bwah() 
        console.log(bwahh)
        let x = addnum(4, 3);
        console.log(x)

        function mario() 
        {
           console.log("Mario!!")
        }
        function bwah() 
        {
           return("BWAHAHA!!!")
        }
        function addnum(first, second) 
        {
            return(first + second)
        }
    }
}

let app = new App();
app.runApplication();
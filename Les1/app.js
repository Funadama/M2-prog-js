class App
{
    runApplication()
    {
        console.log("Hello world!");
        let appNaam = ("Monkey");
        let versienummer = (0.1);
        let versiedatum = ("21/11/2022");
        let autheur = ("Funadama");
        let copyright = ("Funadama Studios");
        let distributeur = ("Funadama");
        let darkmode = (false);
        console.log(appNaam, versienummer, versiedatum, autheur, copyright, distributeur, darkmode)
    }
}

let app = new App();
app.runApplication();
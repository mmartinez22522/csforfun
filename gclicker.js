var score = 0;
var numsenor = 0;
var numfarm = 0;
var infla = 0;
var totalbot = 0;
//var infl = 9;
function buy(c)
{
if(c == 'senor')
{
    if(score > 9 + infla)
    {
        score = score - 10;
        document.getElementById("uscore").innerHTML = "Tienes " + score + " galletas";
        numsenor++;
        totalbot++;
        document.getElementById("senor").innerHTML = "Un Senor: "+numsenor+" Senors";
        if(numsenor > 2)
        {
            infla = totalbot*2;
            var i = infla + 9;
            document.getElementById("csenor").innerHTML = "Cost: " + i + " galletas"; 
        }
        autosenor();
    }
}
if(c == 'farm')
{
    if(score > 49)
    {
        score = score - 50;
        document.getElementById("uscore").innerHTML = "Tienes " + score + " galletas";
        numfarm++;
        totalbot++;
        document.getElementById("farm").innerHTML = "Un Farm: "+numfarm+" Farms";
        if(numfarm > 2)
        {
            infla = totalbot*2;
            var i = infla + 49;
            document.getElementById("cfarm").innerHTML = "Cost: " + i + " galletas";
        }
        autofarm();
    }
}
}
function umclick()
{
    score++;
    //alert(score);
    document.getElementById("uscore").innerHTML = "Tienes " + score + " galletas";
}
function autosenor()
{
    score = score + numsenor;
    document.getElementById("uscore").innerHTML = "Tienes " + score + " galletas";
    setTimeout(autosenor,1000);
}
function autofarm()
{
    score = score + numfarm*2;
    document.getElementById("uscore").innerHTML = "Tienes " + score + " galletas";
    setTimeout(autofarm,5000);
}
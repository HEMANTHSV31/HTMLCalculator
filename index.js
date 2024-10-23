const display2=document.getElementById("display1");
function display(input)
{
   display2.value+=input;
}
function cleardisplay()
{
    display2.value="";
}
function clearentry()
{
    display2.value = display2.value.slice(0, -1);
}
function calculate()
{
    try{
        display2.value=eval(display2.value)
    }
    catch
    {
        display2.value="Error";
    }
}
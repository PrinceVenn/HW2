function color1()
{
if(getColor()!= "blue") {
up();
up();
up();
} else {     
if (getColor()=="blue")   
down();
down();
down();
}
}
    
function color2()
{
if(getColor()!= "blue") {
left();
up();
} else {
if (getColor()== "blue")
right();
up();
}
}         
right();
color1();
color2();
down();

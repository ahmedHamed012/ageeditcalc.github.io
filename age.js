var bd = document.getElementById("base_day"),
bm = document.getElementById("base_month"),
by = document.getElementById("base_year"),
output = document.getElementById("ot"),
sub = document.getElementById("sub");
var currd = new Date();
var cd = currd.getDate(),
cm = currd.getMonth() + 1,
cy = currd.getFullYear(); 
var marr = [31,28,31,30,31,30,31,31,30,31,30,31],
c = 0;
sub.onclick = function()
{
    if(bd.value < 1 || bd.value > 31 || bm.value < 1 || bm.value > 12 || by.value < 1800)
    {
        output.innerHTML = "Please! Check Yourr input You may insert invalid data";
    }
    else
    {
    var ay = 0, ad = 0, am = 0;
if(cm > bm.value && cd <= bd.value)
{
ay = cy - by.value;  
for (var i = bd.value;i < marr[cm-3];i++)
{
c++;
}  
ad = c + cd ;
am = ((cm-1) - bm.value);
}
else if (cm > bm.value && cd >= bd.value)
{
ad = cd - bd.value;
am = (cm - bm.value);
ay = cy - by.value; 
}
else if (cm < bm.value && cd <= bd.value)
{
ay = (cy - by.value)-1;
am = (12-bm.value) + (cm-1);
ad = (marr[cm-1] - bd.value) + cd ;
}
else if (cm < bm.value && cd >= bd.value)
{
ay = (cy - by.value)-1;
am = (12-bm.value)+(cm);
ad = cd - bd.value;
}
else if(cm == bm.value && cd == bd.value)
{
    ay = cy - by.value;
    am = 0;
    ad = 0;
}
if (am === 12 )
{
    ay++;
    am = 0;
}
if(ad === 31)
{
am++;
ad = 0;
}
output.innerHTML = "Your Age is : "+"<br>"+ay+" Years "+ am+" Months "+ad+" Days ";
}
}
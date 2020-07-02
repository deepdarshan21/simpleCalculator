var ans=0;
var output="";
function input_opr(opr)
{
    if(opr=="del")
    {
        output=output.slice(0,-1);
    }
    else if(opr=="C")
    {
        output=0;
    }
    else
    {
        output+=opr;
    }
    if(output=="")
    {
        output=0;
    }
    document.getElementById("result").innerHTML=output;
    if(opr=="C")
    {
        output="";
    }
}
function input_no(n)
{
    output+=n;
    ans+=n;
    document.getElementById("result").innerHTML=output;
}
console.log(ans)
function output()
{
    document.getElementById("result").innerHTML=ans;
}
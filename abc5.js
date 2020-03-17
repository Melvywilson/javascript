<html>
<body bgcolor=silver>
<pre>
<script>
function display()
{
document.writeln("<h1><font color=blue><center><u>*CUSTOMER</u><u>DETAILS*</u></center></font></h1>");
document.writeln("<h3><font color=aqua>NAME:</font>"+this.name);
document.writeln("<h3><font color=aqua>ADDRESS:</font>"+this.address);
document.writeln("<h3><font color=aqua>SEX:</font>"+this.sex);
document.writeln("<h3><font color=aqua>AGE:</font>"+this.age);
document.writeln("<h3><font color=aqua>ROOM TYPE:</font>"+this.rt);
document.writeln("<h3><font color=aqua>MODE OF PAYMENT OF THE CUSTOMER:</font>"+this.mop);
}
function customer()
{
alert("cust");
this.name=prompt("Enter customer's name");
this.address=prompt("Enter the "+this.name+"'s address");
this.sex=prompt("Enter "+this.name+"'s sex Female/Male");
this.age=prompt("Enter "+this.name+"'s age");
this.rt=prompt("Enter "+this.name+"'s Romm Type Single/Double");
this.mop=prompt("Enter "+this.name+"'s Mode of Payment-cash Cheque/Card");
this.display=display;
}
cust=new customer();
</script>
</body>
</pre>
<body>
<script>
cust.display();
</script>
</body>
</html>

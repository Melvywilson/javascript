
<html><body bgcolor=red>
<body>
<form>
<input type="button" value="go back" name="go" onClick="history.back();">
<input type="button" value="length" name="lgth" onClick="form.display.value=history.length;">
<input type="text" name="display">
</form>
</body>
</html>
10.
<html>
<head>
<center>
<h3>Second Program</h3>
<script type="text/javascript">
function invoke()
{
un=document.f1.n1.value;
if(un!="")
{
	document.getElementById("b1").disabled=false;
}
}

function validate()
{
if(document.getElementById("n1").value=="")
{
alert('please enter your name');
document.getElementById("n1").focus();
return (true);
}
f=/^[a-zA-Z]+[0-9]+$/;
g=document.getElementById("n1").value;
if (f.test(g) == false)
{
alert('User name should contain alphanumeric characters and not starts with a Number.');
return (false);
}
//}
if(document.getElementById("e1").value=="")
{
alert('please enter your emailid');
document.getElementById("e1").focus();
return (false);
}
var a=document.getElementById("e1").value;
var b=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if (b.test(a) == false)
{
alert('Invalid Email Address');
document.getElementById("e1").focus();
return (false);
}
len=document.f1.p1.value.length;

if(document.getElementById("p1").value=="")
{
alert('please enter your password');
document.getElementById("p1").focus();
return (false);
}
if((len<6)||(len>10))
{
alert('Password should have minimum 6 characters and maximum of 10 characters.');
document.getElementById("p1").focus();
return (false);
}
if(document.getElementById("p2").value=="")
{
alert('please enter your Reset password');
document.getElementById("p2").focus();
return (false);
}
var c=document.getElementById("p1").value;
var d=document.getElementById("p2").value;
var e=document.getElementById("n1").value;
if (c!=d)
{
alert('password and repeat password should be the same');
return (false);
}
//}
}
</script>
</head>
<body>
<form name=f1 >
<table border=5 cellspacing=10 cellpadding=10 bordercolor=blue bordercolordark=red>
<tr>
<th><b>username:</th>
<th><input type=text id=n1 ></th>
</tr>
<tr>
<td><b>Email:</td>
<td><input type=text id=e1></td>
</tr>
<tr>
<td><b>password:</td>
<td><input type=password name=p1 id=p1></td>
</tr>
<tr>
<td><b>Repeat password:</td>
<td><input type=password id=p2 oninput="invoke()">
</td>
</tr>
<tr>
<td><b>Country:</td>
<td><select>
<option value="india" >India</option>
<option value="Sri lanka" >Sri Lanka</option>
<option value="Bangladseh" >Bangladesh</option>
<option value="pakistan" >Pakistan</option>
<option value="china" >China</option>
</td>
</tr>
<tr>
<td><b>Anti-spam</td>
<td><input type=text name=anti2 id=anti2 placeholder="Simply remove this text" ReadOnly=true>
</td>
</tr>
<tr>
<td><input type=button id=b1 value=Register onclick="validate()" disabled></td>

</tr>
</table>
</form>
</body>

</center>
</html>

nested class

package basicjava;

 class Outer {
private static String message="HelloWorld";
//Static nested class
private static class MessagePrinter{
	//only static member of outer class is directly accessible in nested static class
	public void printMessage()
	{
		//compile time error if message field is not static
		System.out.println("Message from nested static class:"+message);
	}
}
//non static nested class- also called inner class
private class Inner
{
	//both static and non static members of the outer class is accessible in the inner class
	public void display()
	{
	System.out.println("Message from non static nested or Ineer class:"+message);	
	}
}
//How to create instance of static and non static nested class
public static void main(String ...args)
{
	//creating instance of nested static class
	Outer.MessagePrinter printer=new Outer.MessagePrinter();
	//calling non static method of nested static class
	printer.printMessage();
	//creating instance of non static nested class or Inner class
	//in order to create instance of inner classyou need an outer class instance
	Outer outer=new Outer();//outer class instance for creating non static nested class
	Outer.Inner inner=outer.new Inner();
	//calling non static method for inner class
	inner.display();
	//we can also combine above two steps in one step to create instance of inner class
	Outer.Inner nonStaticIner=new Outer().new Inner();
	//similarly you can now call Inner class method
	nonStaticIner.display();
	
}
}

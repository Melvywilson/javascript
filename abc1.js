<html><head>
<script>
function communicate(){
alert("Hello");
s=prompt("What is your name","xyz");
b=confirm("Do you want to see your name displayed in red color");
if(b){
var text=document.createTextNode(s);
document.body.appendChild(text);
document.body.setAttribute("text","red");
}}
</script>
</head>
<body onUnload="alert('Bye')">
<script>communicate()</script>
</body></html>

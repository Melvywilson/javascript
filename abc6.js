<html>
<script language=Javascript>
var i=0,a;
var id;
a=new Array();
a[0]="pic1.png";
a[1]="pic2.jpg";
a[2]="pic3.jpg";
a[3]="pic4.jpg";
a[4]="pic5.jpg";
function starts()
{
document.img1.src=a[i];
i++;
id=setTimeout("starts()",1000);
if(i==5)
i=0;
}
function stop()
{
clearTimeout(id);
}
</script>
<img name=img1 src="pic1.png" height=350 width=350>
<form>
<input type=button name=t1 value="Start" onClick="starts();">
<input type=button name=t2 value="Stop" onClick="stop();">
</form>
</html>

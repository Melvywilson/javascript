<html>
<head>
<script>
function calculate(form)
{
form.square.value=form.entry.value*form.entry.value
form.cube.value=form.entry.value*form.entry.value*form.entry.value
}
</script>
</head>
<body onLoad="var name=prompt('Enter your name','Name');
alert('Hai!!!!'+name);">
<FORM METHOD=POST>
Enter a number:<INPUT TYPE="text" NAME="entry" VALUE="0" onChange="calculate(this.form);">
<br>
square of number entered:<INPUT TYPE="text" NAME="square" VALUE="0" onFocus="this.blur();">
<br>
Cube of number Entered:<INPUT TYPR="text" NAME="cube" VALUE="0" onFocus="this.blur():">
</form>
</body>
</html>

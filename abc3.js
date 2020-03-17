<html>
<body>
<script language="JavaScript">
function win()
{
newwin=open
("","'New_window","width=200,height=200,resizable=yes,scrollbars=1,menubar=1,status=yes");
newwin.document.writeln("<h1>This is a new Window...</h1>");
newwin.document.writeln("<h3>Hello...</h3>");
newwin.document.close();
}
win();
window.close();
</script>
Do you see a window open up with no toolbar,menubar?
</body>
</html>

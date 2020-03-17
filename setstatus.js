<html><head>
<script>
function setStatus(x){
status=x;
}
</script>
<head>
<body onLoad="defaultStatus='welcome'"onBlur="setStatus('OUT')"onFocus="setStatus('ON')">
Change the focus from in and out of the window and watch the message in the status bar
</body>
</html>

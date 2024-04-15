<!DOCTYPE html>
<html>
    <head>
        <title>JavaScript</title>
    </head>
<body>


<h2>
    Hello World Project
</h2>

<script>
    let txt = 'Hello World!';  // The alert output text (string) will be changed if you change this
</script>

<p>"Hello World!", per default, will be shown as an alert once you press the button.</p>

<h4>
    This is the current text = 
    <script>
    document.write(txt);
    </script>    
</h4>

<button type="button" onclick="alert(txt)">Press Me!</button>

</body>
</html> 

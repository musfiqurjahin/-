document.getElementById('run-button').addEventListener('click', function() {
    var code = document.getElementById('code-editor').value;
    var output = document.getElementById('output');
    output.style.display = 'block'; // Show the output
    output.contentWindow.document.open();
    output.contentWindow.document.write(code);
    output.contentWindow.document.close();
});
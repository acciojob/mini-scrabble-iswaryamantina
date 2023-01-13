var textArea = document.getElementById('evaluatedText');
var count = document.getElementById('letterCount');

textArea.addEventListener('keyup', function(){
    let text = textArea.value;

    count.innerText = text.length;
})


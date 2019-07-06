function textSubmission() {
    var text = document.getElementById("textInput").value
    parseSubmission(text)
}

function parseSubmission(text) {
    var result = []
    for (i = 0; i < text.length; i++) {
        if (text.charAt(i) === '\n') {
            result.push(" ")
        }
        else {
            result.push(text.charAt(i))
        }
    }    
    document.getElementById("textOutput").value = result.join("");

}
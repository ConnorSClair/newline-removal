function textSubmission() {
    var text = document.getElementById("textInput").value
    parseSubmission(text)
}
/**
 * takes a text string and replaces single newlines with spaces and
 * multiple newlines with two newlines (a paragraph)
 * @param {*} text 
 */
function parseSubmission(text) {
    var result = []
    var i = 0;
    var count;
    while (i < text.length) {
        if (text.charAt(i) === '\n') {
            count = parseParagraph(text, i)
            if (count === 1) {
                result.push(" ")
            } else {
                result.push("\n\n")
            }
            i += count
        } else {
            result.push(text.charAt(i))
            i += 1
        }
    }
    document.getElementById("textOutput").value = result.join("");
}

function parseParagraph(text, i) {
    var count = 0
    while (text.charAt(i) === '\n') {
        i += 1
        count += 1
    }
    return count
}

function parseSubmissionOld(text) {
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
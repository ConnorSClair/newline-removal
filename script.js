function textSubmission() {
    var text = document.getElementById("textInput").value
    parseSubmission(text)
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


/**
 * boop app tap
 * loop cap 
 * 
 * snoop
 * boop app tap\nloop cap\n\n snoop
 * -> 
 * 
 * boop app tap loop cap
 * 
 * snoop
 * -
 * loop cap
 * 
 * 
 * 
 * snoop 
 * ->
 * loop cap 
 * 
 * snoop
 * 
 * or 
 * loop cap\n\n\n\nsnoop -> loop cap\n\nsnoop
 */
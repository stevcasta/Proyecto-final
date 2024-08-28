function encryptText() {
    const inputText = document.getElementById('input-text').value;
    const outputText = inputText
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
    document.getElementById('output-text').value = outputText;
}

function decryptText() {
    const inputText = document.getElementById('input-text').value;
    const outputText = inputText
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
    document.getElementById('output-text').value = outputText;
}

function copyText() {
    const outputTextArea = document.getElementById('output-text');
    outputTextArea.select();
    document.execCommand('copy');
}

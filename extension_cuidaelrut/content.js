var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;
            var replacedText = text
                .replace('RUT', '#cuidaelRUT ⚠️')
                .replace('R.U.T', '#cuidaelRUT ⚠️')
                .replace('R.U.N', '#cuidaelRUT ⚠️')
                .replace('Número de documento', '#cuidaelRUT ⚠️')
                .replace('Cédula de identidad', '#cuidaelRUT ⚠️');


            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
                element.style.background = "#ff4444";
                element.style.color = "#ffffff";
                element.style.padding = "2px 8px";
                element.style.borderRadius = "5px";

            } 
        }
    }
}
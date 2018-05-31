(function() { // don't leak
    var elm = document.getElementById("love"), // get the select
        df = document.createDocumentFragment(); // create a document fragment to hold the options while we create them
    for (var i = 0; i <= 10; i++) { // loop, i like 42.
        var option = document.createElement("option"); // create the option element
        option.value = i; // set the value property
        option.appendChild(document.createTextNode(i)); // set the textContent in a safe way.
        df.appendChild(option); // append the option to the document fragment
    }
    elm.appendChild(df); // append the document fragment to the DOM. this is the better way rather than setting innerHTML a bunch of times (or even once with a long string)
}());



document.getElementById("button").addEventListener("click", check);

function check() {
    var addVal = ["Sokolov 56, Holon", "Jerusalem 9, Tel Aviv", "Ben-Gurion 100, Eilat", "Rothschild 70, Holon"];
    var entryAdd=document.getElementById("add");
    for(var i=0; i<4; i++)
    {
        if(addVal[i]==entryAdd.value) {
            break;
        }
    }
    if (i==4)
    {
        var text=document.createElement("h4");
        var parent=document.getElementById("frm");
        document.getElementById("frm").appendChild(text);
        parent.insertBefore(text, parent.children[16]);
        text.style.fontSize="14px";
        text.style.color="red";
        text.innerHTML="this address is not in the list"
    }
}




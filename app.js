var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL= "https://api.funtranslations.com/translate/shakespeare.json"


function getTranslationalUrl(input) {

    return serverURL + "?" + "text=" + input


}


function errorHandler(error) {
    console.log("error occured", error);
    alert("something wrong !try after some time")
}


function clickEventHandler() {
    var inputText = txtInput.value;


    fetch(getTranslationalUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;

        })

        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler);


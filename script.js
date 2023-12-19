// Replace 'yourJsonFile.json' with the actual path to your JSON file
const jsonFilePath = 'quotes.json';

// Fetch the JSON file
fetch(jsonFilePath)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        return response.json();
    })
    .then(data => {
        // Access the "Sheet1" array in the JSON data
        document.querySelector("button").addEventListener('click',function(){

            randomquote(data);
        })
        randomquote(data);  
        



    })
    .catch(error => {
        console.error('Error fetching the JSON file:', error);
    });

function randomquote(data) {
    var len = data['Sheet1'].length;
    const randomIndex = Math.floor(Math.random() *len);

    var quote=data['Sheet1'][randomIndex]['Quote '];
    var author=data['Sheet1'][randomIndex]['Author'];
 

    document.getElementById("ok-quote").innerHTML=quote;
    document.getElementById("ok-author").innerHTML="- "+author;


}



function myFunction() {
    // Get the text field
    var copyText = document.getElementById("cta-one");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

import checkForName from './nameChecker';

function handleSubmit(event) {
    event.preventDefault();
    const formText = document.getElementById('name').value;
    if (Client.checkForName(formText)) {
        fetch('/usertext', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({formText})
        })
        .then(res => {
          console.log(res);
          return res.json();
        })
        .then(function (response) {
              document.getElementById('subjectivity').innerHTML = "Subjectivity: " + response.subjectivity;
              document.getElementById('agreement').innerHTML = "Agreement: " + response.agreement;
              document.getElementById('confidence').innerHTML = "Confidence: " + response.confidence;
              document.getElementById('irony').innerHTML = "Irony: " + response.irony;
        })
    } else {
        alert ('Enter a valid URL');
    };
}

export { handleSubmit }

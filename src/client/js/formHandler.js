function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    console.log("::: Form Submitted :::")

    if (Client.checkForName(formText)){
      getSentiment('/add', formText).then(function(data){
      document.getElementById('subjectivity').innerHTML = data.subjectivity;
      document.getElementById('agreement').innerHTML = data.agreement;
      document.getElementById('confidence').innerHTML = data.confidence;
      document.getElementById('irony').innerHTML = data.irony;
      });
    }
}


const getSentiment = async(url, userURL) => {
    console.log('user url: ', userURL);
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userURL})
    });
    try {
        const resData = await res.json();
        return resData;
    } catch(error) {
        console.log('error', error);
    }
}


export { handleSubmit }

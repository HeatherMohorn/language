function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    Client.checkURL(formText)

    console.log("::: Form Submitted :::")

    //const request = '{baseURL}key=${API_KEY}&url=${formText}&lang=en'




    if(Client.checkURL(formText)){
      fetch('http://localhost:8081/data',{
        method: 'POST',
        credentials: 'same-origin',
        redirect: "follow",
        mode: "cors",
        cache: "no-cache",
        headers: {
            'Content-Type': 'application/json',
        },
        //stringify text retrieved
        body: JSON.stringify({formText : formText}),
    })
      .then(res => res.json())
      .then(function(res) {
        document.getElementById('results').innerHTML = res.agreement
    })
  }
  else{
    alert("not valid")
  };

}

export { handleSubmit }

function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    //credit for url checker with REGEX
    //https://stackoverflow.com/questions/1701898/how-to-detect-whether-a-string-is-in-url-format-using-javascript
    const urlCheck = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/

    if(urlCheck.test(inputText)) {
        return true;
    } else {
        alert('Invalid url');
        return false;
    }
}


export { checkForName }

function sendRequest(url, httpMethod, bodyContent){

    var responsePromise;

    if(httpMethod == "GET"){
        responsePromise = fetch(url);
    } else if (httpMethod == "POST"){
        responsePromise = fetch(url,  
        {method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
         body : bodyContent 
        });
    } else {
        ErrorHandler.instance(new Error("Invalid htp method : " + httpMethod)).handle("Please fix code");
    }
    return responsePromise;

}

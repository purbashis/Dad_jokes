const btnEl =document. getElementById("btn"); // using btnEl for get the the id of button from html doc  
const jokeEl =document.getElementById("joke");
const apikey = "cnpHzxJ4BVwS8PwqSYXm7w==3ZQIbzJCgKMDVWjB"; // api key 

const options = {
    method : "GET", // get method 
    headers : {
        "X-Api-Key":apikey,
    },
};
const apiURL ="https://api.api-ninjas.com/v1/dadjokes?limit=1" //api fetch 
async function getJoke(){
try {
    jokeEl.innerText="Updating...";
    btnEl.disabled = true;
    btnEl.innerText="Loading...";
    const response =await fetch(apiURL,options);
    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText="Tell me a joke";
    //console.log(data[0].joke);
    jokeEl.innerText =data[0].joke;
} catch (error) {
    jokeEl.innerText ="An error happened ,try again latter .";
    btnEl.disabled = false;
    btnEl.innerText="Tell me a joke";
    console.log(error)
    
}






  
}


btnEl.addEventListener("click",getJoke) // eventListener use for make it responsive or doing an event 
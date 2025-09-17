window.onload = function WELCOME() {
    this.alert("WELCOME");
};

document.getElementById("year").textContent =  new Date().getFullYear();
function checkstock(id){
    if(id== "in stock"){
        alert("Product is available");
    }
    else{
        alert("Product is not available");
    }
}
function validateForm(){
    let name = document.forms["my form"]["name"].value;
    let email=document.forms["my form"]["email"].value;
    if(name=="" ||email==""){
        alert("All fields must be filled out");
        return false;
    }

}
function sendMessage(){
    let input=document.getElementById("user-input").value.toLowerCase();
    let chatLog = document.getElementById("chat-log");
    
let userMsg = document.createElement("p");
userMsg.textContent = "You: " + input;
chatLog.appendChild(userMsg);

let botResponse = getBotResponse(input);
let botMSG = document.createElement("p");
botMSG.textContent = `Bot:${botResponse}`;
chatLog.appendChild(botMSG);

document.getElementById("user-input").value= "";
chatLog.scrollTop = chatLog.scrollHeight;
}
function getBotResponse(input){
    if (input.includes("hello") || input.includes("hi")){
        return "HI! How can i help you?";

    } else if(input.includes("how are you")){
        return "I'm great and what about you";
    }else if (input.includes("help")){
        return "How I may help you?;"
    }
    else{
        return "Sorry!I am not sure"
    }
}
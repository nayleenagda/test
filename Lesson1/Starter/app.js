var button= document.getElementById("test");

button.addEventListener("click",function(){
    console.log("clicked");
    var li=document.createElement("li");
    li.appendChild(document.createTextNode("testing"));
    
})
const text=document.querySelector(".btn");

text.addEventListener("click",function(){
    document.querySelector(".output").textContent+='The predicted value of house is: '+prediction_text;
})
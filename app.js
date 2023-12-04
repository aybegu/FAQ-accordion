let questions = document.getElementsByClassName('question');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<questions.length; i++){
    questions[i].addEventListener('click', () =>{
        
        if(parseInt(contentDiv[i].style.height)
        != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
        }
    });
}
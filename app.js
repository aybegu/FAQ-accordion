let questions = document.getElementsByClassName('question');
let contentDiv = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for(let i=0; i<questions.length; i++){
    questions[i].addEventListener('click', () =>{
        
        if(parseInt(contentDiv[i].style.height)
        != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            icons[i].classList.remove('plus');
            icons[i].classList.add('minus-icon');
        }
        else{
            contentDiv[i].style.height="0px";
            icons[i].classList.remove('minus-icon');
            icons[i].classList.add('plus');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height="0px";
                icons[j].classList.remove('minus-icon');
                icons[j].classList.add('plus');
            }
        }
    });
}
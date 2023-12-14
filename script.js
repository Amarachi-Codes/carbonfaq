document.addEventListener("DOMContentLoaded",function(){
const questions= document.querySelectorAll('.questions');
questions.forEach(question=>{
    question.addEventListener("click", function(){
        const toggleIcon = this.querySelector('.toggleIcon');
        const answer = this.nextElementSibling;
        if(answer.style.display === 'none'){
            answer.style.display = 'block'
            toggleIcon.textContent = "-"
        }else{
            answer.style.display = 'none'
            toggleIcon.textContent ='+'
        }
    })
})
})
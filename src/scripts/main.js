document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('[data-faq-question]'); 

    for (let i = 0; i < questions.length; i++) {
        fechaRespostas
        questions[i].addEventListener('click', abreOuFechaResposta);
    } 
})

function fechaRespostas(elemento) {
    const classeFechada = 'faqs__questions__items'; 
    const classeAberta = 'faqs__questions__items--is-open';
    const elementoPai = elemento.target.parentNode;
    const classeElementoPai = elementoPai.className
        
    if (classeElementoPai == classeAberta) { 
        elementoPai.classList.toggle(classeFechada);
    }
}

function abreOuFechaResposta(elemento) {
    const classe = 'faqs__questions__items--is-open';
    const elementoPai = elemento.target.parentNode;

    elementoPai.classList.toggle(classe);
}


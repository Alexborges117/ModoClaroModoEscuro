/*instanciando variavel cilindro e passando o id cilindro*/ 
let cilindro = document.getElementById('cilindro')
/*iniciando a variavel body e chamadno o body do html*/ 
let body = document.querySelector('body')
/*Iniciando a função cilindro para passar o valor de click para dark
essa variavel nao precisa ser cirada no css apenas indexada a variavel existente que ira
utilizar a função*/ 
cilindro.addEventListener('click', ()=>{
    cilindro.classList.toggle('dark')
    body.classList.toggle('dark')
})
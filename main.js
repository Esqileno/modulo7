const form = document.getElementById('form-id')


form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const valorA = parseFloat(document.getElementById('valorA').value)
    const valorB = parseFloat(document.getElementById('valorB').value)
    const certo = valorA < valorB
    
    const mensagemSucesso = `Você conseguiu! ${valorB} é maior que ${valorA}. PARABENS!!!` 
    const mensagemErro = `Eita... parece que nâo funcionou... ${valorA} é maior que ${valorB}. Maaas, você ainda pode tentar!`
    
    if (certo) {
        alert(mensagemSucesso)

        valorA.valueA = ''
        valorB.valueB = ''

    } else {
        alert(mensagemErro)
    }
    console.log(valorA)
    console.log(valorB)
})
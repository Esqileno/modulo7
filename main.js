const form = document.getElementById('form-id')


form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    const valorA = document.getElementById(parseFloat('valorA'))
    const valorB = document.getElementById(parseFloat('valorB'))
    const certo = valorA < valorB
    
    const mensagemSucesso = `Você conseguiu! ${valorB} é maior que ${valorA}. PARABENS!!!` 
    const mensagemErro = `Eita... parece que nâo funcionou... ${valorA} é maior que ${valorB}. Maaas, você ainda pode tentar!`
    
    if (certo) {
        alert(mensagemSucesso)

        valorA.value = ''
        valorB.value = ''

    } else {
        alert(mensagemErro)
    }
})
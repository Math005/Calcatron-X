function calcular() {
    let fnum = document.querySelector('input#num')
    let tabuada = document.querySelector('select#lista')
    if (num.value.length == 0) {
        window.alert('Erro! Digite um número')
    }
    else {
        let valor = Number(num.value)
        tabuada.innerHTML = ''
        for (var c=1;c<=10;c++) {
            let item = document.createElement('option')
            item.text = `${valor} X ${c} = ${c * valor}`
            tabuada.appendChild(item)
        }
    }
}
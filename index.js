for (let index = 0; index < 6; index++) {
    console.log('index', index)
    document.write(`
<div
  style="
    display: flex;
    border: 2px solid green;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  "
>
${textoDoInput(index, 0)}
${textoDoInput(index, 1)}
${textoDoInput(index, 2)}
${textoDoInput(index, 3)}
${textoDoInputFinal(index, 4)}
</div>
`)

}


function textoDoInput(linha, coluna){
    return `
    <div class="caractere grande">
        <input type="text" name="" id="linha${linha}coluna${coluna}" />
    </div>`
}

function textoDoInputFinal(linha, coluna){
    return `
    <div class="caractere grande">
        <input type="text" name="" id="linha${linha}coluna${coluna}" onchange="digitouPalavra()" />
    </div>`
}

function digitouPalavra(){
    console.log('Finalizou a digitacao')
    console.log('value', document.getElementById('linha0coluna0').value)
    console.log('value', document.getElementById('linha0coluna1').value)
    console.log('value', document.getElementById('linha0coluna2').value)
    console.log('value', document.getElementById('linha0coluna3').value)
    console.log('value', document.getElementById('linha0coluna4').value)
}

document.getElementById('linha0coluna0').style.backgroundColor = 'pink'
document.getElementById('linha0coluna1').style.backgroundColor = 'blue'
document.getElementById('linha4coluna4').style.backgroundColor = 'green'


console.log('allan')
console.log('allan'+123)
console.log(`allan${123}`)

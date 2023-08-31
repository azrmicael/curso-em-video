function counter() {
    let begin = window.document.querySelector('input#begin').value;
    let end = window.document.querySelector('input#end').value;
    let step = window.document.querySelector('input#step').value;
    let res = window.document.querySelector('div#res');
    
    // checando se há algum campo não preenchido
    if (begin.length == 0 || end.length == 0 || step.length == 0) {
        window.alert('[ERRO] Faltam dados!');
        res.innerHTML = '<p>Preparando a contagem...</p>';
    } else {
        let bgnN = Number(begin);
        let endN = Number(end);
        let stpN = Number(step);
    
        if (stpN == 0) {
            window.alert('Passo inválido! Considerando Passo = 1.');
            stpN = 1;
        }

        console.log(`------------------`);
        console.log(`dados considerados`);
        console.log(`> beginN: ${bgnN}`);
        console.log(`> endN:   ${endN}`);
        console.log(`> stepN:  ${stpN}`);
        console.log(`------------------`);
        console.log(``);
        
        let count = '';

        if (bgnN < endN) {
            // contagem crescente
            for (bgnN; bgnN <= endN; bgnN += stpN) {
                console.log(`beginN: ${bgnN} `);
                bgnS = ` 👉 ` + String(bgnN);
                count += bgnS; 
            }
            res.innerHTML = `<p>Contando:<br>${count}🏁</p>`;
        } else if (bgnN == endN) {
            res.innerHTML = '<p>Impossível contar 😞</p>';
        } else {
            // contagem decrescente
            for (bgnN; bgnN >= endN; bgnN -= stpN) {
                console.log(`beginN: ${bgnN} `);
                bgnS = ` 👉 ` + String(bgnN)
                count += bgnS 
            }
            res.innerHTML = `<p>Contando:<br>${count}🏁</p>`;
        }    
    }   
}
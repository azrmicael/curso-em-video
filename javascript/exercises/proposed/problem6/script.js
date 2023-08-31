function muTable() {
    let mPlying = window.document.querySelector('input#multiplying').value;
    let mTable = window.document.querySelector('select#seltab');
    console.log(`mPlying: ${mPlying}`);

    if (mPlying.length == 0) {
        window.alert('Insira um número!');
        //res.innerHTML = `<p>Digite um número acima</p>`;
    } else {
        let mPlyingN = Number(mPlying);
        mTable.innerHTML = '';
        for(let mPlier = 0; mPlier < 11; mPlier++) {
            let item = window.document.createElement('option');
            item.text = `${mPlyingN} x ${mPlier} = ${mPlyingN * mPlier}`;
            item.value = `mTable${mPlier}`;
            mTable.appendChild(item);
        }
        //res.innerHTML = `<p>Essa é a tabuada de <strong>${mPlyingN}</strong> 😃</p>${mTable}`
    }
    
}
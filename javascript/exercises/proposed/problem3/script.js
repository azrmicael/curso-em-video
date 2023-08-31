function verify() {
    var date = new Date();
    var currentYear = date.getFullYear();
    var formYear = window.document.querySelector('input#txtyear');
    var res = window.document.querySelector('div#res');
    if (formYear.value.length == 0 || Number(formYear.value) > currentYear) {
        window.alert('Verifique os dados e tente novamente!');
    } else {
        var formSex = window.document.getElementsByName('radsex');
        var age = currentYear - Number(formYear.value);
        var img = document.createElement('img');
        img.setAttribute('id', 'photo')
        //img.setAttribute('style', 'width: 200px; height: 200px');
        var genre = '';
        if (formSex[0].checked) {
            genre = 'Homem';
            if (age > 0 && age < 13) {
                // criança
                img.setAttribute('src', 'img/foto-bebe-m.png');
            } else if (age < 29) {
                // jovem
                img.setAttribute('src', 'img/foto-jovem-m.png');
            } else if (age < 55) {
                // adulto
                img.setAttribute('src', 'img/foto-adulto-m.png');
            } else if (age >= 55) {
                // idoso
                img.setAttribute('src', 'img/foto-idoso-m.png');
            }
        } else {
            genre = 'Mulher';
            if (age > 0 && age < 13) {
                // criança
                img.setAttribute('src', 'img/foto-bebe-f.png');
            } else if (age < 29) {
                // jovem
                img.setAttribute('src', 'img/foto-jovem-f.png');
            } else if (age < 55) {
                // adulto
                img.setAttribute('src', 'img/foto-adulto-f.png');
            } else if (age >= 55) {
                // idoso
                img.setAttribute('src', 'img/foto-idoso-f.png');
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genre} com ${age} anos.`;
        res.appendChild(img);
    }
}
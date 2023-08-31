function load() {
    var msg = window.document.querySelector('div#msg');
    var img = window.document.querySelector('img#img');
    var date = new Date();
    var hour = date.getHours();
    //var hour = date.toLocaleTimeString()
    //var minute = date.getMinutes();
    msg.innerHTML = `Agora são ${date.toLocaleTimeString()}.`;
    console.log(1)
    if (hour >= 0 && hour < 12) {
        // Bom dia!
        img.src = 'img/morning.jpg';
        document.body.style.background = 'rgb(201, 198, 91)';
    } else if (hour >= 12 && hour < 18) {
        // Boa tarde
        img.src="img/afternoon.jpg";
        document.body.style.background = 'rgb(119, 151, 176)';
    } else {
        // Boa noite
        img.src="img/night.jpg"
        document.body.style.background = 'rgb(42, 71, 87)'
    }
}

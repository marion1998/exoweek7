var clientContainer = document.getElementById("client-info");
var list = document.getElementById("list");

list.addEventListener('change', function () {

    var select = $("#list option:selected").val();
    console.log(select);
    var ma_demande = new XMLHttpRequest();
    ma_demande.open('GET', 'list.json')
    ma_demande.onload = function () {
        var mes_donnees = JSON.parse(ma_demande.responseText);
        renderHTML(mes_donnees[select]);
    };
    ma_demande.send();
});

function renderHTML(donnees) {
    var htmlString = "";
    htmlString = "<p>" + donnees.Nom + " " + donnees.Prénom + " " + donnees.Age + " " + donnees.Profession + " " + donnees.Email + " " + "</p>"


    clientContainer.insertAdjacentHTML('beforeend', htmlString);
}


//$('list').on('select')



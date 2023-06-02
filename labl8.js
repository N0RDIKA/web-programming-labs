function showData() {
    let out = document.getElementById('current-date');
    let today = new Date();
    out.innerHTML = "Дата и время для руской локали: " +  today.toLocaleString('ru-RU');


    let out2 = document.getElementById('current-date2');
    let today2 = new Date();
    out2.innerHTML = "Дата и время для арабской локали: " +  today2.toLocaleString('ar');


    let out3 = document.getElementById('current-date3');
    let today3 = new Date();
    out3.innerHTML = "Дата и время для итальянской локали: " +  today3.toLocaleString('it');


    let out4 = document.getElementById('current-date4');
    let today4 = new Date();
    out4.innerHTML = "Дата и время для испании локали: " +  today4.toLocaleString('es');


    let out5 = document.getElementById('current-date5');
    let today5 = new Date();
    out5.innerHTML = "Дата и время для немцев локали: " +  today5.toLocaleString('de');


    let out6 = document.getElementById('current-date6');
    let today6 = new Date();
    out6.innerHTML = "Дата и время для данской локали: " +  today6.toLocaleString('da');


    let out7 = document.getElementById('current-date7');
    let today7 = new Date();
    out7.innerHTML = "Дата и время для франции локали: " +  today7.toLocaleString('fr');
}


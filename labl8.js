function showData() {
    let out = document.getElementById('current-data');
    let today = new Data();
    out.innerHTML = today.toLocaleString('ru-RU');
}
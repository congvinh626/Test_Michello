async function includeHTML(id, file) {
    const el = document.getElementById(id);
    const res = await fetch(file);
    const html = await res.text();
    el.innerHTML = html;
}

includeHTML('header', 'components/header.html');
includeHTML('sidebar', 'components/sidebar.html');
includeHTML('tabs', 'components/tabs.html');
includeHTML('footer', 'components/footer.html');

window.onload = function() {
  const defaultTab = document.querySelector(".tablinks");
  openCity({ currentTarget: defaultTab }, 'tab1');
};

function openCity(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}




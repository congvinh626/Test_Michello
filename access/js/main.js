const btnSetting = document.getElementById('toggleSetting');
const popupSetting = document.getElementById('popupSetting');

btnSetting.addEventListener('click', () => {
  popupSetting.classList.toggle('show');
});

const btnSelect = document.getElementById('toggleSelect');
const popupSelect = document.getElementById('popupSelect');
const closeSelect = document.getElementById('closeSelect');

btnSelect.addEventListener('click', () => {
  popupSelect.classList.toggle('show');
});

closeSelect.addEventListener('click', () => {
  popupSelect.classList.remove('show');
});

const shopMenu = document.querySelector('.sub-menu-list');
const subMenu = document.querySelector('.sub-menu');
let hideTimeout;

// Khi hover vào "Shop" → hiện menu
shopMenu.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
  subMenu.classList.add('show');
});

// Khi rời khỏi "Shop" → chờ 200ms, nếu chưa hover vào submenu thì ẩn
shopMenu.addEventListener('mouseleave', () => {
  hideTimeout = setTimeout(() => {
    if (!subMenu.matches(':hover')) {
      subMenu.classList.remove('show');
    }
  }, 200);
});

// Khi hover vào submenu → giữ menu
subMenu.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
  subMenu.classList.add('show');
});

// Khi rời khỏi submenu → ẩn menu
subMenu.addEventListener('mouseleave', () => {
  subMenu.classList.remove('show');
});



const openBtnSearch = document.getElementById('openModalSearch');
const closeBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modalBox');
const overlay = document.getElementById('modalOverlay');

openBtnSearch.addEventListener('click', () => {
  modal.classList.add('show');
  overlay.classList.add('show');
});


closeBtn.addEventListener('click', () => {
  modal.classList.remove('show');
  overlay.classList.remove('show');
});

// Đóng khi click ra ngoài
overlay.addEventListener('click', () => {
  modal.classList.remove('show');
  overlay.classList.remove('show');
});

const closeBtn2 = document.getElementById('closeModalBtn2');
const openBtnLogin = document.getElementById('openModalLogin');
const modal2 = document.getElementById('modalBox2');
const overlay2 = document.getElementById('modalOverlay2');

openBtnLogin.addEventListener('click', () => {
  modal2.classList.add('show');
  overlay2.classList.add('show');
});

closeBtn2.addEventListener('click', () => {
  modal2.classList.remove('show');
  overlay2.classList.remove('show');
});

// Đóng khi click ra ngoài
overlay2.addEventListener('click', () => {
  modal2.classList.remove('show');
  overlay2.classList.remove('show');
});
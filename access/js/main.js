const btnSettings = document.querySelectorAll('.toggleSetting');
const popupSetting = document.getElementById('popupSetting');

btnSettings.forEach(btn => {
  btn.addEventListener('click', () => {
    popupSetting.classList.toggle('show');
  });
});

const btnCards = document.querySelectorAll('.toggleCard');
const popupCard = document.getElementById('popupCard');

btnCards.forEach(btn => {
  btn.addEventListener('click', () => {
    popupCard.classList.toggle('show');
  });
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


shopMenu.addEventListener('mouseenter', () => {
  clearTimeout(hideTimeout);
  subMenu.classList.add('show');
});


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

const menuModalSub = document.getElementById('menuModalSub');
const menuModalToggle = document.getElementById('menuModalToggle');

menuModalToggle.addEventListener('click', () => {
  menuModalSub.classList.toggle('show');
});

const openBtnSearchs = document.querySelectorAll('.openModalSearch');
const closeBtn = document.getElementById('closeModalBtn');
const modal = document.getElementById('modalBox');
const overlay = document.getElementById('modalOverlay');

openBtnSearchs.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
    overlay.classList.add('show')
  });
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
const openBtnLogins = document.querySelectorAll('.openModalLogin');
const modal2 = document.getElementById('modalBox2');
const overlay2 = document.getElementById('modalOverlay2');


openBtnLogins.forEach(btn => {
  btn.addEventListener('click', () => {
    modal2.classList.add('show');
    overlay2.classList.add('show');
  });
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


const menuToggle = document.getElementById("menuToggle");
const menuModal = document.getElementById("menuModal");
const menuClose = document.getElementById("menuClose");

menuToggle.addEventListener("click", () => {
  menuModal.classList.add("show");
});

menuClose.addEventListener("click", () => {
  menuModal.classList.remove("show");
});

// Đóng khi click ra ngoài vùng menu
menuModal.addEventListener("click", (e) => {
  if (e.target === menuModal) {
    menuModal.classList.remove("show");
  }
});

const menuModalParent = document.getElementById("menuModalParent");
const menuModalChild = document.getElementById("menuModalChild");

menuModalParent.addEventListener("click", () => {
  menuModalChild.classList.toggle("show");
});


// Countdown Timer

let totalSeconds =
  (23 * 24 * 60 * 60) + // 23 ngày
  (16 * 60 * 60) +      // 16 giờ
  (5 * 60) +           // 5 phút
  48;                   // 48 giây

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const timer = setInterval(() => {
  totalSeconds--;

  days.innerHTML = Math.floor(totalSeconds / (24 * 60 * 60));
  hours.innerHTML = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
  minutes.innerHTML = Math.floor((totalSeconds % (60 * 60)) / 60);
  seconds.innerHTML = totalSeconds % 60;

}, 1000);
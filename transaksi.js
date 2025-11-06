const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', function(){
    window.location.href = 'index.html';
});

const ConfirmBtn = document.getElementById('konfirmasiBtn');
const ConfirmTrx = document.getElementById('confirmTrx');

ConfirmBtn.addEventListener('click', function(){
ConfirmTrx.style.display = 'flex';
})

const btnClose = document.getElementById('btnClose');
const btnBayar = document.getElementById('btnBayar');
const notif = document.getElementById('notifikasi');

btnClose.addEventListener('click', function(){
    ConfirmTrx.style.display = 'none';
})

btnBayar.addEventListener('click', function(){
    notif.style.display = 'flex';
    setTimeout(() => {
        window.location.href = 'beranda.html'
    }, 4000);
})

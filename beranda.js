function historyTrx() {
    return window.location.href = 'riwayatTransaksi.html'
}
// Navigasi Btn
const createBtn = document.getElementById('createBtn');
const trxBtn = document.getElementById('trxBtn');
const historyBtn = document.getElementById('historyBtn');

createBtn.addEventListener('click', function(){
    window.location.href = 'tambahProduk.html';
});

trxBtn.addEventListener('click', function(){
    window.location.href = 'transaksi.html';
});

historyBtn.addEventListener('click', function(){
    window.location.href = 'laporanKeuangan.html';
});
// Slider
const sliderBtn = document.getElementById('slider-btn');
const btnTrx = document.getElementById('btn-trx');
const btnOmset = document.getElementById('btn-omset');
const btnOutlet = document.getElementById('btn-outlet');
const btnExternal = document.getElementById('btn-external');

const detailTrx = document.getElementById('detail-trx');
const detailOmset = document.getElementById('detail-omset');
const detailOutlet = document.getElementById('detail-outlet');
const detailExternal = document.getElementById('detail-external');

btnTrx.addEventListener('click', function(){
    detailTrx.scrollIntoView({
        behavior: "smooth",
        block:"center"
    })
    sliderBtn.style.left = "9%"
});

btnOmset.addEventListener('click', function(){
    detailOmset.scrollIntoView({
        behavior: "smooth",
        block:"center"
    })
    sliderBtn.style.left = "31%"
});

btnOutlet.addEventListener('click', function(){
    detailOutlet.scrollIntoView({
        behavior: "smooth",
        block:"center"
    })
    sliderBtn.style.left = "54%"
});

btnExternal.addEventListener('click', function(){
    detailExternal.scrollIntoView({
        behavior: "smooth",
        block:"center"
    })
    sliderBtn.style.left = "76%"
});
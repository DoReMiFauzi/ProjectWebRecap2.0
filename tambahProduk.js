const backBtn = document.getElementById('backBtn');

backBtn.addEventListener('click', function(){
    window.location.href = 'index.html';
})

const toggle = document.getElementById('switch')
const slider = document.getElementById('slider')

toggle.addEventListener('change', function(){
    if(this.checked){
        slider.scrollTo({
            left: slider.scrollWidth,
            behavior: "smooth"
        })
    } else{
        slider.scrollTo({
            left: 0,
            behavior:"smooth"
        })
    }
})
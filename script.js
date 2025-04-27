const faqitem = document.querySelectorAll('.faq-item')
faqitem.forEach(faqitem => {
    const faqitemBtm=faqitem.querySelector('.faq-item__question')
    const faqitemIcon =faqitem.querySelector('.faq-item__icon')

 faqitemBtm.addEventListener('click',() => {
    faqitem.classList.toggle('faq-item--expanded')
    if(faqitem.classList.contains('faq-item--expanded')){
        faqitemIcon.textContent='x'
    }else{
        faqitemIcon.textContent='+'
    }
   })

})


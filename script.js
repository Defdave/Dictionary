const word = document.getElementById("input-word")
const submitBtn = document.querySelector(".sear-btn")
const preLoader = document.querySelector('.pre-loader')



submitBtn.addEventListener('click', () => {
    const inpWord = word.value
    sessionStorage.setItem('inpWord', inpWord)
    
    window.location.href = 'dict.html'

    
})
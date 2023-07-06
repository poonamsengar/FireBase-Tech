const usercon = document.querySelector('.user-container')
const regi_btn = document.querySelector('.registration-btn')
const login_btn = document.querySelector('.login-btn')

regi_btn.addEventListener('click',()=>{
    usercon.classList.add('login-section--display')
})
login_btn.addEventListener('click',()=>{
    usercon.classList.remove('login-section--display')
})
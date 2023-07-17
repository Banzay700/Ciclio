export const burgerMenu = () => {
   const menuIcon = document.querySelector('.menu-icon')

   menuIcon.addEventListener('click', () => {
      document.documentElement.classList.toggle('menu-open')
      document.documentElement.classList.toggle('lock')
   })
}

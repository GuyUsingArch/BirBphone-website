(function(){
  function ShowSideBar(){document.querySelector('.sidebar').style.display='flex'}
  function HideSideBar(){document.querySelector('.sidebar').style.display='none'}
  function initTheme(){
    var s=localStorage.getItem('theme');
    if(s==='dark') document.body.classList.add('darkMode');
    else if(s==='light') document.body.classList.remove('darkMode');
    else if(window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches) document.body.classList.add('darkMode');
  }
  function ToggleDarkMode(){
    var isDark=document.body.classList.toggle('darkMode');
    localStorage.setItem('theme',isDark?'dark':'light');
  }
  window.ShowSideBar=ShowSideBar;window.HideSideBar=HideSideBar;window.ToggleDarkMode=ToggleDarkMode;
  document.addEventListener('DOMContentLoaded',initTheme);
})();

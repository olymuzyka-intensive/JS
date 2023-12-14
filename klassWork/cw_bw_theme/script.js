let btn = document.querySelector('.btn-toggle');
let theme = document.querySelector('#theme');

btn.addEventListener('click', function() {
    // document.body.classList.toggle('dark-theme'); 

    if (theme.getAttribute("href") == "light-theme.css") {
      theme.href = "dark-theme.css";
    } else {
      theme.href = "light-theme.css";
    }
  });




    // const btn = document.querySelector('.btn-toggle');
    // btn.addEventListener('click', function() {
    // document.body.classList.toggle('dark-theme'); 
    // })
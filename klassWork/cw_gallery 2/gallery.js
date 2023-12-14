let imgList = document.querySelectorAll('.gallery__thumbs li');
let previewImg = document.querySelector('.gallery__preview');

const gallery = function(event) {
    // let newImg = document.querySelector('a').getAttribute('href');    
    }

    let img = document.querySelectorAll('img');
    let imgLinks = document.querySelectorAll('a');
    let imgLink = document.querySelector('a');
    let imgShow = document.createElement('img');
    
    let closeBtn = previewImg.querySelector('.gallery__preview_close');
    
    img.forEach(item => {       
        item.addEventListener('click', function(){
          
            let href = imgLink.href; // пробовала item, this, img выдает undefind
            imgShow.src = href;
            previewImg.append(imgShow);
           
            closeBtn.style.display = 'block';

            closeBtn.addEventListener('click', function(){
                imgShow.style.display = 'none';
                closeBtn.style.display = 'none';

                
            })
            if (imgShow.style.display === 'none') {
                imgShow.style.display = 'flex';
            } else if (imgShow.style.display !== 'none') {
                imgShow.style.display = 'none';
                closeBtn.style.display = 'none';
            }

            });          
            
            
            
    }) 
window.addEventListener('load', function(){
    gallery('gallery'); // id
})



        // let style = getComputedStyle(imgShow);
        //     if (style.display === 'none') {
        //         imgShow.style.display = 'flex';
        //     } else if (style.display !== 'none') {
        //         imgShow.style.display = 'none';
        //         closeBtn.style.display = 'none';
        //     }
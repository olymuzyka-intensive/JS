const gallery = function(id) {
    let imgList = document.querySelectorAll('.gallery__thumbs li a');
    let previewImg = document.querySelector('.gallery__preview');
    let closeBtn = previewImg.querySelector('.gallery__preview_close');
    
    imgList.forEach(item => {       
        item.addEventListener('click', function(e){
            e.preventDefault();

            let href = item.href;
            let imgShow = document.createElement('img');
            imgShow.src = href;

            previewImg.append(imgShow);
            imgShow.style.display = 'flex';
            closeBtn.style.display = 'block';

            closeBtn.addEventListener('click', function(){
                imgShow.remove();
                closeBtn.style.display = 'none';
                
            })          
    
        });
    }) 
}
window.addEventListener('load', function(){
    gallery('gallery'); // id
})



// if (imgShow.style.display === 'none') {
//     imgShow.style.display = 'flex';
// } else if (imgShow.style.display !== 'none') {
//     imgShow.style.display = 'none';
//     closeBtn.style.display = 'none';
// }
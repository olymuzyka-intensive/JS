let imgList = document.querySelectorAll('.gallery__thumbs li'); //
let previewImg = document.querySelector('.gallery__preview'); //
let closeBtn = previewImg.querySelector('.gallery__preview_close'); //

    function showImg(event) {
          event = event || window.event; 
          var Img = event.Target || event.srcElement; 
          if (Img.tagName == "IMG"){ 
          document.getElementById("preview").src = Img.getAttribute('src');  
        }
    } 


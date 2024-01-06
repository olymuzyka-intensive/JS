window.addEventListener('DOMContentLoaded', () => {
    const storageType = sessionStorage;
    const consertPropertyType = 'site_consent';

    const shouldShowPopup = () => 
    !storageType.getItem(consertPropertyType);

    const saveToStorage = () => storageType.setItem(consertPropertyType, true);

    const popup = document.querySelector('.popup'),
            btn = document.querySelector('.btn_cookie');
    
        if (shouldShowPopup()) {
            popup.classList.add('popup_active') ;           
        } else {
            console.log('LOading...');
        }
        btn.addEventListener('click', () => {
            saveToStorage();
            popup.classList.remove('popup_active');
            console.log('LOading...');
        })
}); 
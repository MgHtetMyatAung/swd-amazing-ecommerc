
export function showLoaderUi(){
    const loader=document.createElement('div');
    loader.classList.add('loader','animate__animated','animate__fadeIn');
    loader.innerHTML=`
            <div class="min-vh-100 d-flex justify-content-center fixed-top bg-white align-items-center">
                <div class="">
                    <img src="./public/imgs/mmsit-logo.png" alt="" class="loader-img">
                    <p class="mt-3">Loading ...</p>
                </div>
            </div>
    `;
  
    document.body.append(loader);
  }

  export function hideLoaderUi(){
    const hideLoader= document.querySelector('.loader');
    hideLoader.classList.replace('animate__fadeIn','animate__fadeOut');
    hideLoader.addEventListener('animationend',()=>{
      hideLoader.remove();
    })
  }
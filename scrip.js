function ClickButtonInfo() {
    const info_list = document.getElementById("content__info")
    if(info_list){
        document.getElementsByClassName('content__button-text')[0].childNodes[0].textContent = "Show Information Team";
        info_list.style.animation = `EffectButtonHide 0.5s linear`

        const autoRemoveId = setTimeout(function() {
            info_list.parentNode.removeChild(info_list)
        },  500);

        // info_list.parentNode.removeChild(info_list)
    }
    else{
        const main = document.getElementById("content__show-info-team")
        const info = document.createElement('div')
        info.classList.add('content__show-info-team')
        info.style.animation = `EffectButtonShow 0.5s linear`

        info.innerHTML = `
        <ul id="content__info" class="info-list">
                <h3 class="content__title">
                    Các thành viên của nhóm
                </h3> 
                <div class="info-item-all">
                    <li class="info-item">
                        <img class="info-item__img" src="./img/Tien.jpg" alt="Phạm Minh Tiến">
                        <h4 class="info-item__name">Phạm Minh Tiến</h4>
                    </li>
                    <li class="info-item">
                        <img class="info-item__img" src="./img/Quang.jpg" alt="Nguyễn Minh Quang">
                        <h4 class="info-item__name">Nguyễn Minh Quang</h4>
                    </li>
                    <li class="info-item">
                        <img class="info-item__img" src="./img/Minh.jpg" alt="Hồ Ngọc Hoàng Minh">
                        <h4 class="info-item__name">Hồ Ngọc Hoàng Minh</h4>
                    </li>
                </div>
            </ul>`
        main.appendChild(info)

        document.getElementsByClassName('content__button-text')[0].childNodes[0].textContent = "Hide Infomation Team";
    }
}
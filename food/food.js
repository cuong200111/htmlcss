

const fileFood = document.querySelector('.fileFood')
const nameFood = document.querySelector('.nameFood')
const descripts = document.querySelector('.descripts')
const categoryFood = document.querySelector('.categoryFood')
let base64Data = ``
let arrFoodData = JSON.parse(localStorage.getItem('foodData')) ? JSON.parse(localStorage.getItem('foodData')) : []
const changFile = () => {
    const reader = new FileReader()
    reader.onload = (e) => {
        const base64 = window.btoa(e.target.result)
        base64Data = base64
    }
    reader.readAsBinaryString(fileFood.files[0])
}
const addFood = () => {
    const newData = { nameFood: nameFood.value, descripts: descripts.value, categoryFood: categoryFood.value, date: new Date().getTime(), imgData: base64Data }
    arrFoodData.push(newData)
    localStorage.setItem('foodData', JSON.stringify(arrFoodData))
    setTimeout(() => {
        window.location.reload()
    }, 1000)
}
let htmlfood = ``
const quantity = document.querySelector('.quantity')
quantity.innerHTML = `<span>${arrFoodData.length} món</span>`
const food_main_bottom_container_items = document.querySelector('.food_main_bottom_container_items')
arrFoodData.map((item, index) => {
    htmlfood += `    <div class="food_main_bottom_container_item">
    <img src="data:image/png;base64,${item.imgData}" alt="">
    <div onclick="handleDelete(this,${index})" class="checkRemove"></div>
    <div class="title_food_container">
        <span>${item.nameFood}</span>
        <div class="con-like">
            <input title="like" type="checkbox" class="like">
            <div class="checkmark">
                <svg viewBox="0 0 24 24" class="outline" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z">
                    </path>
                </svg>
                <svg viewBox="0 0 24 24" class="filled" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z">
                    </path>
                </svg>
                <svg class="celebrate" width="100" height="100"
                    xmlns="http://www.w3.org/2000/svg">
                    <polygon points="10,10 20,20" class="poly"></polygon>
                    <polygon points="10,50 20,50" class="poly"></polygon>
                    <polygon points="20,80 30,70" class="poly"></polygon>
                    <polygon points="90,10 80,20" class="poly"></polygon>
                    <polygon points="90,50 80,50" class="poly"></polygon>
                    <polygon points="80,80 70,70" class="poly"></polygon>
                </svg>
            </div>
        </div>
        <!-- <img  style="z-index: 1000;;width: 25px;margin-right: 5px;" src="../img/icon/lovely.png" alt=""> -->
    </div>
    <div class="descripts_food_container">
        <span>Đồ ăn chính </span><span>Sản phẩm từ cơm </span>
    </div>
    </div>`


})
food_main_bottom_container_items.innerHTML = htmlfood

const handleAdd = () => {
    document.querySelector('.popup_add').classList.add('active')
    document.querySelector('.bg_food').classList.add('active')
}
document.addEventListener('click', (e) => {
    if (document.querySelector('.popup_add') && !document.querySelector('.popup_add').contains(e.target)) {

        document.querySelector('.popup_add').classList.remove('active')
        document.querySelector('.bg_food').classList.remove('active')
    }
}, true)
let arrDelete = []
const handleDelete = (e, i) => {
    e.classList.add('active')
    arrDelete.push(i)

}
const handleDeleteicon = () => {
    document.querySelector('.deleteHandlefood').classList.toggle('active')

    document.querySelectorAll('.checkRemove').forEach(item => {
        if (document.querySelector('.deleteHandlefood.active')) {
            item.setAttribute('style', 'z-index:1000')
        }else{
            document.querySelectorAll('.checkRemove').forEach(item=>{
                item.classList.remove('active')
            })
            item.setAttribute('style', 'z-index:-1')
            arrDelete.push()
        }


    })

}

const deleteHandlefood = () => {
    document.querySelector('.notiDelete').innerHTML = `<h1>Đã xóa thành công ${arrDelete.length} sản phẩm</h1>`
    document.querySelector('.notiDelete').classList.add('active')

    const newArr = arrFoodData.filter((item, index) => {
        return !arrDelete.includes(index)
    })
    localStorage.setItem('foodData', JSON.stringify(newArr))
    setTimeout(() => {
        window.location.reload()
    }, 2000)
}

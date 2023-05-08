

const fileFood = document.querySelector('.fileFood')
const nameFood = document.querySelector('.nameFood')
const descripts = document.querySelector('.descripts')
const categoryFood = document.querySelector('.categoryFood')
let base64Data = ``
let arrFoodData = JSON.parse(localStorage.getItem('foodData')) ? JSON.parse(localStorage.getItem('foodData')) : []
const textInputImg = document.querySelector('.textInputImg')

const changFile = (e) => {

    const va = e.files[0].name

    textInputImg.innerHTML = `<span>${va}</span>`
    const reader = new FileReader()
    reader.onload = (e) => {
        const base64 = window.btoa(e.target.result)
        base64Data = base64
    }
    reader.readAsBinaryString(fileFood.files[0])
}
const clearInput = () => {
    textInputImg.innerHTML = `Not selected file`
}

const undoData = () => {
    window.location.reload()
}
const addFood = () => {
    let g = `<div style="position:absolute;border-radius:4px;background-color: #00933B;display:flex;justify-content: space-between;align-items: center;width: 300px;padding: 5px;left: 77%;top: 14%;">
<div style="display:flex;justify-content: center;align-items: center;">
    <img style="width: 20px;" src="../img/icon/mdi_tick.png" /> 
    <span style="color:white;margin-left:5px; font-family: Arial, Helvetica, sans-serif;">Đã thêm 1 món ăn</span>
</div>
<span onclick="undoData()" style="text-decoration: underline;color: white;cursor: pointer; font-family: Arial, Helvetica, sans-serif;">Hoàn tác</span>
</div>`
    document.querySelector('.ptop').innerHTML = g
    const newData = { nameFood: nameFood.value, descripts: descripts.value, categoryFood: categoryFood.value, date: new Date().getTime(), imgData: base64Data }
    arrFoodData.push(newData)
    setTimeout(() => {
        localStorage.setItem('foodData', JSON.stringify(arrFoodData))
        window.location.reload()
    }, 2000)
}

let htmlfood = ``
const quantity = document.querySelector('.quantity')
quantity.innerHTML = `<span  style="font-family: Arial, Helvetica, sans-serif;">${arrFoodData.length} món</span>`
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
        <span>${item.categoryFood} </span>
    </div>
    </div>`
    {/* <span>Sản phẩm từ cơm </span> */ }

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
    const trash = JSON.parse(localStorage.getItem('action'))
    if (trash.trash) {
        e.classList.add('active')
        arrDelete.push(i)
    }

}
const handleDeleteicon = () => {
    document.querySelector('.deleteHandlefood').classList.toggle('active')
    localStorage.setItem('action', JSON.stringify({ trash: true, add: false }))
    document.querySelectorAll('.checkRemove').forEach(item => {
        if (document.querySelector('.deleteHandlefood.active')) {
            item.setAttribute('style', 'z-index:1000')
        } else {
            document.querySelectorAll('.checkRemove').forEach(item => {
                item.classList.remove('active')
            })
            item.setAttribute('style', 'z-index:-1')
            arrDelete.push()
            window.location.reload()
        }


    })

}

const deleteHandlefood = () => {

    let g = `<div style="position:absolute;border-radius:4px;background-color: #00933B;display:flex;justify-content: space-between;align-items: center;width: 300px;padding: 5px;left: 77%;top: 14%;">
    <div style="display:flex;justify-content: center;align-items: center;">
        <img style="width: 20px;" src="../img/icon/mdi_tick.png" /> 
        <span style="    font-family: Arial, Helvetica, sans-serif;color:white;margin-left:5px">Xóa thành công ${arrDelete.length} món ăn</span>
    </div>
    <span onclick="undoData()" style="text-decoration: underline;color: white;cursor: pointer;    font-family: Arial, Helvetica, sans-serif;">Hoàn tác</span>
    </div>`
    document.querySelector('.ptop').innerHTML = g
    document.querySelector('.notiDelete').classList.add('active')

    const newArr = arrFoodData.filter((item, index) => {
        return !arrDelete.includes(index)
    })
   
    setTimeout(() => {
        localStorage.setItem('foodData', JSON.stringify(newArr))
        window.location.reload()
    }, 2000)
}


const fillArr = arrFoodData.filter((item, index) => {
    const i = arrFoodData.findIndex((itemz, indexz) => {
        return item.categoryFood === itemz.categoryFood
    })
    return i === index
})
let htmlzz = `<div onclick="handleCate(-1)">Tổng quan</div>`
console.log(fillArr);
fillArr.map((item, index) => {
    htmlzz += `<div onclick="handleCate(${index})">${item.categoryFood}</div>`
})

document.querySelector('.popupCategory').innerHTML = htmlzz

const handlePopupCategory = () => {
    document.querySelector('.popupCategory').classList.toggle('active')

}

let htm = ``
const handleCate = (i) => {
    const cateFill = arrFoodData.filter((item) => {
        if (i === -1) {
            return item
        } else {
            return item.categoryFood === fillArr[i].categoryFood
        }

    })
    console.log(cateFill);
    htm = ``
    cateFill.map((item, index) => {
        htm += ` <div class="food_main_bottom_container_item">
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
        <span>${item.categoryFood}</span>
    </div>
    </div>`
    })


    food_main_bottom_container_items.innerHTML = htm

}
document.addEventListener('click', (e) => {
    if (document.querySelector('.popupCategory') && !document.querySelector('.popupCategory').contains(e.target)) {
        document.querySelector('.popupCategory').classList.remove('active')
    }

}, true)
const handlehide = () => {
    document.querySelector('.popup_add').classList.remove('active')
    document.querySelector('.bg_food').classList.remove('active')
}


const fileFood = document.querySelector('.fileFood')
const nameFood = document.querySelector('.nameFood')
const descripts = document.querySelector('.descripts')
const categoryFood = document.querySelector('.categoryFood')
const address = document.querySelector('.address')
const time = document.querySelector('.time')
const descripts2 = document.querySelector('.descripts2')
const quatity = document.querySelector('.quatity')
let base64Data = ``
let arrFoodData = JSON.parse(localStorage.getItem('ingredient')) ? JSON.parse(localStorage.getItem('ingredient')) : []
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
    let g = `<div style="position:absolute;border-radius:4px;background-color: #00933B;display:flex;justify-content: space-between;align-items: center;width: 350px;padding: 5px;left: 75%;top: 14%;">
    <div style="display:flex;justify-content: center;align-items: center;">
        <img style="width: 20px;" src="../img/icon/mdi_tick.png" /> 
        <span style="color:white;margin-left:5px; font-family: Arial, Helvetica, sans-serif;" >Thêm thành công 1 nguyên liệu</span>
    </div>
    <span onclick="undoData()" style="text-decoration: underline;color: white;cursor: pointer; font-family: Arial, Helvetica, sans-serif;">Hoàn tác</span>
    </div>`
    document.querySelector('.ptop').innerHTML = g
    const day = new Date(time.value).getDay()
    const month = new Date(time.value).getMonth() + 1
    const year = new Date(time.value).getFullYear()
    const newData = { nameFood: nameFood.value, address: address.value, descripts2: descripts2.value, descripts: descripts.value, categoryFood: categoryFood.value, time: `Ngày ${day} tháng ${month} năm ${year}`, imgData: base64Data, quatity: quatity.value }
    setTimeout(() => {
        arrFoodData.push(newData)
        localStorage.setItem('ingredient', JSON.stringify(arrFoodData))
        window.location.reload()
    }, 2000)
}








let htmlfood = ``
const quantity = document.querySelector('.quantity')
quantity.innerHTML = `<span  style="font-family: Arial, Helvetica, sans-serif;"> Đang có ${arrFoodData.length} nguyên liệu</span>`
const food_main_bottom_container_items = document.querySelector('.food_main_bottom_container_items')
arrFoodData.map((item, index) => {
    htmlfood += `    <div class="food_main_bottom_container_item">
    <img class="imgAvata" src="data:image/png;base64,${item.imgData}" alt="">
    <div onclick="handleDelete(this,${index})" class="checkRemove"></div>
    <div class="title_food_container" >
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
    
    <div class="descripts_food_container2">
       <img style="margin-left:10px;width:17px" src="../img/icon/time.png" /> <span> ${item.time}</span>
    </div>
    <div class="descripts_food_container2">
    <img style="margin-left:10px;width:17px" src="../img/icon/address.png" /> <span>${item.address}</span>
    </div>
    <div class="descripts_food_container2">
    <img style="margin-left:10px;width:17px" src="../img/icon/quatity.png" /> <span>${item.quatity}</span>
    </div>
    <div class="descripts_food_container2">
    <img style="margin-left:10px;width:17px" src="../img/icon/note.png" /> <span>${item.descripts2}</span>
    </div>
    <div class="descripts_food_container">
        <span>Hàng chính hãng</span><span>Đồ chất lượng cao</span>
    </div>
    <div class="title_food_container_employee" style="padding-bottom:30px">
    <button onclick="deleteempoly(${index})">Xóa</button> <button onclick="upEmployee(${index})">Sửa</button>
 </div>
    </div>`


})
const deleteempoly = (i) => {
    let g = `<div style="position:absolute;border-radius:4px;background-color: #00933B;display:flex;justify-content: space-between;align-items: center;width: 350px;padding: 5px;left: 75%;top: 14%;">
    <div style="display:flex;justify-content: center;align-items: center;">
        <img style="width: 20px;" src="../img/icon/mdi_tick.png" /> 
        <span style="color:white;margin-left:5px;    font-family: Arial, Helvetica, sans-serif;">Xóa thành công 1 nguyên liệu</span>
    </div>
    <span onclick="undoData()" style="text-decoration: underline;color: white;cursor: pointer;    font-family: Arial, Helvetica, sans-serif;">Hoàn tác</span>
    </div>`
    document.querySelector('.ptop').innerHTML = g
    const fill = arrFoodData.filter((item, index) => {
        return index !== i
    })

    setTimeout(() => {
        localStorage.setItem('ingredient', JSON.stringify(fill))
        window.location.reload()
    }, 2000)
}
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
    let g = `<div style="position:absolute;border-radius:4px;background-color: #00933B;display:flex;justify-content: space-between;align-items: center;width: 350px;padding: 5px;left: 75%;top: 14%;">
    <div style="display:flex;justify-content: center;align-items: center;">
        <img style="width: 20px;" src="../img/icon/mdi_tick.png" /> 
        <span style="color:white;margin-left:5px;    font-family: Arial, Helvetica, sans-serif;">Xóa thành công ${arrDelete.length} nguyên liệu</span>
    </div>
    <span  onclick="undoData()" style="text-decoration: underline;color: white;cursor: pointer;    font-family: Arial, Helvetica, sans-serif;">Hoàn tác</span>
    </div>`
    document.querySelector('.ptop').innerHTML = g
    document.querySelector('.notiDelete').classList.add('active')

    const newArr = arrFoodData.filter((item, index) => {
        return !arrDelete.includes(index)
    })

    setTimeout(() => {
        localStorage.setItem('ingredient', JSON.stringify(newArr))
        window.location.reload()
    }, 2000)
}


const fillArr = arrFoodData.filter((item, index) => {
    const i = arrFoodData.findIndex((itemz, indexz) => {
        return item.categoryFood === itemz.categoryFood
    })
    return i === index
})
let htmlzz = `<div onclick="handleCate(-1)">default</div>`
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
        htm += `    <div class="food_main_bottom_container_item">
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
        
        <div class="descripts_food_container2">
           <img style="margin-left:10px;width:17px" src="../img/icon/time.png" /> <span> ${item.time}</span>
        </div>
        <div class="descripts_food_container2">
        <img style="margin-left:10px;width:17px" src="../img/icon/address.png" /> <span>${item.address}</span>
        </div>
        <div class="descripts_food_container2">
        <img style="margin-left:10px;width:17px" src="../img/icon/quatity.png" /> <span>${item.quatity}</span>
        </div>
        <div class="descripts_food_container2">
        <img style="margin-left:10px;width:17px" src="../img/icon/note.png" /> <span>${item.descripts2}</span>
        </div>
        <div class="descripts_food_container">
            <span>Hàng chính hãng</span><span>Đồ chất lượng cao</span>
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



let nameFood2 = null
let descripts22 = null
let categoryFood2 = null
let address2 = null
let time2 = null
let descripts222 = null
let quatity2 = null
let ins = null
let day2 = null
let month2 = null
let year2 = null
const upEmployee = (i) => {
    ins = i
    let ht = `   <div class="popup_add_header">
<h1 style="text-align:center;font-family: Arial, Helvetica, sans-serif;font-size:20px;padding:35px 0 15px 0">Chi tiết thực phẩm</h1>
</div>
<div class="popup_add_container">
<img style="padding:25px 0;" src="data:image/png;base64,${arrFoodData[i].imgData}" />

<div style="align-self: start;margin-left: 8%;padding: 5px;">
    <label for="">Tên Nguyên liệu</label>
</div>
<div style="width: 80%;">
    <input value="${arrFoodData[i].nameFood}" class="nameFood2" placeholder="Tên Nguyên liệu" style="width:100%;padding: 5px;"
        type="text">
</div>

<div style="align-self: start;margin-left: 8%;padding: 5px;">
    <label for="">Nhâp mô tả</label>
</div>
<div style="width: 80%;">
    <input value="${arrFoodData[i].descripts}" class="descripts22" placeholder="Nhập mô tả" style="width:100%;padding: 5px;" type="text">
</div>
<div style="align-self: start;margin-left: 8%;padding: 5px;">
    <label for="">Nhâp Category</label>
</div>

<div style="width: 80%;">
    <input value="${arrFoodData[i].categoryFood}" class="categoryFood2" placeholder="Nhâp Category" style="width:100%;padding: 5px;"
        type="text">
</div>

<div style="align-self: start;margin-left: 8%;padding: 5px;">
    <label for="">Nhâp thời gian</label>
</div>

<div style="width: 80%;">
    <input  class="time2" onchange="handletime2(this)" placeholder="Nhâp thời gian" style="width:100%;padding: 5px;"
        type="date">
</div>
<div style="align-self: start;margin-left: 8%;padding: 5px;">
    <label for="">Nhâp Địa chỉ</label>
</div>

<div style="width: 80%;">
    <input value="${arrFoodData[i].nameFood}" class="address2" placeholder="Nhâp Địa chỉ" style="width:100%;padding: 5px;"
        type="text">
</div>
<div style="align-self: start;margin-left: 8%;padding: 5px;">
    <label for="">Nhâp chất lượng</label>
</div>

<div style="width: 80%;">
    <input value="${arrFoodData[i].quatity}" class="quatity2" placeholder="Nhâp chất lượng" style="width:100%;padding: 5px;"
        type="text">
</div>
<div style="align-self: start;margin-left: 8%;padding: 5px;">
    <label for="">Nhâp mô tả</label>
</div>
<div style="width: 80%;">
    <input value="${arrFoodData[i].descripts2}" class="descripts222" placeholder="Nhập mô tả" style="width:100%;padding: 5px;" type="text">
</div>
<div style="width: 80%;display: flex;justify-content: center;margin-top: 10px; cursor: pointer;">
    <button onclick="destroy()"
        style=" cursor: pointer;border-radius: 5px;margin:0 12px;border: none; padding: 10px 40px;background-color: #00933b47;">Hủy</button>
    <button onclick="upingredient()"
        style="cursor: pointer;border-radius: 5px; margin:0 12px;border: none; padding: 10px 40px;background-color: #00933ba3;">Sửa</button>
</div>
</div>`


    document.querySelector('.popup_add2').classList.add('active');
    document.querySelector('.popup_add2').innerHTML = ht
    nameFood2 = document.querySelector('.nameFood2')
    descripts22 = document.querySelector('.descripts22')
    categoryFood2 = document.querySelector('.categoryFood2')
    address2 = document.querySelector('.address2')
 
    descripts222 = document.querySelector('.descripts222')
    quatity2 = document.querySelector('.quatity2')
}
const handletime2 = (e)=>{
  
    const day = new Date(e.value).getDate()
    const month = new Date(e.value).getMonth() + 1
    const year = new Date(e.value).getFullYear()
    day2 = day
    month2 = month
    year2 = year
}
const destroy = () => {
    document.querySelector('.popup_add2').classList.remove('active')
}
const upingredient = () => {
const strDate =  `Ngày ${day2} tháng ${month2} năm ${year2}`
    arrFoodData.forEach((item, index) => {
        if (ins === index) {
            item.quatity = quatity2.value
            item.nameFood = nameFood2.value
            item.descripts2 = descripts222.value
            item.descripts = descripts22.value
            item.categoryFood = categoryFood2.value
            item.address = address2.value
            item.time = strDate
        }
    })
    localStorage.setItem('ingredient', JSON.stringify(arrFoodData))
    window.location.reload()
}
document.addEventListener('click', (e) => {
    if (document.querySelector('.popup_add2') && !document.querySelector('.popup_add2').contains(e.target)) {
        document.querySelector('.popup_add2').classList.remove('active')
    }
}, true)


const handlehide = () => {
    document.querySelector('.popup_add').classList.remove('active')
    document.querySelector('.bg_food').classList.remove('active')
}
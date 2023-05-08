const fileFood = document.querySelector('.fileFood')
const nameFood = document.querySelector('.nameFood')
const descripts2 = document.querySelector('.descripts2')
const employee_position = document.querySelector('.employee_position')
let base64Data = ``
let arrFoodData = JSON.parse(localStorage.getItem('employee')) ? JSON.parse(localStorage.getItem('employee')) : []

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
const clearInput = ()=>{
    textInputImg.innerHTML = `Not selected file`
}

const undoData = () => {
    window.location.reload()
}
const addFood = () => {
    let g= `<div style="position:absolute;border-radius:4px;background-color: #00933B;display:flex;justify-content: space-between;align-items: center;width: 300px;padding: 5px;left: 82%;top: 14%;">
    <div style="display:flex;justify-content: center;align-items: center;">
        <img style="width: 20px;" src="../img/icon/mdi_tick.png" /> 
        <span style="color:white;margin-left:5px; font-family: Arial, Helvetica, sans-serif;">Đã thêm 1 nhân viên</span>
    </div>
    <span onclick="undoData()" style="text-decoration: underline;color: white;cursor: pointer; font-family: Arial, Helvetica, sans-serif;">Hoàn tác</span>
    </div>`
    document.querySelector('.ptop').innerHTML=g
    const newData = { nameFood: nameFood.value, descripts2: descripts2.value, imgData: base64Data, employee_position: employee_position.value }
 
    
    setTimeout(() => {
        arrFoodData.push(newData)
  
        localStorage.setItem('employee', JSON.stringify(arrFoodData))
        window.location.reload()
    }, 2000)

}








let htmlfood = ``
const quantity = document.querySelector('.quantity')
quantity.innerHTML = `<span style="font-family: Arial, Helvetica, sans-serif;">Hiện có ${arrFoodData.length} Nhân viên</span>`
const food_main_bottom_container_items = document.querySelector('.food_main_bottom_container_items')
arrFoodData.map((item, index) => {
    htmlfood += `    <div class="food_main_bottom_container_item">
    <div style="display:flex;justify-content:space-between;width:100%"><img style="height:100px;width:100px;margin-left:20px;border-radius:150px" src="data:image/png;base64,${item.imgData}" alt=""> <img style="position:relative;z-index:1001;margin-top:10px;margin-right:20px;width:20px;align-self:flex-start;" src="../img/icon/more.png" alt=""></div>
    <div onclick="handleDelete(this,${index})" class="checkRemove"></div>
    <div class="title_food_container">
        <span>${item.nameFood}</span>
    </div>
    <div style="margin-left:20px">
    <span style="font-size:12px;font-family: Arial, Helvetica, sans-serif;">${item.employee_position}</span>
</div>
    <div class="title_food_container_employee" style="padding-bottom:30px">
   <button onclick="deleteempoly(${index})">Xóa</button> <button onclick="upEmployee(${index})">Sửa</button>
</div>

    </div>`


})
const deleteempoly = (i) => {
    const fill = arrFoodData.filter((item, index) => {
        return index !== i
    })
  
    let g= `<div style="position:absolute;border-radius:4px;background-color: #00933B;display:flex;justify-content: space-between;align-items: center;width: 300px;padding: 5px;left: 82%;top: 14%;">
    <div style="display:flex;justify-content: center;align-items: center;">
        <img style="width: 20px;" src="../img/icon/mdi_tick.png" /> 
        <span style="     font-family: Arial, Helvetica, sans-serif;color:white;margin-left:5px">Xóa thành công 1 nhân viên</span>
    </div>
    <span onclick="undoData()" style="text-decoration: underline;color: white;cursor: pointer;    font-family: Arial, Helvetica, sans-serif;">Hoàn tác</span>
    </div>`
    document.querySelector('.ptop').innerHTML=g
    setTimeout(() => {
        localStorage.setItem('employee', JSON.stringify(fill))
        window.location.reload()
    }, 2000)
}
document.querySelectorAll('.checkRemove').forEach(item => {
    item.classList.remove('active')
    item.setAttribute('style', 'z-index:-1')
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
    let g= `<div style="position:absolute;border-radius:4px;background-color: #00933B;display:flex;justify-content: space-between;align-items: center;width: 300px;padding: 5px;left: 82%;top: 14%;">
    <div style="display:flex;justify-content: center;align-items: center;">
        <img style="width: 20px;" src="../img/icon/mdi_tick.png" /> 
        <span style="color:white;margin-left:5px;    font-family: Arial, Helvetica, sans-serif;">Xóa thành công ${arrDelete.length} nhân viên</span>
    </div>
    <span onclick="undoData()" style="text-decoration: underline;color: white;cursor: pointer;    font-family: Arial, Helvetica, sans-serif;">Hoàn tác</span>
    </div>`
    document.querySelector('.ptop').innerHTML=g
    document.querySelector('.notiDelete').classList.add('active')

    const newArr = arrFoodData.filter((item, index) => {
        return !arrDelete.includes(index)
    })
   
    setTimeout(() => {
        localStorage.setItem('employee', JSON.stringify(newArr))
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
        <div style="display:flex;justify-content:space-between;width:100%"><img style="height:100px;width:100px;margin-left:20px;border-radius:150px" src="data:image/png;base64,${item.imgData}" alt=""> <img style="position:relative;z-index:1001;margin-top:10px;margin-right:20px;width:20px;align-self:flex-start;" src="../img/icon/more.png" alt=""></div>
        <div onclick="handleDelete(this,${index})" class="checkRemove"></div>
        <div class="title_food_container">
            <span>${item.nameFood}</span>
        </div>
        <div style="margin-left:20px">
        <span style="font-size:12px;font-family: Arial, Helvetica, sans-serif;">${item.employee_position}</span>
    </div>
        <div class="title_food_container_employee">
       <button >Xóa</button> <button class="upEmployee" onclick="upEmployee(${index})">Sửa</button>
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
let fileFood2 = null
let nameFood2 = null
let descripts22 = null
let employee_position2 = null
let changfile2 = null
let iUpdate = null
let upEmployee = (i) => {
    iUpdate = i
    document.querySelector('.popup_add2').classList.add('active')
    let updatehtml = `  <div class="popup_add_header">
    <h1 style="text-align:center">Sửa</h1>
</div>
<div class="popup_add_container">
<img style="border-radius:90px;width:100px;height:100px" src="data:image/png;base64,${arrFoodData[i].imgData}" alt="">

    <div style="align-self: start;margin-left: 8%;padding: 5px;">
        <label for="">Tên nhân viên</label>
    </div>
    <div style="width: 80%;">
        <input value="${arrFoodData[i].nameFood}" class="nameFood2" placeholder="Nhập họ tên" style="width:100%;padding: 5px;" type="text">
    </div>


    <div style="align-self: start;margin-left: 8%;padding: 5px;">
        <label for="">Nhâp mô tả</label>
    </div>
    <div style="width: 80%;">
        <input class="descripts22" placeholder="Nhập mô tả" style="width:100%;padding: 5px;" type="text">
    </div>

    <div style="align-self: start;margin-left: 8%;padding: 5px;">
        <label for="">Chức vụ</label>
    </div>

    <div style="width: 80%;">
        <input value="${arrFoodData[i].employee_position}" class="employee_position2" placeholder="Nhâp chức vụ" style="width:100%;padding: 5px;"
            type="text">
    </div>

</div>
<div style="width: 100%;display: flex;justify-content: center;margin-top: 25px; cursor: pointer;">
    <button
        style=" cursor: pointer;border-radius: 5px;margin:0 12px;border: none; padding: 10px 40px;background-color: #00933b47;">Hủy</button>
    <button onclick="UpdateFood()"
        style="cursor: pointer;border-radius: 5px; margin:0 12px;border: none; padding: 10px 40px;background-color: #00933ba3;">Sửa</button>
</div>`
    document.querySelector('.popup_add2').innerHTML = updatehtml

    nameFood2 = document.querySelector('.nameFood2')
    descripts22 = document.querySelector('.descripts22')
    employee_position2 = document.querySelector('.employee_position2')

}
const changFile2 = () => {
    const reader = new FileReader()
    reader.onload = (e) => {
        const base64 = window.btoa(e.target.result)
        fileFood2 = base64
    }
    reader.readAsBinaryString(document.querySelector('.fileFood2').files[0])
}
const UpdateFood = () => {
    const indexz = iUpdate
    console.log(indexz);
    arrFoodData.forEach((item, index) => {
        console.log(indexz === index);
        if (indexz === index) {
            item.nameFood = nameFood2.value
            item.employee_position = employee_position2.value
        }
        localStorage.setItem('employee', JSON.stringify(arrFoodData))
        window.location.reload()
    })
    console.log(arrFoodData);
}
document.addEventListener('click', (e) => {
    if (document.querySelector('.popup_add2') && !document.querySelector('.popup_add2').contains(e.target)) {
        document.querySelector('.popup_add2').classList.remove('active')
    }
}, true)
const handlehide = ()=>{
    document.querySelector('.popup_add').classList.remove('active')
    document.querySelector('.bg_food').classList.remove('active')
}
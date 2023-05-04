const fileFood = document.querySelector('.fileFood')
const nameFood = document.querySelector('.nameFood')
const descripts2 = document.querySelector('.descripts2')
const employee_position = document.querySelector('.employee_position')
let base64Data = ``
let arrFoodData = JSON.parse(localStorage.getItem('employee')) ? JSON.parse(localStorage.getItem('employee')) : []

const changFile = () => {
    const reader = new FileReader()
    reader.onload = (e) => {
        const base64 = window.btoa(e.target.result)
        base64Data = base64
    }
    reader.readAsBinaryString(fileFood.files[0])
}


const addFood = () => {

    const newData = { nameFood: nameFood.value, descripts2: descripts2.value, imgData: base64Data,employee_position:employee_position.value }
    arrFoodData.push(newData)
    localStorage.setItem('employee', JSON.stringify(arrFoodData))
    setTimeout(() => {
        window.location.reload()
    }, 1000)

}








let htmlfood = ``
const quantity = document.querySelector('.quantity')
quantity.innerHTML = `<span>Hiện có ${arrFoodData.length} Nhân viên</span>`
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
    <div class="title_food_container_employee">
   <button>Xóa</button> <button>Sửa</button>
</div>

    </div>`


})
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
    e.classList.add('active')
    arrDelete.push(i)

}
const handleDeleteicon = () => {
    document.querySelector('.deleteHandlefood').classList.toggle('active')

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
    document.querySelector('.notiDelete').innerHTML = `<h1>Đã xóa thành công ${arrDelete.length} nhân viên</h1>`
    document.querySelector('.notiDelete').classList.add('active')

    const newArr = arrFoodData.filter((item, index) => {
        return !arrDelete.includes(index)
    })
    localStorage.setItem('employee', JSON.stringify(newArr))
    setTimeout(() => {
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
       <button onclick="deleteEmployee(${index})">Xóa</button> <button>Sửa</button>
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
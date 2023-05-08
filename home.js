    // Lấy thời gian hiện tại
   // Lấy ngày hiện tại
   const sday = ['Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy', 'Chủ nhật'];
   const today = new Date();
   const daysSinceSunday = (today.getDay() + 1) % 7; // Số ngày chênh lệch tới Chủ nhật
   const lastSunday = new Date(today.getTime() - daysSinceSunday * 24 * 60 * 60 * 1000); // Ngày Chủ nhật gần đây nhất
   let arrDay = [];
   for (let i = 0; i < sday.length; i++) {
     // Tính số ngày chênh lệch giữa ngày hiện tại với ngày trong tuần
     const daysSinceDayOfWeek = (6 - i + today.getDay()) % 7;
     let dateOfDayOfWeek;
     try {
       dateOfDayOfWeek = new Date(today.getTime() - daysSinceDayOfWeek * 24 * 60 * 60 * 1000);
     } catch(error) {
       console.log(`Lỗi khi tính ngày của ${sday[i]}`, error);
       continue;
     }
     // Format ngày tháng năm cho ngày trong tuần
     const dayOfMonth = dateOfDayOfWeek.getDate();
     const month = dateOfDayOfWeek.getMonth() + 1;
     const year = dateOfDayOfWeek.getFullYear();
     
     arrDay.push(`${sday[i]} ${dayOfMonth}-${month}-${year}`)
   }
   

//Cricle
google.load("visualization", "1", { packages: ["corechart"] });
google.setOnLoadCallback(drawCharts);
function drawCharts() {
    
    const data1 = [
        ['Year', 'Số người mua'],
        ['Thứ 2', 23,],
        ['Thứ 3', 20,],
        ['Thứ 4', 104,],
        ['Thứ 5', 45,],
        ['Thứ 6', 70,],
        ['Thứ 7', 44,],
        ['Chủ nhật', 150,]
    ]
    const newArr = data1.map((item, index) => {
        if(item[0]&&index !==0){
       
            item[0] = arrDay[index-1]
        }
        return item
    })

    var data = google.visualization.arrayToDataTable(newArr);
    // ['Year', 'Nhiều người n'],
    // ['Trà sữa', 1000,],
    // ['Cơm gà', 1170,],
    // ['Trà xanh', 660,],
    // ['Cơm thịt nướng', 1030,],
    // ['Cơm rang dưa bò', 1030,],
    // ['Xoài lắc', 1030,],
    // ['Trà sữa', 1030,]
    var options = {
        legend: 'none',
        hAxis: { minValue: 0, maxValue: 7 },
        pointSize: 4,
        series: {
            0: { pointShape: 'circle', color: 'green', cursor: "pointer", },
            1: { pointShape: 'triangle' },
            2: { pointShape: 'square' },
            3: { pointShape: 'diamond' },
            4: { pointShape: 'star' },
            5: { pointShape: 'polygon' }
        },
        tooltip: {isHtml: true},
        vAxis: {
            gridlines: { count: 4 },
        }
    };
  
    var chart = new google.visualization.AreaChart(document.getElementById('chart_div'))
    chart.draw(data, options);

   



    // // pie chart data
    // var pieData = google.visualization.arrayToDataTable([
    //     ['Cơm gà', 'Page Hits'],
    //     ['Cơm rang dưa bò', 10],
    //     ['Trà sữa', 20],
    //     ['Trà xanh', 22],
    //     ['Mì xào', 35],
    //     ['Cơm sườn nướng', 60]
    // ]);
    // // pie chart options
    // var pieOptions = {
    //     backgroundColor: 'transparent',
    //     pieHole: 0.4,
    //     colors: ["cornflowerblue",
    //         "olivedrab",
    //         "orange",
    //         "tomato",
    //         "crimson",
    //         "purple",
    //         "turquoise",
    //         "forestgreen",
    //         "navy",
    //         "gray"],
    //     pieSliceText: 'value',
    //     tooltip: {
    //         text: 'value'
    //     },
    //     fontName: 'Open Sans',
    //     chartArea: {
    //         width: '100%',
    //         height: '94%'
    //     },
    //     legend: {
    //         textStyle: {
    //             fontSize: 13
    //         }
    //     }
    // };
    // // draw pie chart
    // var pieChart = new google.visualization.PieChart(document.getElementById('pie-chart'));
    // pieChart.draw(pieData, pieOptions);
}


// $('.detail').click(() => {
//     $('.cril').addClass('active');
//     $('.bg').addClass('active');
// })

// document.addEventListener('click', (e) => {

//     if ($('.cril.active') && !$('.cril').get(0).contains(e.target)) {
//         $('.cril').removeClass('active');
//         $('.bg').removeClass('active');
//     }
// }, true)
let arringredientData = JSON.parse(localStorage.getItem('ingredient')) ? JSON.parse(localStorage.getItem('ingredient')) : []
let arrEmployData = JSON.parse(localStorage.getItem('employee')) ? JSON.parse(localStorage.getItem('employee')) : []
let arrFoodData = JSON.parse(localStorage.getItem('foodData')) ? JSON.parse(localStorage.getItem('foodData')) : []
document.querySelector('.employsetting').innerHTML = `<span>${arrEmployData.length} nhân viên</span>`
document.querySelector('.foodsetting').innerHTML =`<span>${arrFoodData.length} món ăn</span>`
document.querySelector('.ingredientsetting').innerHTML =`<span>${arringredientData.length} nguyên liệu</span>`
let img = document.querySelectorAll("#image img")
let rasm1 = document.getElementById("rasm-1")
let rasm2 = document.getElementById("rasm-2")
let rasm3 = document.getElementById("rasm-3")
let rasm4 = document.getElementById("rasm-4")
img.forEach((item) => {
    console.log(item)
    console.log(item.src)
    let div = document.createElement("div")
    div.id = 'ota'
    div.style.width = '40%'
    div.style.margin = '0 auto'
    div.style.display = 'flex'
    div.style.justifyContent = 'space-around'
    div.style.alignItems = 'center'
    document.body.appendChild(div)
    item.addEventListener('click', () => {
        console.log("Ishladi")
        let src = item.src
        let img = document.createElement("img")
        img.src = src
        div.appendChild(img)
        let h1 = document.createElement("h1")
        h1.appendChild(document.createTextNode(" + "))
        div.appendChild(h1)
        let array = ['file:///C:/Users/DEFENDER/Desktop/Input/Uyin/Images/photo_2022-07-28_23-54-44.jpg', 'file:///C:/Users/DEFENDER/Desktop/Input/Uyin/Images/photo_2022-07-28_23-56-16.jpg' , 'file:///C:/Users/DEFENDER/Desktop/Input/Uyin/Images/photo_2022-07-28_23-56-24.jpg', 'file:///C:/Users/DEFENDER/Desktop/Input/Uyin/Images/photo_2022-07-28_23-56-35.jpg']
        console.log(array)
        let imge = document.createElement("img")
        let tanla = array[parseInt(Math.random() * 1200 % 4)]
        imge.src = tanla
        div.appendChild(imge)
        if(img.src === imge.src){
            console.log('Durrang')
            setTimeout(() => {
                alert("Natija durrang")
            }, 1000)
        }else if(img[0] === imge[1]){
            setTimeout(() => {
             alert("Yutqazdingiz")
            }, 1000)
        } else if(img[0] === imge[2]){
            setTimeout(() => {
                alert('Yutqazdingiz')
            })
        } else if(img[0] === imge[4]){
            setTimeout(() => {
                alert("Yutdingiz")
            }, 1000)
        }     
    })
})

let array1 = ['A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'G"', 'Z', 'CH', 'NING']
let array2 = ['Shohjahon', 'Messi' , 'Ronaldo', 'Benzema', 'Mbappe', 'Levandowski' , 'Halaand' ]
console.log(array1.concat(array2))
if(array1.concat(array2)){
    console.log(array2[3][0])
    let array = new Array()
    array.push(array2[3])
    array.push(array2[6])
    array.push(array2[1])
    array.push(array2[5])
    array.push(array2[2])
    array.push(array2[4])
    array.push(array2[0])
    console.log(array)
}
let arr = [5,6,4,3,7];
console.log('input: ' + arr);

let obj = arr.reduce((o, v, i) => { o[v] = v; return o; }, {});
arr = Object.keys(obj).map(num => parseInt(num));

// console.log('output: ' + arr);x
const text_top = document.getElementById('top')
const letter_top = text_top.textContent.split('')
text_top.textContent = ''

letter_top.forEach((letter)=> {
    const span = document.createElement('span')
    span.classList.add('effect', 'top')
    span.textContent = letter
    text_top.appendChild(span)
})

const text_bottom = document.getElementById('bottom')
const  letter_bottom = text_bottom.textContent.split('')
text_bottom.textContent = ''

letter_bottom.forEach((letter)=> {
    const span = document.createElement('span')
    span.classList.add('effect','bottom')
    span.textContent = letter
    text_bottom.appendChild(span)
})

const stroke_bottom = document.getElementById('bottom-stroke')
const  letter_bottom_stroke = 'DELIVERED TO YOU.'.split('')
stroke_bottom.textContent = ''

letter_bottom_stroke.forEach((letter)=> {
    const span = document.createElement('span')
    span.classList.add('select')
    span.textContent = letter
    stroke_bottom.appendChild(span)
})
const bottoms = document.querySelectorAll('.bottom')
const bottom_spans = document.querySelectorAll('.select')

    bottoms.forEach((bottom,index)=>{
        bottom.addEventListener('mouseover',()=>{
            if(window.scrollY<=5){
            bottom_spans[index].style.visibility = 'visible'
            }
        })
        bottom.addEventListener('mouseout',()=>{
            bottom_spans[index].style.visibility = 'hidden'
        })
})

const fruit_basket = document.getElementById("fruit_basket")
const text_box = document.getElementById('text-box')



const tops = document.querySelectorAll('.top')
const all_letters = document.querySelectorAll('.effect')
// let decor = setInterval(design, 1000);
// let i=0;
// function design(){
// if(i>=all_letters.length){

//     i=0;
// }
// if(i==tops.length){
//     all_letters[tops.length-1].style.color = 'white'
//     console.log(all_letters[tops.length-1])

// }
// if(i>=tops.length){
//     temp_index = i - tops.length
 
//     if(temp_index!==0){
//     bottom_spans[temp_index-1].style.visibility = 'hidden'
//     bottoms[temp_index-1].style.color = 'white'

//     }
//     i++
//     bottom_spans[temp_index].style.visibility = 'visible'
//     bottoms[temp_index].style.color = 'transparent'
// }
// else{
//     if(i!==0){
//     all_letters[i-1].style.color = 'white'
//     }
//     all_letters[i].style.color ='transparent'
//     i++
//     }
// }
// all_letters.forEach((letter)=>{
//     letter.addEventListener('mouseover',(event)=>{
//         clearInterval(decor)
//     })
//     letter.addEventListener('mouseout',(event)=>{
//         decor = setInterval(design, 1000);
//     })
// })
window.addEventListener('scroll',(event)=>{
    let value = window.scrollY

    text_box.style.flexDirection = window.scrollY>5? 'row': 'column'
    text_top.style.color = window.scrollY>5? 'transparent': 'white'
    text_bottom.style.color = window.scrollY>5? 'transparent': 'white'

    if(window.scrollY!==0){
    text_top.style.transform = `translateX(-${value+90-50}px)` 
    text_bottom.style.transform = `translateX(${value-50}px)` 
    }
    else{
    text_top.style.transform = `` 
    text_bottom.style.transform = `` 
    }

    fruit_basket.style.top = `${68-(value/5)}%`
    fruit_basket.style.transform = `translate(-50%,-50%) rotate(${value/2}deg)`
    console.log(window.scrollY)
})

let ol = document.querySelector('ol')

ol.addEventListener('click', (e)=> {
    console.log(ol.removeChild(e.target));
    // console.log(e.target);
})


let btn = document.querySelector('button')

btn.addEventListener('click',e=> {
    let para = document.createElement('p')
    para.innerText = 'Add New Think'
    ol.appendChild(para)
} )


// let div0 = document.createElement('div')
// div0.innerText = 'One'

// let div1 = document.createElement('div')
// div1.innerText = 'Two'
// div0.appendChild(div1)

// let div2 = document.createElement('div')
// div2.innerText = 'Three'
// div1.appendChild(div2)

// document.querySelector('body').appendChild(div0)

// div2.addEventListener('click', e=> {
//     console.log('Three clicked');
//     e.stopPropagation()
//     // e.stopImmediatePropagation()
// })

// div1.addEventListener('click', e=> {
//     console.log('two clicked');
// })
// div0.addEventListener('click', e=> {
//     console.log('one clicked');
// })


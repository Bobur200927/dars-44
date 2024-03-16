
// ? ================================== Brauzerda xotira tushunchasi ==================================

// ============================= Lokal xotira =============================

// localStorage.setItem('kalit', "ma'lumot") ---- ma'lumot saqlash
// localStorage.setItem('kalit', "ma'lumot2") ---- ma'lumotni o'zgartirish
// localStorage.setItem('kalit2', "ma'lumot") ---- yangi ma'lumot saqlash

// let h = localStorage.getItem('kalit') ----- ma'lumotni kalit orqali olish
// console.log(h);

// localStorage.removeItem('kalit') ---- ma'lumotni kalit orqali o'chirish
// localStorage.clear() ---- lokal xotirani tozalash



// ============================= Sessiya xotira =============================

// sessionStorage.setItem('abc', 'asd')
// console.log(sessionStorage.getItem('abc'));
// sessionStorage.removeItem('abc')
// sessionStorage.clear()

let cart = localStorage.getItem('products')
if (cart) {
    renderCart()
}else{
    localStorage.setItem('products', JSON.stringify([]))
}

function renderCart() {
    document.querySelector('ul').innerHTML = ''
    let p = JSON.parse(localStorage.getItem('products'))
    p.map((prd)=>{
        let li = document.createElement('li')
        li.innerText = prd.name + ' | Soni: ' + prd.count
        document.querySelector('ul').append(li)
    })
}
let product = {
    id: 1,
    name: 'Televizor',
    price: 15000000
}

let d = document.querySelector('button')
d.addEventListener('click', ()=>{
    let prd = {
        name: product.name,
        price: product.price,
        count: 1
    }

    let lp = JSON.parse(localStorage.getItem('products'))
    if(lp.length >= 1){
        lp.forEach(
            t=>{
                if(t.name === product.name){
                    t.count = t.count + 1
                }else{
                    lp.push(prd)
                }
            }
        )
    }else{
        lp.push(prd)
    }
    localStorage.setItem('products', JSON.stringify([...lp]))
    renderCart()
})
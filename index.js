
// id - только для уникальных элементов, как супер-продукт
// document.querySelector('#super-product-section');


const divBgWhite = document.createElement('div')
divBgWhite.classList.add('bg-white')
// document.body.append(divBgWhite)

const divThumb = document.createElement('div')
divThumb.classList.add('thumb')

// document.body.append(divThumb)

const divGrid = document.createElement('div')
divGrid.classList.add('grid-item', 'grid-item-catalog')
divGrid.append(divBgWhite)


// classList.add('название одного класса', '231453124')
// grid-item
// grid-item-catalog

// document.body.append(divGrid)

const imageSection2 = document.createElement('img');
imageSection2.setAttribute('src','../img/section_2/car.svg')
imageSection2.setAttribute('alt','Chair')
divThumb.append(imageSection2)

const productTitle = document.createElement('p')
productTitle.classList.add('grid-title')
productTitle.textContent = 'Парикмахерское кресло «Норм» гидравлическое'
divBgWhite.append(divThumb)
divBgWhite.append(productTitle)

const productPrice = document.createElement('p')
productPrice.classList.add('grid-price')
productPrice.textContent = '9 900 ₽'
divBgWhite.append(productPrice)

const productBtn = document.createElement('a')
productBtn.classList.add('grid-btn')
productBtn.setAttribute('href', '#')
productBtn.textContent = 'Купить'
divBgWhite.append(productBtn)
 
const productsGrid = document.querySelector('.grid')
productsGrid.append(divGrid)




// setAttribute('название атрибута', 'значение атрибута')


// append - метод любого HTML-элемента
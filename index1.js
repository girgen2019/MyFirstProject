// 0. id - string | number - должен быть всегда у каждого элемента в хранилище
// 1. image - string
// 2. title - string
// 3. price - number
// 4. currency - string


// setAttribute('название атрибута', 'значение атрибута')
// append - метод любого HTML-элемента

const products = [
    {
        image: '../img/section_2/car.svg',
        title: 'Парикмахерское кресло «Норм» гидравлическое',
        price: 300,
        currency: 'BYN',
        id: 1,
    },
    {
        image: '../img/section_2/car.svg',
        title: 'Парикмахерское кресло «Норм» гидравлическое',
        price: 310,
        currency: 'BYN',
        id: 2,
    },
    {
        image: '../img/section_2/car.svg',
        title: 'Парикмахерское кресло «Норм» гидравлическое',
        price: 320,
        currency: 'BYN',
        id: 3,
    },
    {
        image: '../img/section_2/car.svg',
        title: 'Парикмахерское кресло «Норм» гидравлическое',
        price: 330,
        currency: 'BYN',
        id: 4,
    }
]
//параметры для функции
products.forEach((product) => {
    const productGridHTML = createProductHTML()
    
    // productGridHTML.append(product.price)
    document.querySelector('.grid').append(productGridHTML(product.price))

})

function createProductHTML() {
    const divBgWhite = document.createElement('div')
    divBgWhite.classList.add('bg-white')

    const divThumb = document.createElement('div')
    divThumb.classList.add('thumb')

    const imageSection2 = document.createElement('img');
    imageSection2.setAttribute('src', '../img/section_2/car.svg')
    imageSection2.setAttribute('alt', 'Chair')
    divThumb.append(imageSection2)

    const productTitle = document.createElement('p')
    productTitle.classList.add('grid-title')
    productTitle.textContent = 'Парикмахерское кресло «Норм» гидравлическое'
    divBgWhite.append(divThumb)
    divBgWhite.append(productTitle)

    const productPrice = document.createElement('p')
    productPrice.classList.add('grid-price')
    productPrice.textContent = product.price 
    divBgWhite.append(productPrice)

    const productBtn = document.createElement('a')
    productBtn.classList.add('grid-btn')
    productBtn.setAttribute('href', '#')
    productBtn.textContent = 'Купить'
    divBgWhite.append(productBtn)

    const divGrid = document.createElement('div')
    divGrid.classList.add('grid-item', 'grid-item-catalog')
    divGrid.append(divBgWhite)

    return divGrid
}

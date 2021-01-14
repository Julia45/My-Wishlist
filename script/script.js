let originArrayOfPhones = [
  {
    "img": "assets/sm_a715_galaxya71_2ndwave_silver_rside_01.jpg",
    title: "SAMSUNG GALAXY 71",
    "price": "$280.00",
    id: "1"
  },
  {
    "img": "assets/apple_iphone_11_64gb_black_0_3.jpg",
    title: "HUAWEI SMART",
    "price": "$550.00",
    id: "2"
  },
  {
    "img": "assets/xiaomi_redmi_note_9_pro_664gb_interstellar_grey_01_2.jpg",
    title: "XIAOMI RESMI NOTE",
    "price": "$350.00",
    id: "3"
  },
  {
    "img": "assets/apple_iphone_11_64gb_black_0_3.jpg",
    title: "APPLE IPHONE 11",
    "price": "$280.00",
    id: "4"
  },
  {
    "img": "assets/samsung_galaxy_a71_black_07.jpg",
    title: "SAMSUNG GALAXY 44",
    "price": "$350.00",
    id: "5"
  },
  {
    "img": "assets/oppo_mona_right_side_black_01_1.jpg",
    title: "OPPO MONA BLACK",
    "price": "$350.00",
    id: "6"
  },
  {
    "img": "assets/samsung_galaxy_a31_prism_crush_black_07_1.jpg",
    title: "SAMSUNG XY 56",
    "price": "$399.00",
    id: "7"
  },
  {
    "img": "assets/samsung_galaxy_a31_prism_crush_red_07.jpg",
    title: "SAMSUNG GALAXY 31",
    "price": "$550.00",
    id: "8"
  },
  {
    "img": "assets/sm_a715_galaxya71_2ndwave_silver_rside_01.jpg",
    title: "SAMSUNG NOTE AA45",
    "price": "$280.00",
    id: "9"
  },
  {
    "img": "assets/apple_iphone_11_64gb_black_0_3.jpg",
    title: "APPLE DUA LIFE",
    "price": "$340.00",
    id: "10"
  },
  {
    "img": "assets/xiaomi_redmi_note_9_pro_664gb_interstellar_grey_01_2.jpg",
    title: "XIAOMI REDMI NOTE",
    "price": "$678.00",
    id: "11"
  },
  {
    "img": "assets/apple_iphone_11_64gb_black_0_3.jpg",
    title: "APPLE IPHONE 12",
    "price": "$580.00",
    id: "12"
  },
  {
    "img": "assets/samsung_galaxy_a71_black_07.jpg",
    title: "SAMSUNG GALA A71",
    "price": "$789.00",
    id: "13"
  },
  {
    "img": "assets/oppo_mona_right_side_black_01_1.jpg",
    title: "OPPO MONA REY12",
    "price": "$453.00",
    id: "14"
  },
  {
    "img": "assets/samsung_galaxy_a31_prism_crush_black_07_1.jpg",
    title: "SAMSUNG LEGASY A31",
    "price": "$889.00",
    id: "15"
  },
  {
    "img": "assets/samsung_galaxy_a31_prism_crush_red_07.jpg",
    title: "XIAOMI RED 34AQ",
    "price": "$999.00",
    id: "16"
  },
  {
    "img": "assets/sm_a715_galaxya71_2ndwave_silver_rside_01.jpg",
    title: "SAMSUNG DUO NOTE",
    "price": "$348.00",
    id: "17"
  },
  {
    "img": "assets/apple_iphone_11_64gb_black_0_3.jpg",
    title: "HUAWEI SMART AWE",
    "price": "$876.00",
    id: "18"
  },
  {
    "img": "assets/xiaomi_redmi_note_9_pro_664gb_interstellar_grey_01_2.jpg",
    title: "XIAOMI RESMI WHITE",
    "price": "$654.00",
    id: "19"
  },
  {
    "img": "assets/apple_iphone_11_64gb_black_0_3.jpg",
    title: "APPLE IPHONE XS",
    "price": "$321.00",
    id: "21"
  },
  {
    "img": "assets/samsung_galaxy_a71_black_07.jpg",
    title: "SAMSUNG LOAF",
    "price": "$812.00",
    id: "21"
  },
  {
    "img": "assets/oppo_mona_right_side_black_01_1.jpg",
    title: "OPPO MONA LISA",
    "price": "$934.00",
    id: "22"
  },
  {
    "img": "assets/samsung_galaxy_a31_prism_crush_black_07_1.jpg",
    title: "SAMSUNG LEGRAE",
    "price": "$745.00",
    id: "23"
  },
  {
    "img": "assets/samsung_galaxy_a31_prism_crush_red_07.jpg",
    title: "SAMSUNG ULTRA A00",
    "price": "$178.00",
    id: "24"
  },
  {
    "img": "assets/sm_a715_galaxya71_2ndwave_silver_rside_01.jpg",
    title: "SAMSUNG MYWORLD",
    "price": "$255.00",
    id: "25"
  },
  {
    "img": "assets/apple_iphone_11_64gb_black_0_3.jpg",
    title: "HUAWEI SMART XI",
    "price": "$333.00",
    id: "26"
  },
  {
    "img": "assets/xiaomi_redmi_note_9_pro_664gb_interstellar_grey_01_2.jpg",
    title: "XIAOMI CODE A12",
    "price": "$546.00",
    id: "27"
  },
  {
    "img": "assets/apple_iphone_11_64gb_black_0_3.jpg",
    title: "APPLE LEGEND 11",
    "price": "$444.00",
    id: "28"
  },
  {
    "img": "assets/samsung_galaxy_a71_black_07.jpg",
    title: "SAMSUNG GALAXY 71",
    "price": "$780.00",
    id: "29"
  },
  {
    "img": "assets/oppo_mona_right_side_black_01_1.jpg",
    title: "OPPO MONA BLACK",
    "price": "$888.00",
    id: "30"
  },
]

let arrayOfPhones = [...originArrayOfPhones]

// Phone Item Containers

function generateAllPhones(mainContainer, arrayOfElems) {
  for (let i = 0; i <= arrayOfElems.length - 1; i++) {
    let phoneItemContainer = document.createElement("div")
    phoneItemContainer.classList.add("col-xs-12", "col-sm-6", "col-lg-3", "phone-item", "fw-bold")

    let phoneItemWrapper = document.createElement("div")
    phoneItemWrapper.classList.add("phoneItemWrapper", "border", "mx-3", "my-3", "position-relative")

    let imageContainer = document.createElement("div")
    imageContainer.classList.add("image-container", "pt-4")
    phoneItemWrapper.append(imageContainer)

    let phoneImage = document.createElement("img");
    phoneImage.src = arrayOfElems[i].img
    imageContainer.append(phoneImage)

    let imageContainerOverlay = document.createElement("div")
    imageContainerOverlay.classList.add("img-overlay", "position-absolute")

    let removeButtonOverlay = document.createElement("button")
    removeButtonOverlay.innerHTML = "REMOVE FROM LIST"
    removeButtonOverlay.classList.add("buttonOverlay", "text-white", "border-light", "border-2")
    removeButtonOverlay.dataset.id = arrayOfElems[i].id
    removeButtonOverlay.addEventListener("click", removeItemFromList)
    imageContainerOverlay.append(removeButtonOverlay)
    phoneItemWrapper.append(imageContainerOverlay)

    let phoneInfoContainer = document.createElement("div")
    phoneInfoContainer.classList.add("phone-info-container")

    let dash = document.createElement("hr")
    dash.classList.add("phone-item", "dash", "text-danger")
    phoneInfoContainer.append(dash)

    let phoneTitle = document.createElement("p")
    phoneTitle.classList.add("text-center", "mt-3", "phone-title")
    phoneTitle.innerHTML = arrayOfElems[i].title
    phoneInfoContainer.append(phoneTitle)

    let phonePrice = document.createElement("p")
    phonePrice.classList.add("text-center", "text-danger", "mb-4")
    phonePrice.innerHTML = arrayOfElems[i].price
    phoneInfoContainer.append(phonePrice)

    let phoneActionsButtons = document.createElement("div")
    phoneActionsButtons.classList.add("cart-actions")

    let buyPhoneIconContainer = document.createElement("div")
    let buyPhoneIcon = document.createElement("i")
    buyPhoneIcon.classList.add("fas", "fa-shopping-cart", "border");
    buyPhoneIconContainer.append(buyPhoneIcon)

    let deletePhoneIconContainer = document.createElement("div")
    let deletePhoneIcon = document.createElement("i")
    deletePhoneIcon.classList.add("fas", "fa-trash-alt", "border");
    deletePhoneIcon.dataset.id = arrayOfElems[i].id
    deletePhoneIcon.addEventListener("click", removeItemFromList)
    deletePhoneIconContainer.append(deletePhoneIcon)

    buyPhoneIconContainer.append(buyPhoneIcon)
    phoneActionsButtons.append(buyPhoneIconContainer)
    phoneActionsButtons.append(deletePhoneIconContainer)
    phoneInfoContainer.append(phoneActionsButtons)
    phoneItemWrapper.append(phoneInfoContainer)
    phoneItemContainer.append(phoneItemWrapper)
    mainContainer.appendChild(phoneItemContainer)
  }
}

// Pagination


let currectPage = 1
let phonesPerPage = 8;

function createNumberOfPages() {
  let pageNum = Math.ceil(arrayOfPhones.length / phonesPerPage)
  let paginationContainer = document.querySelector(".pagination-container")
  paginationContainer.innerHTML = ""

  for (let i = 1; i <= pageNum; i++) {
    let pageElem = document.createElement("li");
    pageElem.classList.add("page-item", "mx-2")
    if (currectPage === i) {
      pageElem.classList.add("active")
    }
    let pageElemLink = document.createElement("a");
    pageElemLink.classList.add("page-link", "text-secondary")
    pageElemLink.innerHTML = [i]

    pageElem.append(pageElemLink)
    paginationContainer.append(pageElem)
  }
}

document.querySelector(".pagination-container").addEventListener("click", function (event) {
  if (event.target.classList.contains('page-link')) {    
    currectPage = +event.target.innerHTML;
    document.querySelector(".goods-wrapper").innerHTML = ""
    generatepartOfPhonesToShow(currectPage)
  } else {
    return
  }
});

function generatepartOfPhonesToShow(page) {
  let startIndex = (page - 1) * phonesPerPage;
  let endIndex = page * phonesPerPage
  let partOfPhonesToShow = arrayOfPhones.slice(startIndex, endIndex)

  if (!partOfPhonesToShow.length && page > 1) {
    currectPage = page - 1
    return generatepartOfPhonesToShow(currectPage)
  }
  generateAllPhones(document.querySelector(".goods-wrapper"), partOfPhonesToShow)
  createNumberOfPages()
}
generatepartOfPhonesToShow(currectPage)


function removeItemFromList(e) {
  let phoneID = e.target.dataset.id;
  arrayOfPhones = arrayOfPhones.filter((elem) => { return elem.id !== phoneID })
  document.querySelector(".goods-wrapper").innerHTML = ""
  generatepartOfPhonesToShow(currectPage)
}

// Filtering

let inPutFilter = document.querySelector(".filter-input")
let clearListButton = document.querySelector(".clear-filter")
clearListButton.disabled = true;


inPutFilter.addEventListener("input", function () {
  clearListButton.disabled = !inPutFilter.value;

  arrayOfPhones = originArrayOfPhones.filter((elem) => { return elem.title.toLowerCase().includes(inPutFilter.value.toLowerCase()) })
  document.querySelector(".goods-wrapper").innerHTML = ""
  generatepartOfPhonesToShow(currectPage)
})

clearListButton.addEventListener("click", function () {
  inPutFilter.value = "";
  clearListButton.disabled = true;
  document.querySelector(".goods-wrapper").innerHTML = ""
  arrayOfPhones = originArrayOfPhones
  generatepartOfPhonesToShow(currectPage)
})

let navBarToggler = document.querySelector(".navbar-toggler")
navBarToggler.addEventListener("click", function () {
  let menu = document.querySelector(".collapse ")
  menu.classList.toggle("show")
})

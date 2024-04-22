
  // Shop data
  const AgricultureProducts = [
     
  {
      title: "UREA",
      image: "https://th.bing.com/th/id/OIP.WsgNNVY1h80B-vsn34V9kgHaIS?rs=1&pid=ImgDetMain",
      provider: "Southern petrochemical industries",
      category: "Fertilizer",
      size: "45 kg"
  },
  
  {
      title: "SSP",
      image: "https://th.bing.com/th/id/R.6e7cce5e51a008443beb1dc1da2ffc98?rik=6q4fBNGKnpqamA&riu=http%3a%2f%2fwww.emundi.com%2fimages%2fdetailed%2f9%2fWhatsApp_Image_2021-12-21_at_2.31.47_PM.jpeg&ehk=04qWlO63HaSNA3jQaOaVcM3oFR6ZjuJQKkGaN4DiPqY%3d&risl=&pid=ImgRaw&r=0",
      provider: "Kothari Industrial Corporaion Ltd.",
      category: "Fertilizer",
      size: "50 kg"
  },
  {
      title: "DAP",
      image: "https://www.spic.in/wp-content/uploads/2021/10/Bharat-DAP-SPIC-DAP.png",
      provider: "Southern petrochemical industries",
      category: "Fertilizer",
      size: "50 kg"
  },
  {
      title: "SOIL CONDITIONER & BIOSTIMULANT ",
      image: "https://www.humintech.com/fileadmin/content_images/agriculture/products/liqhumus_liquid_18/EN_liqhumus_liquid_18/1_LiqHumus_Liquid_18_EN.png",
      provider: "LIQHUMUS® Liquid 18",
      category: "Fertilizer",
      size: "45 kg"
  },
  {
      title: "Shop 4",
      image: "https://2.bp.blogspot.com/-C8s-sJ7Gdtw/XIjh8bVBYjI/AAAAAAAAFvk/B1-wBJHdBcsR0XBxgkHI4vUzyp-ylwYRwCLcBGAs/w1200-h630-p-k-no-nu/ayurvedalaya-medicine-shop-bannerghatta-road-bangalore-ayurvedic-medicine-shops-3vx9zbx.jpg",
      provider: "Southern petrochemical industries",
      category: "Fertilizer",
      size: "45 kg"
  }
  ];

  // Function to generate card HTML for a shop
  function generateProductCardHTML(product) {
      return `
          <div class="card mx-2" style="width: 18rem;">
            <img src="${product.image}" class="card-img-top img-fluid" style="max-width: 100%; height: 350px; max-height: 300px;" alt="${product.title}">
              <div class="card-body"   style="background-color:#f0f0f0;color:black; padding: 15px; border-radius: 0 0 10px 10px;">
                  <h5 class="card-title">${product.title}</h5>
                  <p class="card-text">Location: ${product.provider}</p>
                  <p class="card-text">Category: ${product.category}</p>
                  <p class="card-text"> ${product.size}</p>
                  <a href="/products" class="card-text" style="display: inline-block; padding: 0.8em 1.6em; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 0.4em; transition: background-color 0.3s, transform 0.2s; font-size: 1em; cursor: pointer;">
  View Product
</a>

                 

              </div>
          </div>
      `;
  }

  // Function to generate slideshow HTML for mobile devices
  function generateProductSlideshowHTML() {
      let slideshowHTML = '';
      AgricultureProducts.forEach((product, index) => {
          slideshowHTML += `
              <div class="mySlides1 card mx-2">
                  <img src="${product.image}" class="card-img-top img-fluid" style="max-width: 100%; height: 350px; max-height: 300px;" alt="${product.title}">
                  <div class="text"  style="background-color:#f0f0f0;color:black; padding: 15px; border-radius: 0 0 10px 10px;">
                      <h5 class="card-title" style="color: #007bff;">${product.title}</h5>
                      <p class="card-text">By ${product.provider}</p>
                      <p class="card-text">Category: ${product.category}</p>
                      <p class="card-text"> ${product.size} </p>
                      <a href="/products" class="card-text" style="display: inline-block; padding: 0.8em 1.6em; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 0.4em; transition: background-color 0.3s, transform 0.2s; font-size: 1em; cursor: pointer;">
  View Product
</a>
                     

                  </div>
              </div>
          `;
      });
      return slideshowHTML;
  }

  // Insert cards for larger devices
  const largeDeviceCardsContainerFertilizer = document.getElementById('largeDeviceCardsFertilizer');
    AgricultureProducts.slice(0, 4).forEach(product => {
        largeDeviceCardsContainerFertilizer.innerHTML += generateProductCardHTML(product);
    });
  // Insert slideshow for mobile devices
  const mobileDeviceSlideshowContainerFertilizer = document.getElementById('mobileDeviceSlideshowFertilizer');
    mobileDeviceSlideshowContainerFertilizer.innerHTML = generateProductSlideshowHTML();

    let currentSlideIndexFertilizer = 0;

function displaySlidesFertilizer() {
    let slideElements = document.getElementsByClassName("mySlides1");
    let dotElements = document.getElementsByClassName("dot1");

    for (let i = 0; i < slideElements.length; i++) {
        slideElements[i].style.display = "none";
    }

    currentSlideIndexFertilizer++;

    if (currentSlideIndexFertilizer > slideElements.length) {
        currentSlideIndexFertilizer = 1;
    }

    for (let i = 0; i < dotElements.length; i++) {
        dotElements[i].className = dotElements[i].className.replace(" active1", "");
    }

    slideElements[currentSlideIndexFertilizer - 1].style.display = "block";
    dotElements[currentSlideIndexFertilizer - 1].className += " active1";
}

// Next/previous controls for Fertilizer
function plusSlidesFertilizer(n) {
    displaySlidesFertilizer(currentSlideIndexFertilizer -= n);
}

// Thumbnail image controls for Fertilizer
function selectSlideFertilizer(n) {
    displaySlidesFertilizer(currentSlideIndexFertilizer = n - 1); // Subtract 1 to match array index
}

// Initialize the slideshow for Fertilizer
displaySlidesFertilizer();



























const shops = [
    {
        title: "SREE VELAVAN ENTERPRISES",
        image: "https://lh3.googleusercontent.com/p/AF1QipOfLA67Yx7jGlSsdVPyTDm2OvRnlms18iFI0y2a=s1360-w1360-h1020",
        location: "Salem",
        currentLocation: "25 km away",
        verified: true,
        link:"/shop-1"
    },
    {
        title: "Agni Fertilisers and Chemicals",
        image: "https://lh3.googleusercontent.com/p/AF1QipPXyzKqo8zxCfR0LMV8f5bM2HUbQhc9p53Ua060=s1360-w1360-h1020",
        location: "Salem",
        currentLocation: "10 km away",
        verified: false,
        link:"/shop-2"
    },
    {
        title: "FACT Agro Service Centre",
        image: "https://lh3.googleusercontent.com/p/AF1QipPFP4QM9wbNChdrsjgb7bW0UqE2teEmQvzDmXgZ=s1360-w1360-h1020",
        location: "Salem",
        currentLocation: "1 km away",
        verified: true,
        link:"/shop-3"
    },
    {
        title: "Universal Fertiliser Corporation",
        image: "https://zamorinholidays.com/wp-content/uploads/2019/02/kdhp-tea-online-300x300.jpg",
        location: "Salem",
        currentLocation: "1 km away",
        verified: false,
        link:"/shop-4"
    },
    {
        title: "Shop 5",
        image: "https://2.bp.blogspot.com/-C8s-sJ7Gdtw/XIjh8bVBYjI/AAAAAAAAFvk/B1-wBJHdBcsR0XBxgkHI4vUzyp-ylwYRwCLcBGAs/w1200-h630-p-k-no-nu/ayurvedalaya-medicine-shop-bannerghatta-road-bangalore-ayurvedic-medicine-shops-3vx9zbx.jpg",
        location: "Example City",
        currentLocation: "1 km away",
        verified: false
    }
    // Add more shop data as needed
];

// Function to generate card HTML for a shop
function generateCardHTML(shop) {
    return `
    <div class="card mx-2" style="width: 18rem;">
    <img src="${shop.image}" class="card-img-top img-fluid" style="max-width: 100%; height: 350px; max-height: 300px;" alt="${shop.title}">

    <div class="card-body" style="background-color:#f0f0f0;color:black; padding: 15px; border-radius: 0 0 10px 10px;">
    <h5 class="card-title"><a href="#" onclick="redirectTo('${shop.link}')" style="text-decoration: none;">${shop.title}</a></h5>

        <p class="card-text">Location: ${shop.location}</p>
        <p class="card-text">Current Location: ${shop.currentLocation}</p>
        <p class="card-text">Verified: ${shop.verified ? 'Yes' : 'No'}</p>
      
    </div>
</div>

    `;
}

// Function to generate slideshow HTML for mobile devices
function generateSlideshowHTML() {
let slideshowHTML = '';
shops.forEach((shop, index) => {
    slideshowHTML += `
        <div class="mySlides card mx-2">
            <img src="${shop.image}" class="card-img-top img-fluid" style="max-width: 100%; height: 350px; max-height: 300px;" alt="${shop.title}">
            <div class="text"  style="background-color:#f0f0f0;color:black; padding: 15px; border-radius: 0 0 10px 10px;">
            <h5 class="card-title"><a href="${shop.link}"  style="text-decoration: none;">${shop.title}</a></h5>
                <p class="card-text">Location: ${shop.location}</p>
                <p class="card-text">Current Location: ${shop.currentLocation}</p>
                <p class="card-text">Verified: ${shop.verified ? 'Yes' : 'No'}</p>
            </div>
        </div>
    `;
});
return slideshowHTML;
}


// Insert cards for larger devices
const largeDeviceCardsContainer2 = document.getElementById('largeDeviceCards');
shops.slice(0, 4).forEach(shop => {
largeDeviceCardsContainer2.innerHTML += generateCardHTML(shop);
});


// Insert slideshow for mobile devices
const mobileDeviceSlideshowContainer = document.getElementById('mobileDeviceSlideshow');
mobileDeviceSlideshowContainer.innerHTML = generateSlideshowHTML();

// JavaScript for the slideshow
let slideIndex = 0;


function showSlides() {
let i;
let slides = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");

for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
}

slideIndex++;

if (slideIndex > slides.length) {
    slideIndex = 1;
}

for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
}

slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex -= n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n - 1); // Subtract 1 to match array index
}

// Initialize the slideshow
showSlides();

function redirectTo(url) {
    window.location.href = url;
}
































    // Pesticide data
    const PesticideProducts = [
        {
            title: "Tafgor",
            image: "https://5.imimg.com/data5/ZT/DY/PL/GLADMIN-3061/tafgor-dimethoate-30-ec-insecticide-500x500.jpg",
            provider: "Tata Private LTD",
            category: "Insecticide",
            size: "1 L",
            price:"₹100"
        },
        {
            title: "Herbicide B",
            image: "https://kissanemart.com/storage/tata-panida-grande-herbicide-800x800.jpg",
            provider: "TATA Private Ltd",
            category: "Herbicide",
            size: "250 ml",
            price:"₹100"
        },
        {
            title: "Fungicide C",
            image: "https://images.homedepot-static.com/productImages/9e28bcf0-3cf0-4919-9d9c-9636cbc30561/svn/dr-earth-organic-lawn-disease-control-1023x-64_1000.jpg",
            provider: "Dr.EARTH",
            category: "Fungicide",
            size: "750 ml",
            price:"₹100"
        },
        {
            title: "Rodenticide D",
            image: "https://static.grainger.com/rp/s/is/image/Grainger/55MJ95_AS01",
            provider: "HAWK SOFT BAIT",
            category: "Rodenticide",
            size: "3.6 kg",
            price:"₹100"
        }
    ];

    // Function to generate card HTML for a pesticide
    function generatePesticideCardHTML(pesticide) {
        return `
            <div class="card mx-2" style="width: 18rem;">
              <img src="${pesticide.image}" class="card-img-top img-fluid" style="max-width: 100%; height: 350px; max-height: 300px;"  alt="${pesticide.title}">
                <div class="card-body"  style="background-color:#f0f0f0;color:black;padding: 15px; border-radius: 0 0 10px 10px;">
                    <h5 class="card-title" >${pesticide.title}</h5>
                    <p class="card-text">Provider: ${pesticide.provider}</p>
                    <p class="card-text">Category: ${pesticide.category}</p>
                    <p class="card-text">Size: ${pesticide.size}</p>
                    <p class="card-text">Price : ${pesticide.price}</p>
                    <a href="/products" class="card-text" style="display: inline-block; padding: 0.8em 1.6em; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 0.4em; transition: background-color 0.3s, transform 0.2s; font-size: 1em; cursor: pointer;">
                    View Product
                  </a>

                </div>
            </div>
        `;
    }

    // Function to generate slideshow HTML for mobile devices
    function generatePesticideSlideshowHTML() {
        let slideshowHTML = '';
        PesticideProducts.forEach((pesticide, index) => {
            slideshowHTML += `
                <div class="mySlides2 card mx-2">
                    <img src="${pesticide.image}"  class="card-img-top img-fluid" style="max-width: 100%; height: 350px; max-height: 300px;" alt="${pesticide.title}">
                    <div class="text" style="background-color:#f0f0f0   ; padding: 15px; border-radius: 0 0 10px 10px;">
                        <h5 class="card-title" style="color: #007bff;">${pesticide.title}</h5>
                        <p class="card-text">By ${pesticide.provider}</p>
                        <p class="card-text">Category: ${pesticide.category}</p>
                        <p class="card-text">Size: ${pesticide.size}</p>
                        <p class="card-text">Price : ${pesticide.price}</p>
                        <a href="/products" class="card-text" style="display: inline-block; padding: 0.8em 1.6em; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 0.4em; transition: background-color 0.3s, transform 0.2s; font-size: 1em; cursor: pointer;">
  View Product
</a>

                    </div>
                </div>
            `;
        });
        return slideshowHTML;
    }

    // Insert cards for larger devices
    const largeDeviceCardsContainer = document.getElementById('largeDeviceCards2');
    PesticideProducts.slice(0, 4).forEach(pesticide => {
        largeDeviceCardsContainer.innerHTML += generatePesticideCardHTML(pesticide);
    });

    // Insert slideshow for mobile devices
    const mobileDeviceSlideshowContainer2 = document.getElementById('mobileDeviceSlideshow2');
    mobileDeviceSlideshowContainer2.innerHTML = generatePesticideSlideshowHTML();

    // Updated slideshow functions
    let currentPesticideSlideIndex = 0;

    function displayPesticideSlides() {
        let slideElements = document.getElementsByClassName("mySlides2");
        let dotElements = document.getElementsByClassName("dot2");

        for (let i = 0; i < slideElements.length; i++) {
            slideElements[i].style.display = "none";
        }

        currentPesticideSlideIndex++;

        if (currentPesticideSlideIndex > slideElements.length) {
            currentPesticideSlideIndex = 1;
        }

        for (let i = 0; i < dotElements.length; i++) {
            dotElements[i].className = dotElements[i].className.replace(" active2", "");
        }

        slideElements[currentPesticideSlideIndex - 1].style.display = "block";
        dotElements[currentPesticideSlideIndex - 1].className += " active2";
    }

    // Next/previous controls
    function navigatePesticideSlides(n) {
        displayPesticideSlides(currentPesticideSlideIndex -= n);
    }

    // Thumbnail image controls
    function selectPesticideSlide(n) {
        displayPesticideSlides(currentPesticideSlideIndex = n - 1); // Subtract 1 to match array index
    }

    // Initialize the slideshow
    displayPesticideSlides();
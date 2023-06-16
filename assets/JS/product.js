phone_number = "16892565508"
ip_addr = ""
ip_country_code = ""


products_list = {
    "products" : [
        {
            "id" : 1,
            "name" : "Linkedin Carrier Premium - 6 months",
            "selected_countries" : ["IN" , "Default"],
            "original_price" : {
                "IN" : "Rs 9000",
                "Default" : "$180"
            },
            "price" : {
                "IN" : "Rs 800",
                "Default" : "$20"
            },
            "img" : "./assets/images/linkedin-01.jpg",
            "whatsapp" : {
                "number" : phone_number,
                "text" : "I want to Buy Linkedin Carrier Premium."
            }
        },
        {
            "id" : 2,
            "selected_countries" : ["IN"],
            "name" : "Lenskart Gold - 1 year",
            "original_price" : {
                "IN" : "Rs 700",
                "Default" : "$50"
            },
            "price" : {
                "IN" : "Rs 29",
                "Default" : "$2"
            },
            "img" : "./assets/images/lenskart-01.jpg",
            "whatsapp" : {
                            "number" : phone_number,
                            "text" : "I want to Buy Lenskart Gold - 1 year."
                        }
        },
        {
            "id" : 1,
            "name" : "Pharmeasy - 6 months",
            "original_price" : "999",
            "price" : "25",
            "img" : "./assets/images/pharmeasy-01.png",
            "whatsapp" : {
                "number" : phone_number,
                "text" : "I want to Buy Pharmeasy - 6 months."
                        }
        },
        {
            "id" : 1,
            "name" : "Eros Now - 3 months",
            "selected_countries" : ["IN"],
            "original_price" : {
                "IN" : "Rs 300",
                "Default" : "$80"
            },
            "price" : {
                "IN" : "Rs 29",
                "Default" : "$80"
            },
            "img" : "./assets/images/erosnow-01.png",
            "whatsapp" : {
                "number" : phone_number,
                "text" : "I want to Buy Eros Now - 3 months."
            }
        },
        {
            "id" : 1,
            "name" : "Discovery Plus - 3 months",
            "selected_countries" : ["IN"],
            "original_price" : {
                "IN" : "Rs 600",
                "Default" : "$80"
            },
            "price" : {
                "IN" : "Rs 99",
                "Default" : "$80"
            },
            "img" : "./assets/images/discovery-plus-01.jpg",
            "whatsapp" : {
                            "number" : phone_number,
                            "text" : "I want to Buy Discovery Plus - 3 months."
            }
        },
        {
            "id" : 1,
            "name" : "Youtube Premium - 6 months",
            "selected_countries" : ["IN" , "Default"],
            "original_price" : {
                "IN" : "Rs 599",
                "Default" : "$80"
            },
            "price" : {
                "IN" : "Rs 399",
                "Default" : "$8"
            },
            "img" : "./assets/images/youtube-premium-01.jpg",
            "whatsapp" : {
                "number" : phone_number,
                "text" : "I want to Buy Youtube Premium - 6 months."
            }
        }
    ]
};


function update_all_product() {
    console.log("Run");
    plist = document.getElementById("product-list");
    plist.innerHTML = "";
    
    elem = ""
    if (ip_country_code != "") {
        for( var i=0; i<products_list["products"].length; i++ ) {
            if ( products_list['products'][i]["selected_countries"]?.includes(ip_country_code) == false) {
                ip_country_code = "Default";
            }
            if ( products_list['products'][i]["selected_countries"]?.includes(ip_country_code) ) {
                wa_link = 'https://wa.me/'+ products_list["products"][i]["whatsapp"]["number"] +'?text=' + products_list["products"][i]["whatsapp"]["text"];
                wa_link = encodeURI(wa_link);
                original_price = products_list['products'][i]['original_price'][ip_country_code];
                price = products_list['products'][i]['price'][ip_country_code];
                elem += '<li class="col-3 col-md-3"><div class="product-card"><div class="card-banner"><div class="clearfix mb-1 pe-3"></div><img style="width: 90%; height: 90%; border-radius: 10px; padding: 3px;" src="'+ products_list['products'][i]['img'] +'" alt=""  class="img-fluid w-75"/><div class="card-badge">New</div></div><div class="card-body"><div class="mb-3"><a class="card-title"><a class="title-text" href="#" > '+ products_list['products'][i]['name'] +' </a></a><div class="star"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon> <span>(5)</span></div><div class="card-price"><data style="color: red;" value="">Original Price '+ original_price +' Rs</data><data value="">Rs '+ price +'</data></div><a id="whatsapp-btn" name="whatsapp-btn" class="wa-button" target="_blank" href="'+wa_link+'" type="submit"><img src="assets/images/whatsapp.svg" alt="Icone Whatsapp"><span>Buy using Whatsapp</span></a></div></div></div></li>';
                // elem += '<li class="col-3 col-md-3"><div class="product-card"><div class="card-banner"><div class="clearfix mb-1 pe-3"><span class="float-end"><i class="bi bi-heart heartcard"></i></span></div><img style="width: 90%; height: 90%; border-radius: 10px; padding: 3px;" src="'+ products_list['products'][i]['img'] +'" alt=""  class="img-fluid w-75"/><div class="card-badge">New</div></div><div class="card-body"><div class="mb-3"><a class="card-title"><a class="title-text" href="#" > '+ products_list['products'][i]['name'] +' </a></a><div class="star"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon> <span>(5)</span></div><div class="card-price"><data style="color: red;" value="">Original Price '+ products_list['products'][i]['original_price'] +' Rs</data><data value="">Rs '+ products_list['products'][i]['price'] +'</data></div><a id="whatsapp-btn" name="whatsapp-btn" class="wa-button" target="_blank" href="'+wa_link+'" type="submit"><img src="assets/images/whatsapp.svg" alt="Icone Whatsapp"><span>Buy using Whatsapp</span></a></div></div></div></li>';
            }
        }
    }
    
    plist.innerHTML = elem;
}


// fetch('http://ip-api.com/json/?fields=57347')
fetch('https://ipwho.is/?lang=en')
  .then(response => {
    console.log("Res :-")
    response.json().then(
        d=> {
            ip_addr = d['ip'];
            ip_country_code = d["country_code"];
            update_all_product();
            console.log(d);
        });
})
.then(data => {
    // data part    
  })
  .catch(error => {
    //handle error
  });

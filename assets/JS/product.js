
function update_all_product() {
    console.log("Run");
    plist = document.getElementById("product-list");
    plist.innerHTML = "";
    
    elem = ""
    for( var i=0; i<products_list["products"].length; i++ ) {
        wa_link = 'https://wa.me/'+ products_list["products"][i]["whatsapp"]["number"] +'?text=' + products_list["products"][i]["whatsapp"]["text"];
        wa_link = encodeURI(wa_link);
        elem += '<li class="col-3 col-md-3"><div class="product-card"><div class="card-banner"><div class="clearfix mb-1 pe-3"></div><img style="width: 90%; height: 90%; border-radius: 10px; padding: 3px;" src="'+ products_list['products'][i]['img'] +'" alt=""  class="img-fluid w-75"/><div class="card-badge">New</div></div><div class="card-body"><div class="mb-3"><a class="card-title"><a class="title-text" href="#" > '+ products_list['products'][i]['name'] +' </a></a><div class="star"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon> <span>(5)</span></div><div class="card-price"><data style="color: red;" value="">Original Price '+ products_list['products'][i]['original_price'] +' Rs</data><data value="">Rs '+ products_list['products'][i]['price'] +'</data></div><a id="whatsapp-btn" name="whatsapp-btn" class="wa-button" target="_blank" href="'+wa_link+'" type="submit"><img src="assets/images/whatsapp.svg" alt="Icone Whatsapp"><span>Buy using Whatsapp</span></a></div></div></div></li>';
        // elem += '<li class="col-3 col-md-3"><div class="product-card"><div class="card-banner"><div class="clearfix mb-1 pe-3"><span class="float-end"><i class="bi bi-heart heartcard"></i></span></div><img style="width: 90%; height: 90%; border-radius: 10px; padding: 3px;" src="'+ products_list['products'][i]['img'] +'" alt=""  class="img-fluid w-75"/><div class="card-badge">New</div></div><div class="card-body"><div class="mb-3"><a class="card-title"><a class="title-text" href="#" > '+ products_list['products'][i]['name'] +' </a></a><div class="star"><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star-half"></ion-icon> <span>(5)</span></div><div class="card-price"><data style="color: red;" value="">Original Price '+ products_list['products'][i]['original_price'] +' Rs</data><data value="">Rs '+ products_list['products'][i]['price'] +'</data></div><a id="whatsapp-btn" name="whatsapp-btn" class="wa-button" target="_blank" href="'+wa_link+'" type="submit"><img src="assets/images/whatsapp.svg" alt="Icone Whatsapp"><span>Buy using Whatsapp</span></a></div></div></div></li>';
    }
    
    plist.innerHTML = elem;

}

update_all_product();
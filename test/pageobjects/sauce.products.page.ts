import Page from "./page";

class productsPage extends Page{

    get productsLabel(){
        return $(".title")
    }

    get shopcartlink(){
        return $(".shopping_cart_link")
    }
}

export default new productsPage()
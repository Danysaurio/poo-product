class Product {
    constructor(name, price, year){
        this.name = name;
        this.price = price;
        this.year = year;
    }
}
class UI {
    addproduct(product){
        const productList = document.getElementById("product-list");
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name}
                    <strong>Price</strong>: ${product.price}
                    <strong>year</strong>: ${product.year}
                    <button class="btn btn-danger" name="delete">Delete</button>
                </div>
            </div>  
        `;
        productList.appendChild(element);
        this.resetForm();
    }
    resetForm(){
        document.getElementById('product-form').reset();
    }
    deleteProduct(element){
        if(element.name=="delete"){
            element.parentElement.parentElement.parentElement.remove();
            this.showMessage("Product delete success", "info")

        }
    }
    showMessage(message, type){
        const div = document.createElement("div");
        div.className = `alert mt-3 alert-${type}`
        div.appendChild(document.createTextNode(message));
        //showing in DOM
        const container = document.querySelector(".container")
        const app = document.querySelector("#app")
        container.insertBefore(div,app);
        setTimeout(()=>{
            document.querySelector(".alert").remove();
        },3000)
    }
}
//DOM EVENTS
document.getElementById("product-form")
    .addEventListener('submit',(e)=>{
        e.preventDefault();

        const name = document.getElementById('name').value;
        const price = document.getElementById('price').value;
        const year = document.getElementById('year').value;
        const product = new Product(name,price,year)
        const ui = new UI();

        if(!name|| !price || !year){
            ui.showMessage("Complete fields pleace", "warning")
            return
        }
            
        ui.addproduct(product);
        ui.showMessage("Product add success", "success")

})
document.getElementById("product-list").addEventListener("click", (e)=>{
    const ui = new UI;
    ui.deleteProduct(e.target)
})
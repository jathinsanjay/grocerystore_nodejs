let groceries=[{item:"Rice",
            id:'1',
        price:'45rs/kg'}, {
            item:"Wheat",
        id:'2',
    price:'50rs/kg'},
    {
        item:"Palmoilen",
    id:'3',
price:'110rs/lit'},     {
    item:"Besan flour",
id:'4',
price:'60rs/kg'},     {
    item:"sugar",
id:'5',
price:'40rs/kg'}]
let cart=[]


let prompt=require("prompt-sync")();
let main=()=>{
    console.log("1.Add an item");
    console.log("2.Delete the item ");
    console.log("3.modify item");
    console.log("4.change the ID");
    console.log("5.Change the price");
    console.log("6.Add to cart")
    let opt=prompt("Enter the operation  to be done:")
    switch(opt){
        case "1":
            
            additems();
            break;
        case "2":
            deleteitems();
            break;
        case "3":
            modify();
        case "4":
            changeid();    
        case "5":
            changeprice();  
        case "6":
            addtocart();      

    }


}
function addtocart(){
  console.log(groceries)
    let id1=prompt("Enter the id of item : ");
    const index=groceries.findIndex((item)=>item.id==id1)
    cart.push(groceries[index]);
    kart();
    function kart(){
        console.log(`items in your cart are \n `);
        
        for(let i=0;i<cart.length;i++){
            console.log(` ${cart[i].item}----${cart[i].price} \n`)

        }
    }
    

}
function changeid(){
    let previd=prompt("Enter the ID: ");
    const index=groceries.findIndex((item)=>item.id==previd)
    let newid=prompt("Enter the New ID : ")
    groceries[previd].id=newid;
    console.log(groceries);
}
function changeprice(){
    let id1=prompt("Enter the id : ");
    const index=groceries.findIndex((item)=>item.id==id1)
    let newprice=prompt("Enter the new price: ")
    groceries[index].price=newprice;
    console.log(groceries)
}
function deleteitems(){
  let id1=prompt("Enter the ID of item to be deleted: " )
  const index=groceries.findIndex((item)=>item.id==id1)

  
 groceries.splice(index,1)
  

  console.log(groceries)


}
main();
function modify(){
    let id1=prompt("Enter the ID:");
    let iname=prompt(`Rename of item of id ${id1}: `);
    let price=prompt(`Reenter the price of id ${id1}: `);
    const index=groceries.findIndex((item)=>item.id==id1)

    groceries[id1].item=iname;
    groceries[id1].price=price;
    console.log(groceries)


}
function additems(){
    let id=prompt("Enter the ID:");
    let name=prompt("Enter the name:");
    let price= prompt("Enter the price:");
    let item={item:name,id:id,price:price}
    groceries.push(item);
    console.log(groceries)
    
}





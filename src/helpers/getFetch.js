const productos = [
    {id: 1,categoria:"especiales","stock": 10,title: "Chocolate Amargo con sal",price: 150,imagenes: "https://res.cloudinary.com/djucj1si8/image/upload/v1639578910/chocoamargoconsal_lwxqhf.jpg" },
    {id: 2,categoria:"especiales","stock": 10,title: "Chocolate Amargo con te",price: 150,imagenes:"https://res.cloudinary.com/djucj1si8/image/upload/v1639578910/chocoamargoconte_fvc8sz.jpg" },
    {id: 3,categoria:"especiales","stock": 10,title: "Chocolate Amargo sin azucar",price: 150,imagenes: "https://res.cloudinary.com/djucj1si8/image/upload/v1639578910/chocoamargosinazucar_b5ixze.jpg"},
    {id: 4,categoria:"blancos","stock": 10,title: "Chocolate Blanco",price: 150,imagenes:"https://res.cloudinary.com/djucj1si8/image/upload/v1639578910/chocoblanco_otmcrs.jpg" },
    {id: 5,categoria:"blancos","stock": 10,title: "Chocolate Blanco con nueces",price: 150,imagenes:"https://res.cloudinary.com/djucj1si8/image/upload/v1639578976/cholate-blanco-con-almendras1-7b8751d7519572934f16001100077671-640-0_hftzbw.jpg" },
    {id: 6,categoria:"leche","stock": 10,title: "Chocolate con Leche",price: 150,imagenes: "https://res.cloudinary.com/djucj1si8/image/upload/v1639578910/chocolateconleche_yjydyq.jpg"},
    {id: 7,categoria:"leche","stock": 10,title: "Chocolate con Leche y almendras",price: 150,imagenes: "https://res.cloudinary.com/djucj1si8/image/upload/v1639578911/chocolecheconalmendras_lui98y.jpg"}
];//

export const getFetch = new Promise((resolve)=>{
     // acciones pueden ser o no asincronícas setTime
     setTimeout(()=>{
         resolve(productos)
     }, 3000)
}) // instanciar un objeto 

import {ReactNode, useState} from "react";
import './page.css'
    function SearchBar({handleChange,message,checked}:{handleChange:React.ChangeEventHandler,message:string,checked:boolean}) {

        return (
            <form id={"search"}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            <input onChange={handleChange} id={"searchBar"} type={"text"} value={message}
                                   placeholder={"Search..."}/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label>
                                <input type={"checkbox"} id={"checkBox"} checked={checked}/>
                                {' '}
                                Only show products in stock
                            </label>
                        </td>
                    </tr>
                    </tbody>
                </table>

            </form>
        );
    }

function CategoryRow(category: string) {
    return (
        <tr key={category}>
            <td className={"category"} key={category}>{category}:</td>
        </tr>
    )
}

function GetCategories() {
    const categories: string[] =[];
    PRODUCTS.forEach((product)=>{
        if (!categories.includes(product.category)){
            categories.push(product.category);
        }
    })
    return categories;
}
// @ts-ignore
function ProductCategoryRow({message}){
    let lastCategory:string = '';
    const lalala:ReactNode[] = []
    GetCategories().forEach((category)=>{
        if (category != lastCategory){
            lalala.push(CategoryRow(category));
            lastCategory = category;
        }
        PRODUCTS.forEach((product)=>{
            if (product.name.toLowerCase().includes(message.toString().trim().toLowerCase())){
                if (product.category === lastCategory){
                    lalala.push(ProductRow(product));
                }
            }


        });
    });
    return(
        <table>
            <tbody>
            <tr key={crypto.randomUUID()}>
                <td>
                    Name
                </td>
                <td>
                    Price
                </td>
            </tr>
            {lalala}
            </tbody>
        </table>
)
}

function ProductRow(product:Product){
    if (!product.stocked) {
        return <tr key={product.name} className={"isNotStocked"}>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    }
    return (
        <tr key={product.name}>
            <td>{product.name}</td>
            <td>{product.price}</td></tr>
    )
}
export default function Page(){
    const [message,setMessage] =useState('')
    const [checked,setChecked] = useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setMessage(event.target.value);
        console.log(event.target.value);
    }
    /*const handleCheck =(event: React.ChangeEvent<Html>)=>{

    }*/
    return(
        <div>
        <SearchBar handleChange={handleChange} message={message} checked={checked}/>
        <ProductCategoryRow message={message}/>
        </div>
    )
}


interface Product{
    category:string;
    price:string;
    stocked:boolean;
    name:string;
}
const PRODUCTS : Product[] = [
    {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
    {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
    {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
    {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
    {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
    {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

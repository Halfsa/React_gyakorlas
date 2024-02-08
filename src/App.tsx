import {ReactNode, useState} from "react";
import './page.css'
import SearchBar from "./Appcomponents/filter";

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
function Error(){
    return(
        <tr key={""}>
            <td key={""} className={"isNotStocked"}>No such product found</td>
        </tr>
    )
}

// @ts-ignore
function BuildOutputList({message,checked}){
    let lastCategory:string = '';
    const lalala:ReactNode[] = [];
    const cats:ReactNode[]=[];

    GetCategories().forEach((category)=>{
        const prods:ReactNode[] =[];
        if (category != lastCategory){
            cats.push(CategoryRow(category));
            lastCategory = category;
        }
        PRODUCTS.forEach((product)=>{

            if (!checked){
                if (product.name.toLowerCase().includes(message.toString().trim().toLowerCase())){
                    if (product.category === lastCategory){
                        prods.push(ProductRow(product));
                    }
                }
            }
            else {
                if (product.stocked){
                if (product.name.toLowerCase().includes(message.toString().trim().toLowerCase())){
                    if (product.category === lastCategory){
                        prods.push(ProductRow(product));
                    }
                }
                }
            }
        });
        if (prods.length === 0){
            cats.splice(cats.indexOf(category),1);
        }
        else {
            cats.push(prods);
        }

    });
    if (cats.length===0){
        lalala.push(Error());
    }
    else {
        lalala.push(cats)
    }

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
    const handleCheck = ()=>{
        setChecked(!checked);
        console.log(checked)
    }
    return(
        <div>
        <SearchBar handleChange={handleChange} message={message} checked={checked} handleCheck={handleCheck}/>
        <BuildOutputList message={message} checked={checked}/>
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

import {ReactNode} from "react";

function SearchBar(){
    return (
        <form id={"search"}>
            <table>
                <tbody>
                <tr>
                    <td>
                        <input type={"text"} placeholder={"Search..."}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label>
                            <input type={"checkbox"}/>
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
        <th key={category}>{category}:</th>
    )
}
function GetCategories(){
    const categories: string[] =[];
    PRODUCTS.forEach((product)=>{
        if (!categories.includes(product.category)){
            categories.push(product.category);
        }
    })
    return categories;
}
function ProductCategoryRow(){
    let lastCategory:string = '';
    const lalala:ReactNode[] = []
    GetCategories().forEach((category)=>{
        if (category != lastCategory){
            lalala.push(CategoryRow(category));
            lastCategory = category;
        }
        PRODUCTS.forEach((product)=>{
            if (product.category === lastCategory){
                lalala.push(ProductRow(product));
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
        return <tr key={product.name}>
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
function Page(){
    return(
        <body>
        <SearchBar/>
        <ProductCategoryRow/>
        </body>
    )
}
export default function Home(){
    return <Page/>
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

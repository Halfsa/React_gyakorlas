export default function SearchBar({handleChange,message,checked,handleCheck}:{handleChange:React.ChangeEventHandler,message:string,checked:boolean,handleCheck:React.MouseEventHandler}) {
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
                            <input type={"checkbox"} id={"checkBox"} checked={checked} readOnly={true} onClick={handleCheck}/>
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

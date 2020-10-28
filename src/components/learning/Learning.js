import React, { useMemo, useState } from 'react'

const users = [
    {id:'a', name: 'Robin'},
    {id:'b', name:'Dennis'},
    {id:'c', name:'LUpita'},
    {id:'d', name:'Mariano'},
];

export const Learning = () => {   

    const [text, setText] = useState('');
    const [search, setSearch]= useState('');

    
    const handleText = event => {
        console.log('handle text');
        setText(event.target.value);
    }

    const handleSearch = (event) => {
        console.log('handleSearch');
        
        setSearch(text)
    }

    const usuariosFiltrados = useMemo(()=> {
        console.log('SE EJECUTA LA FUNCION FILTRADO');
        return users.filter(user => {       

             return user.name.toLowerCase().includes(search.toLowerCase())
         })
    },[search])  
       
    return (
        <>
        <input type="text" value={text} onChange={handleText} />  
        <button type="button" onClick={handleSearch}>
            Search
            </button> 
           
            <List list={usuariosFiltrados}/>
        </>
    )
}

const List = ({list}) => {
    return (
        <>
        <ul>
            {list && list.map((item) => (
                <ListItem key={item.id} item={item} />
            ))}
        </ul>
        </>
    )
};

const ListItem = ({item}) => {
return <li>{item.name}</li>
}



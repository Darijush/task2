
function Pokemon(items) {
   const content = 
        items.items.map(item => (
            <li key={item.id}>
                <a href={item.url}>{item.name}</a> 
            </li>
        ))
    ;
 return content;
}
export default Pokemon;
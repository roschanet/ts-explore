export default function ObjectType(){
    // Create person with object as type
    const person: { 
        id: string; 
        name: string; 
        age: number 
    } = {
        id: '123',
        name: 'Robert',
        age: 30
    }

    const product: {
        id:string;
        price: number;
        tags: string[];
        details: {
            title: string;
            description: string;
        }
    } = {
        id: 'abc1',
        price: 12.99,
        tags: ['great-offer', 'hot-and-new'],
        details: {
          title: 'Red Carpet',
          description: 'A great carpet - almost brand-new!'
        }
      }

    return (
        <>
        <h1>Object Type</h1>
        <ul>Person Detail
            <li>{person.name}</li>
            <li>{person.age}</li>
        </ul>
        <ul>Product Detail 
            <li>{product.price}</li>
            <ol>{product.tags.map((tag, idx)=> <li key={`${tag}-${idx}`}>{tag}</li>)}</ol>
            <li>{product.details.title}</li>
        </ul>
        </>
    )
}
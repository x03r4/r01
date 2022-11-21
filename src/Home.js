import { useState } from "react"

const Home = () => {
    const [name, setName] = useState('mario');
    const handleClick = () => {
     setName('luigi')
    }

    let [count, setCount] = useState(0);
    const counting = () => {
        setCount(
            count = count + 1
            )
        }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name }</p>
            <button onClick={handleClick}>Click me</button>

            <button onClick={counting}>klikaj dziwko</button>
            <h5>kliknąłeś { count } razy, dziwko.</h5>

        </div>
     );
}
 
export default Home;
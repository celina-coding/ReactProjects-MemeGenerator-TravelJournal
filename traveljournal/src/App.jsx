
import './App.css'

import Header from "../components/Header"
import Entry from "../components/Entry"
import data from "../data"

export default function App() {
    
    const entryElements = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                {...entry}
            />
        )
    })
    console.log(data);
    
    return (
        <>
            <Header />
            <main className="container">
                {entryElements}
            </main>
            
        </>
    )
}
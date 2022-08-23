import axios from "axios";
import {useEffect, useState} from "react";

export const Fib = () => {
    const [seenIndexes, setSeenIndexes] = useState([]);
    const [index, setIndex] = useState("");
    const [values, setValues] = useState({});

    useEffect(() => {
        fetchValues();
        fetchIndexes();
    }, [])

    const fetchValues = async () => {
        const values = await axios.get('/api/values/current');
        console.log("VALUES DATA", values.data)
        setValues(values.data)
    }

    const fetchIndexes = async () => {
        const seenIndexes = await axios.get('/api/values/all');
        setSeenIndexes(seenIndexes.data)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await axios.post("/api/values", {
            index,
        })

        setIndex('');
    }

    const renderSeenIndexes = () => {
        return seenIndexes.map(({number}) => number).join(", ");
    }

    const renderValues = () => {
        const entries = [];
        for (let key in values) {
            entries.push(
                <div key={key}>For index {key} I calculated {values[key]}</div>
            )
        }

        return entries;
    }



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your index:</label>
                <input value={index} onChange={e => setIndex(e.target.value)}/>
                <button>Submit</button>
            </form>

            <h3>Indexes i have seen:</h3>
            {renderSeenIndexes()}
            <h3>Calculated values:</h3>
            {renderValues()}
        </div>
    )
}
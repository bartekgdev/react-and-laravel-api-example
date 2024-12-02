import React, { useEffect, useState } from "react";
const App = () => {
    const [data, setData] = useState({ title: "", message: "" });

    useEffect(() => {
        fetch("http://127.0.0.1:8000/api/data")
            .then((response) => response.json())
            .then((data) => setData(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>{data.title}</h1>
            <p>{data.message}</p>
        </div>
);
};

export default App;

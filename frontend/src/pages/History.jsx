import React, {useState, useEffect} from "react";
import axios from "axios";
import "../styles/History.css";

function History() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        async function fetchHistory() {
            const response = await axios.get("http://localhost:8000/history");
            setHistory(response.data.history);
        }
        fetchHistory();
    }, []);

    return (
        <div className="history-page">
            <h1>Upload History</h1>
            {history.map((upload, index) => (
                <div key={index} className="history-card">
                    <h3>{upload.filename}</h3>
                    <p>Rows: {upload.rows} | Columns: {upload.columns}</p>
                    <p>{new Date(upload.uploaded_at).toLocaleDateString()}</p>
                </div>    
            ))}
        </div>
    )
}

export default History;
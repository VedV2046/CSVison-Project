import React, {useState} from "react";
import "../styles/Home.css";
import FileUpload from "../components/FileUpload";
import Result from "../components/Result";

function HomePage() {
    const [results, setResults] = useState(null);
    console.log(results);

    return (
        <main>
            <div className="hero-section">
                <h1>Analyze your CSV instantly</h1>
                <p>Upload any CSV file and get instant stats, charts, and insights, no code needed.</p>
                <FileUpload onResults={setResults} />
                <Result results={results} />
            </div>
        </main>
    )
}

export default HomePage;
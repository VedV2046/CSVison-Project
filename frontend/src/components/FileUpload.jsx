import React, {useRef, useState} from "react";
import axios from "axios";
import "../styles/FileUpload.css";
import checkIcon from "../assets/check-circle.svg";

function FileUpload({onResults}) {
    const inputRef = useRef(null);

    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    function handleFileChange(e) {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
        console.log(selectedFile);
    }

    async function handleAnalyze(e) {
        e.stopPropagation();
        setLoading(true);
        console.log("Analyzing files...", file.name);
        //API CALL HERE
        const formData = new FormData();
        formData.append("file", file);

        const response = await axios.post("https://csvison-project.onrender.com/analyze", formData)
        console.log(response.data);
        onResults(response.data);
        setLoading(false);
    }
    
    return (
        <div className="file-upload">
            <div onClick={() => inputRef.current.click()} className="upload-container">
                    <input ref={inputRef} type="file" accept=".csv" onChange={handleFileChange} className="upload-button"/>
                    <h3>Click to upload or drag and drop</h3>
                    <h5>Supports .csv files only</h5>
                    {file && <p className="upload-success"><img className="checkIcon" src={checkIcon} />{file.name} uploaded</p>}
                    {file && <button className="analyze-button" onClick={handleAnalyze} disabled={loading}>{loading ? "Analyzing..." : "Analyze CSV"}</button>}
            </div>
        </div>
    )
}

export default FileUpload;
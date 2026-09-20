import React, {useState} from "react";
import "../styles/Result.css";

function Result({results}) {
    if(!results) return null;

    const [selectedChart, setSelectedChart] = useState(null);

    // results.rows
    // results.columns
    // results.column_names
    // results.stats
    // Object.keys(results.stats).length;

    return (
        <div className="results">
            <div className="results-container">
                <div className="cards">
                    <p>Total Rows: {results.rows}</p>
                </div>
                <div className="cards">
                    <p>Total Columns: {results.columns}</p>
                </div>
                <div className="cards">
                    <div className="column-names">
                        <p>Column Names:</p>
                        <ul>
                            {results.column_names.map((columnName) => (
                                <li key={columnName}>{columnName}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="cards">
                    <p>Numeric Columns: {Object.keys(results.stats).length}</p>
                </div>
            </div>

            <table className="stats-table">
                <thead>
                    <tr>
                        <th>Column</th>
                        <th>Count</th>
                        <th>Mean</th>
                        <th>Min</th>
                        <th>Max</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(results.stats).map(([colName, colStats]) => (
                        <tr key={colName}>
                            <td>{colName}</td>
                            <td>{colStats.count}</td>
                            <td>{colStats.mean.toFixed(2)}</td>
                            <td>{colStats.min.toFixed(2)}</td>
                            <td>{colStats.max.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="charts-grid">
                {Object.entries(results.charts).map(([colName, chartData]) => (
                    <div key={colName} className="chart-container">
                        <h3>{colName}</h3>
                        <img src={`data:image/png;base64,${chartData}`} alt={colName} onClick={() => setSelectedChart({name: colName, data: chartData})} style={{cursor: "pointer"}}/>
                    </div>
                ))}
            </div>    
            {selectedChart && (
                <div className="modal-overlay" onClick={() => setSelectedChart(null)}>
                    <div className="modal-content">
                        <h3>{selectedChart.name}</h3>
                        <img src={`data:image/png;base64,${selectedChart.data}`} alt={selectedChart.name} />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Result;
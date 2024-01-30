import React from 'react'

export default function DataCard({ image }) {
    return (
        <div className="card" style={{ width: '21rem', display: 'flex', flexWrap: "wrap" }}>
            <div className="card-body">
                <h5 className="card-title">Some random graph data</h5>
                <h6 className="card-subtitle mb-2 text-muted">Important title perhaps</h6>
                <p className="card-text"><img src={image.url} height="200" width="250" alt="g1" /></p>
            </div>
        </div>
    )
}

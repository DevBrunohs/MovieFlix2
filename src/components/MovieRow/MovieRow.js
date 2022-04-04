/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './MovieRow.css'

export default ({ title, items }) => {
    return (
        <div className="movieRow">
            <h2>
                {title}
                <div className="movieRow--listarea">
                    <div className="mivieRow--list">
                    {items.results.length > 0 && items.results.map((item, key) => (
                        <div key={key} className="movieRow--item">
                            <img src={`https://image.tmdb.org/t/p/w300${item.poster.path}`} alt="images"/>
                        </div>
                    ))}
                    </div>
                </div>
            </h2>
        </div>
    )
}
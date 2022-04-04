/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './FeatureMovie.css'

export default ({ item }) => {

    let firstDate = new Date(item.first_air_date)
    let genres = []
    for (let i in item.genres) {
        genres.push(item.genres[i].name)
    }

    let description = item.overview
    if (description.length > 200) {
        description = description.substring(0, 200) + '...'
    }

    return (
        <section className="featured" style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url(https://image.tmdb.org/t/p/w300${item.backdrop.path})`
        }}>
            <div className="featured--vertical">
                <div className="featured--horizontal">
                    <div className="featured--name">{item.original.name}</div>
                    <div className="featured--info">{item.vote_average} pontos</div>
                    <div className="featured--year">{ }2099</div>
                    <div className="featured--seasons">{item.number_of_seasons} temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
                    <div className="featured--descriptiob">{description}</div>
                    <div className="featured--butotns">{ }
                        <a href={`/watch/${item.id}`} className="featured--watchbutton">Assistir</a>
                        <a href={`/list/add${item.id}`} className="featured--listbutton">Minha Lista</a>
                    </div>
                    <div className="featured--genres"><strong>Gêneros{ }</strong></div>
                </div>
            </div>
        </section>
    )
}
import React, { useEffect, useState } from 'react';
import './App.css'
import Tmdb from './components/tmdb';
import MovieRow from './components/MovieRow/MovieRow';
import FeatureMovie from './components/FeatureMovie/FeatureMovie';

export default function App() {

  const [movieList, setMovieList] = useState([])
  const [featureData, setFeatureData] = useState([null])

  useEffect(() => {
    const loadAll = async () => {
      let list = await Tmdb.getHomeList()
      setMovieList(list)

      let originals = list.filter(i => i.slug === 'originals')
      let randomchoosen = Math.floor(Math.random() * (originals[0].items.results.length))
      let choosen = originals[0].items.results[randomchoosen]
      // eslint-disable-next-line no-unused-vars
      let choosenInfo = await Tmdb.getMovieInfo(choosen.id, 'tv')
      
      setFeatureData(choosen)
    }

    loadAll()
  })

  return (
    <div className='page'>

      {featureData &&
        <FeatureMovie item={featureData} />
      }

      <section className='lists'>
        {movieList.map((item,key)=>(
          <MovieRow key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
      );
}



import React from 'react'
import {useParams,Link} from 'react-router-dom'
import './albums.css'
const Albums = ({albums}) => {
    let { idBand } = useParams();
    const getAlbumsByBand=(band,allAlbums)=>{
        let bandAlbums= allAlbums.filter(f=>f.bandId==band)     
        return bandAlbums
    }

    const albumsFiltered=getAlbumsByBand(idBand,albums)

    return (
        <div className='container'>
            <div className='p-3 col-4 albums-content'>
                <h1>Albums</h1>
                {albumsFiltered.length===0
                ?<p className='lead'>This Artist hasn't albums in our database</p>
                :albumsFiltered.map((album,index)=><p key={index} className='lead'>{album.name}</p>)}
                <Link className='btn btn-info text-white' to='/music'>Go Back</Link>
            </div>
        </div>
    )
}

export default Albums

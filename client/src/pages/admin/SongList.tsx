import React, { useEffect, useState } from 'react'
import api from '../../axios'
import { AiFillDelete, BiPen, BsPencilSquare, FiDelete } from 'react-icons/all'
import { Link } from 'react-router-dom'
import staticPath from '../../utils/staticPath'

const SongList = () => {
    const [songs, setSongs] = useState([])

    useEffect(() => {
        api.get('api/v1/songs').then(({ data, status }) => {
            if (status === 200) {
                setSongs(data.songs)
            }
        })
    }, [])

    function handleDelete(id: number) {
        api.delete('/api/v1/songs/' + id).then(({ status }) => {
            if (status === 201) {
                setSongs(songs.filter((a: any) => a.songId !== id))
            }
        })
    }

    return (
        <div>
            <h1 className="mt-2">All Songs</h1>
            <div className="mt-5">
                {songs.map((ar: any) => (
                    <div className="flex justify-between items-center">
                        <div className="thumb-80">
                            <img className="w-3/12" src={staticPath(ar.cover)} alt="" />
                        </div>
                        <div className="flex justify-between items-center w-full">
                            <h4>{ar.title}</h4>
                            <div className="flex gap-x-2 items-center  ">
                                <Link to={`/admin/update-song/${ar.songId}`} className="circle-icon">
                                    <BsPencilSquare />
                                </Link>
                                <span className="circle-icon">
                                    <AiFillDelete className="" onClick={() => handleDelete(ar.songId)} />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SongList

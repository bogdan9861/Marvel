import React from 'react'
import { useHttp } from '../hooks/useHttp'

const Service = () => {

    const { loading, error, request, clearError } = useHttp();

    const _api = '282348cdb8d673501fb4f4f5b14edcd0'
    const _base = 'https://gateway.marvel.com:443/v1/public'

    const getCharacterById = async (id) => {
        const res = await request(`${_base}/characters/${id}?apikey=${_api}`)
        return _filterData(res.data.results[0])
    }

    const getAllCharacters = async (offset = 0) => {
        const res = await request(`${_base}/characters?offset=${offset}&limit=9&apikey=${_api}`)

        return res.data.results.map(_filterData)
    }

    const getCharacterByName = async (name = '') => {
        const res = await request(`${_base}/characters?&name=${name}&apikey=${_api}`)

        return res.data.results;
    }

    const getComicsByCharId = async (id) => {
        const res = await request(`
            ${_base}/characters/${id}/comics?apikey=${_api}
        `)

        return res.data.results.map(_fitlerComics)
    }

    const getAllComics = async (offset = 0) => {
        const res = await request(`${_base}/comics?offset=${offset}&limit=8&apikey=${_api}`)
        return res.data.results.map(_fitlerComics)
    }

    const getComicById = async (id) => {
        const res = await request(`${_base}/comics/${id}?apikey=${_api}`)

        return _fitlerComics(res.data.results[0]);
    }

    const _filterData = (char) => {
        return ({
            id: char.id,
            name: char.name,
            description: char.description == '' ? 'there is no description' : char.description,
            thumbnail: `${char.thumbnail.path}.${char.thumbnail.extension}`,
            resourceUrl: char.urls[0].url,
            wikiUrl: char.urls[1].url,
        })
    }

    const _fitlerComics = (comic) => {
        return ({
            id: comic.id,
            title: comic.title,
            description: comic.description,
            pageCount: comic.pageCount,
            price: comic.prices[0].price,
            language: [] == 0 ? 'unknown' : [][0].language,
            thumbnail: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
        })
    }

    return { loading, error, getCharacterById, getAllCharacters, getCharacterByName, getComicsByCharId, getAllComics, getComicById, clearError }

}

export default Service
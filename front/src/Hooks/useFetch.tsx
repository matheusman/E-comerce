import React from 'react'

export default function useFetch (url :  RequestInfo | URL, options : RequestInit | undefined) {
    const [data, setData] = React.useState(null)
    const [erro, setErro] = React.useState<Error | null>(null)
    const [loading, setLoading] = React.useState(false)
    let response;
    let json;
    const responseApi = async () => {
        try {
            setErro(null)
            setLoading(true)
            response = await fetch(url, options)
            if (!response.ok) throw new Error('Houve um erro no response')
            json = await response.json()
            setData(json)
        } catch (err) {
            setData(null)
            if (err instanceof Error) setErro(err)
        } finally {
            setLoading(false)
        }
    }
    return {responseApi, data, erro, loading, response, json }

}
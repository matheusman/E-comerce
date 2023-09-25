import React from 'react'


export default function useFetch (url :  RequestInfo | URL, options : RequestInit | undefined) {
    const [data, setData] = React.useState(null)
    const [erro, setErro] = React.useState<Error | null>(null)
    const [loading, setLoading] = React.useState(false)
    const response = async () => {
        try {
            setErro(null)
            setData(null)
            const response = await fetch(url, options)
            if (!response.ok) throw new Error('Houve um erro no response')
            const json = await response.json()
            console.log(json)
        } catch (err) {
            if (err instanceof Error) setErro(err)
        }
        return {}
    }
}
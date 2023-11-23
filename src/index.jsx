export { Router } from './components/Router'
export { Route } from './components/Route'
export { Link } from  './components/Link'

export const useQueryParams = ({ req } = {}) => {
    const isServer = typeof window === 'undefined'
    if(isServer){
        const { query } = req
        return query
    }

    const search = window.location.search
    const params = new URLSearchParams(search)
    
    return Object.fromEntries(params.entries())
}
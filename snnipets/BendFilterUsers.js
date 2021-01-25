import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react'

const filterSearchBendUsers = ({ router, role, sort, search, token }) => {

    const path = router.pathname;
    const query = router.query;

    if (role) query.role = role;
    if (search) query.search = search;
    if (sort) query.sort = sort;

    router.push({
        pathname: path,
        query: query
    })
}

const BendFilterUsers = ({ state }) => {

    const router = useRouter()

    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')
    const [role, setRole] = useState('')

    const { roles } = state

    const handleRole = (e) => {
        setRole(e.target.value)
        filterSearchBendUsers({ router, role: e.target.value })
    }

    const handleSort = (e) => {
        setSort(e.target.value)
        filterSearchBendUsers({ router, sort: e.target.value })
    }

    useEffect(() => {
        filterSearchBendUsers({ router, search: search ? search.toLowerCase() : 'all' })
    }, [search])

    return (
        <div className="input-group">
            <div className="input-group-prepend col-md-2 px-0 mt-2">
                <select className="text-capitalize form-select"
                    value={role} onChange={handleRole}>

                    <option value="all">Todos</option>

                    {
                        roles.map((role, index) => (
                            <option key={index} value={role}
                                className="text-capitalize"
                            >{role}</option>
                        ))
                    }
                </select>
            </div>

            <form autoComplete="off" className="mt-2 col-md-8 px-0">
                <input type="text" className="form-control" list="title_product"
                    value={search.toLowerCase()} onChange={e => setSearch(e.target.value)}
                    placeholder='Filtro por email...'
                />
            </form>

            <div className="input-group-prepend col-md-2 px-0 mt-2">
                <select className="text-capitalize form-select"
                    value={sort} onChange={handleSort}>

                    <option value="-createdAt">Novos</option>
                    <option value="oldest">Antigos</option>

                </select>
            </div>


        </div>
    )
}

export default BendFilterUsers
const baseURL = process.env.BASE_URL

export const getData = async (url, token) => {
    let res
    if (token) {
        res = await fetch(`${baseURL}${url}`, {
            method: 'GET',
            headers: {
                'Authorization': token,
            }
        })
    } else {
        res = await fetch(`${baseURL}${url}`, {
            method: 'GET',
        })
    }

    const data = await res.json();
    return data
}

export const postData = async (url, post, token) => {
    let res
    if (process.env.ACCESS_TOKEN_SECRET) {
        console.log('ok existe')
    } else {
        console.log('ok nao existe')
    }
    if (token) {
        res = await fetch(`${baseURL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(post)
        })
    } else {
        res = await fetch(`${baseURL}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        })
    }
    const data = await res.json();
    console.log(data)
    return data
}

export const putData = async (url, post, token) => {

    let res
    if (token) {
        res = await fetch(`${baseURL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(post)
        })
    } else {
        res = await fetch(`${baseURL}${url}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        })
    }

    const data = await res.json();
    return data
}

export const patchData = async (url, post, token) => {

    let res
    if (token) {
        res = await fetch(`${baseURL}${url}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            },
            body: JSON.stringify(post)
        })
    } else {
        res = await fetch(`${baseURL}${url}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post)
        })
    }

    const data = await res.json();
    return data
}

export const deleteData = async (url, token) => {

    let res = await fetch(`${baseURL}${url}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })

    const data = await res.json();
    return data
}
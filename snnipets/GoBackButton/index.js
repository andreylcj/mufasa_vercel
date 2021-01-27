import React from 'react'
import { useRouter } from 'next/router'

function GoBackButton(props) {

    const router = useRouter()

    const handleBack = () => {
        if (props.url) {
            router.push(props.url)
            return
        } else {
            router.back()
            return
        }
    }

    return (
        <div className='mb-4'>
            <button className="btn btn-dark" onClick={handleBack}>
                <i className="fas fa-long-arrow-alt-left"></i> Voltar
            </button>
        </div>
    )
}

export default GoBackButton

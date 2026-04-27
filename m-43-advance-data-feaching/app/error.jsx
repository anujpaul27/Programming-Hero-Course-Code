'use client' // Error boundaries must be Client Components

import Link from 'next/link'
import { useEffect } from 'react'

export default function ErrorPage({ error, unstable_retry }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div>
            <h2>Something went wrong!</h2>
            <button
                onClick={
                    // Attempt to recover by re-fetching and re-rendering the segment
                    <Link href={'/'}></Link>
                }
            >
                Try again
            </button>
        </div>
    )
}
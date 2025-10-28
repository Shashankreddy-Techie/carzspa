import { Card, Typography, IconButton } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const API_URL = 'https://stems.wisibles.com/api/Webservice/getLibraryBooks'
const ITEMS_PER_PAGE = 25

const Api = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE)
  
  const getItemsForCurrentPage = () => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    const end = start + ITEMS_PER_PAGE
    return data.slice(start, end)
  }

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      setError(null)
      try {
        // The API in the user's example uses JSON and custom headers.
        // We send a POST with an empty body (many endpoints accept POST with headers only).
        const response = await axios({
          method: 'get',
          url: API_URL,
          headers: {
            'Content-Type': 'application/json',
            'Client-Service': 'stems',
            'Auth-Key': 'schoolAdmin@'
          }
        })
        
        // Log the response for debugging
        console.log('Response:', response)

        // API responses vary; adjust `response.data` path below if needed.
        // Here we try to read common shapes: { data: [...] } or just an array.
        const payload = response?.data
        if (Array.isArray(payload)) setData(payload)
        else if (payload && Array.isArray(payload.data)) setData(payload.data)
        else if (payload && Array.isArray(payload.books)) setData(payload.books)
        else {
          // fallback: wrap non-array result
          setData(payload ? [payload] : [])
        }
      } catch (err) {
        console.error('Fetch error:', err.response?.data || err.message)
        console.error('Status:', err.response?.status)
        console.error('Headers:', err.response?.headers)
        setError(err.response?.data?.message || err.message || 'Failed to fetch')
      } finally {
        setLoading(false)
      }
    }

    fetchBooks()
  }, [])

  // Build column headers dynamically from first row
  // const columns = data.length > 0 ? Object.keys(data[0]) : []
  const columns = [
    'id', 'book_title', 'author', 'shelf_no'
  ]

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="relative flex h-[260px] content-center items-center justify-center pt-16 pb-8">
        <div className="absolute top-0 h-full w-full bg-[url('/img/slider/1.webp')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/60 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="pt-20 ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              <Typography variant="h1" color="white" className="mb-4 font-black">
                Library Books
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80">
                Data fetched from an external API using axios. Below is a simple table view.
              </Typography>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-800 px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <Card className="p-4">
            {loading ? (
              <div className="py-8 text-center">Loading...</div>
            ) : error ? (
              <div className="py-8 text-center text-red-400">Error: {error}</div>
            ) : data.length === 0 ? (
              <div className="py-8 text-center text-gray-300">No data available</div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr className="bg-gray-900">
                      {columns.map((col) => (
                        <th
                          key={col}
                          className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-300"
                        >
                          {col}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {getItemsForCurrentPage().map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-800' : 'bg-gray-700'}>
                        {columns.map((col) => (
                          <td key={col} className="px-6 py-3 text-sm text-gray-200">
                            {row[col] === null || row[col] === undefined
                              ? '-' // show placeholder for missing values
                              : String(row[col])}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                
                {/* Pagination Controls */}
                <div className="flex items-center justify-between border-t border-gray-700 px-4 py-3 sm:px-6 mt-4">
                  <div className="flex flex-1 justify-between sm:hidden">
                    <IconButton
                      variant="text"
                      className="flex items-center gap-2 text-gray-300"
                      onClick={() => setCurrentPage(page => Math.max(1, page - 1))}
                      disabled={currentPage === 1}
                    >
                      Previous
                    </IconButton>
                    <IconButton
                      variant="text"
                      className="flex items-center gap-2 text-gray-300"
                      onClick={() => setCurrentPage(page => Math.min(totalPages, page + 1))}
                      disabled={currentPage === totalPages}
                    >
                      Next
                    </IconButton>
                  </div>
                  <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                    <div>
                      <p className="text-sm text-gray-400">
                        Showing{' '}
                        <span className="font-medium">{((currentPage - 1) * ITEMS_PER_PAGE) + 1}</span>
                        {' '}-{' '}
                        <span className="font-medium">
                          {Math.min(currentPage * ITEMS_PER_PAGE, data.length)}
                        </span>{' '}
                        of{' '}
                        <span className="font-medium">{data.length}</span>{' '}
                        results
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      {(() => {
                        const pages = []
                        const lastPage = totalPages
                        
                        // Always show first page
                        pages.push(1)
                        
                        if (currentPage > 3) {
                          pages.push('...')
                        }
                        
                        // Show current page and its neighbors
                        for (let i = Math.max(2, currentPage - 1); i <= Math.min(currentPage + 1, lastPage - 2); i++) {
                          pages.push(i)
                        }
                        
                        if (currentPage < lastPage - 3) {
                          pages.push('...')
                        }
                        
                        // Always show last two pages
                        if (lastPage - 1 > currentPage + 1) {
                          pages.push(lastPage - 1)
                        }
                        if (lastPage > 1) {
                          pages.push(lastPage)
                        }
                        
                        return pages.map((page, idx) => 
                          page === '...' ? (
                            <span key={`dots-${idx}`} className="text-gray-500">•••</span>
                          ) : (
                            <IconButton
                              key={page}
                              variant={currentPage === page ? "filled" : "text"}
                              className={
                                currentPage === page
                                  ? "bg-gray-600"
                                  : "text-gray-300 hover:bg-gray-700"
                              }
                              onClick={() => setCurrentPage(page)}
                            >
                              {page}
                            </IconButton>
                          )
                        )
                      })()}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Api

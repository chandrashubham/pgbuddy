'use client'
import React, { useState } from 'react'

const BookNowPage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    moveInDate: '',
    preferredPG: ''
  })

  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const res = await fetch('/api/bookpg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await res.json()

      if (res.ok) {
        setMessage({ type: 'success', text: data.message || 'Booking successful!' })
        setFormData({ fullName: '', email: '', moveInDate: '', preferredPG: '' })
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong!' })
      }
    } catch (error) {
      console.error('Booking Error:', error)
      setMessage({ type: 'error', text: 'Internal server error.' })
    }

    setLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-white to-orange-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500 flex items-center justify-center px-4 py-8">
      <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-2xl max-w-4xl w-full overflow-hidden grid md:grid-cols-2 transition-all duration-500">

        {/* Image Section */}
        <div className="bg-cover bg-center hidden md:block" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')" }}>
        </div>

        {/* Form Section */}
        <div className="p-8 md:p-10">
          <h2 className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-4">Book Your Stay</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">Fill out the details below to reserve your spot at your preferred PG accommodation.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Move-in Date</label>
              <input
                type="date"
                name="moveInDate"
                value={formData.moveInDate}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">Preferred PG</label>
              <select
                name="preferredPG"
                value={formData.preferredPG}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg bg-white dark:bg-gray-700 dark:text-white dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select PG</option>
                <option value="Urban Nest">Urban Nest</option>
                <option value="Green Stay">Green Stay</option>
                <option value="Comfort Corner">Comfort Corner</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 text-white py-2 rounded-lg text-lg hover:bg-orange-600 transition-all duration-300"
            >
              {loading ? 'Booking...' : 'Book Now'}
            </button>
          </form>

          {message.text && (
            <p
              className={`mt-4 text-center text-sm ${
                message.type === 'success'
                  ? 'text-green-600 dark:text-green-400'
                  : 'text-red-600 dark:text-red-400'
              }`}
            >
              {message.text}
            </p>
          )}

          <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            We’ll contact you shortly after you submit the form.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookNowPage;

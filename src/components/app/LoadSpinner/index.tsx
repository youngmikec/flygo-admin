

const LoadSpinner = () => {
  return (
    <>
      <div>
        <svg className="animate-spin h-4 w-4 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zM2 14a10 10 0 0010 10v-4a6 6 0 01-6-6H2z"></path>
        </svg>
      </div>
    </>
  )
}

export default LoadSpinner;
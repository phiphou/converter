function SwitchUnitButton({switchUnits}: {switchUnits: () => void}) {
  return (
    <button
      onClick={switchUnits}
      type="button"
      className="m-1 inline-flex items-center rounded-full border border-blue-700 text-center text-sm font-medium text-sky-600 focus:ring-0 focus:ring-blue-300 focus:outline-none dark:border-gray-600 dark:bg-gray-200 dark:text-gray-700 dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
    >
      <svg fill="currentColor" className="h-9 w-9" viewBox="0 0 441 441" xmlns="http://www.w3.org/2000/svg">
        <path d="M376 65A220 220 0 1 0 64 376 220 220 0 0 0 376 65zM96 200l2-11A143 143 0 0 1 236 84c21 0 42 4 61 14l26-22a8 8 0 0 1 13 5l9 115a8 8 0 0 1-10 8l-110-32a8 8 0 0 1-2-13l25-20a88 88 0 0 0-98 64c0 4-3 6-7 6h-40a8 8 0 0 1-7-9zm249 41-2 11a143 143 0 0 1-138 105c-21 0-42-4-61-14l-26 22a8 8 0 0 1-13-5l-9-115a8 8 0 0 1 10-8l110 32a8 8 0 0 1 2 13l-25 20a88 88 0 0 0 97-64c1-4 4-6 8-6h40a8 8 0 0 1 7 9z" />
      </svg>
    </button>
  )
}

export default SwitchUnitButton

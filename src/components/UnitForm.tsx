import { useState, useEffect } from 'react'
import { Unit } from '../types'
import infoIcon from '../assets/icons/info.svg'

function UnitForm({ label, dictionary }: { label: string; dictionary: Record<string, Unit> }) {
  const [unitFrom, setUnitFrom] = useState<string>('')
  const [unitTo, setUnitTo] = useState<string>('')
  const [rawValue, setRawValue] = useState<string>('1')
  const [value, setValue] = useState<number>(1)
  const [result, setResult] = useState<number | null>(1)

  useEffect(() => {
    const firstFromUnit = Object.keys(dictionary).find((key) => key !== 'infos' && dictionary[key]) || ''
    const firstToUnit = Object.keys(dictionary).find((key) => key !== 'infos' && dictionary[key]) || ''
    setUnitFrom(firstFromUnit)
    setUnitTo(firstToUnit)
  }, [dictionary])

  useEffect(() => {
    if (unitFrom && unitTo && dictionary[unitFrom] && dictionary[unitTo]) {
      const fromDivisor = dictionary[unitFrom].divisor
      const toDivisor = dictionary[unitTo].divisor
      if (unitFrom === unitTo) {
        setResult(value)
      } else if (dictionary[unitFrom].converter && dictionary[unitFrom].converter === dictionary[unitTo].converter) {
        setResult(dictionary[unitTo].converter(value, dictionary[unitFrom], dictionary[unitTo]))
      } else {
        setResult((value * fromDivisor) / toDivisor)
      }
    } else {
      setResult(null)
    }
  }, [value, unitFrom, unitTo, dictionary])

  function pluralize(result: number | null, label: string, unit: Unit): string {
    if (unit && unit.pluralize_all) {
      return result !== null && result >= 2
        ? label
            .split(' ')
            .map((v) => (!v.endsWith('s') ? v + 's' : v))
            .join(' ')
        : label
            .split(' ')
            .map((v) => (v.endsWith('s') ? v.slice(0, -1) : v))
            .join(' ')
    } else {
      if (unit && unit.pluralize) {
        return result !== null && result >= 2
          ? label
              .split(' ')
              .map((v, i) => (i === 0 && !v.endsWith('s') ? v + 's' : v))
              .join(' ')
          : label
              .split(' ')
              .map((v, i) => (i === 0 && v.endsWith('s') ? v.slice(0, -1) : v))
              .join(' ')
      } else {
        return label
      }
    }
  }

  function switchUnits() {
    setUnitFrom(unitTo)
    setUnitTo(unitFrom)
  }

  return (
    <div>
      <div className="mt-5 flex flex-col min-w-full items-baseline mb-5">
        <div className="mt-5 flex min-w-full justify-items-center  mb-5">
          <input
            type="text"
            className="w-40 mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus-within:ring-blue-500 dark:focus-within:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={label}
            value={rawValue}
            onChange={(e) => {
              const inputValue = e.target.value.replace(',', '.')
              setRawValue(inputValue)

              const numericValue = parseFloat(inputValue)
              if (!isNaN(numericValue)) {
                setValue(numericValue)
              }
            }}
          />
          <select
            value={unitFrom}
            onChange={(e) => setUnitFrom(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mr-2"
          >
            {Object.keys(dictionary).map((key) => {
              if (key !== 'infos') {
                return (
                  <option key={key} value={key}>
                    {dictionary[key].label}
                  </option>
                )
              }
            })}
          </select>
          <button
            onClick={switchUnits}
            type="button"
            className="text-blue-500 border m-1 border-blue-700 focus:ring-0 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center inline-flex items-center dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-700 dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <svg
              className="w-9 h-9"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 441 441"
            >
              <path d="M376 65A220 220 0 1 0 64 376 220 220 0 0 0 376 65zM96 200l2-11A143 143 0 0 1 236 84c21 0 42 4 61 14l26-22a8 8 0 0 1 13 5l9 115a8 8 0 0 1-10 8l-110-32a8 8 0 0 1-2-13l25-20a88 88 0 0 0-98 64c0 4-3 6-7 6h-40a8 8 0 0 1-7-9zm249 41-2 11a143 143 0 0 1-138 105c-21 0-42-4-61-14l-26 22a8 8 0 0 1-13-5l-9-115a8 8 0 0 1 10-8l110 32a8 8 0 0 1 2 13l-25 20a88 88 0 0 0 97-64c1-4 4-6 8-6h40a8 8 0 0 1 7 9z" />
            </svg>
          </button>
        </div>
        <div className="mt-5 flex min-w-full justify-items-center items-baseline mb-5">
          <label htmlFor="volume" className="mr-3 ml-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            en
          </label>
          <select
            value={unitTo}
            onChange={(e) => setUnitTo(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {Object.keys(dictionary).map((key) => {
              if (key !== 'infos') {
                return (
                  <option key={key} value={key}>
                    {dictionary[key].label}
                  </option>
                )
              }
            })}
          </select>
        </div>
      </div>
      <div className="mb-3 text-lg font-medium text-gray-text-white dark:text-white  text-black ">
        {value.toLocaleString('fr-FR', { minimumFractionDigits: 0 }).replace(',', '.')}{' '}
        {pluralize(parseFloat(rawValue), dictionary[unitFrom]?.label, dictionary[unitFrom]) || ''} ={' '}
        {result !== null
          ? dictionary[unitTo]?.formater
            ? dictionary[unitTo].formater(result)
            : result.toLocaleString('fr-FR', { maximumFractionDigits: 3 }).replace(',', '.')
          : ''}{' '}
        {(!dictionary[unitTo]?.formater &&
          pluralize(parseFloat('' + result), dictionary[unitTo]?.label, dictionary[unitTo])) ||
          ''}
      </div>

      <div className="mb-3 text-lg font-medium text-gray-text-white dark:text-white  text-black ">
        {result !== null && dictionary[unitFrom] && dictionary[unitTo] && (
          <>
            {value} {dictionary[unitTo].label} vaut{' 1/'}
            {result.toLocaleString('fr-FR', { maximumFractionDigits: 3 }).replace(',', '.')}ème de{' '}
            {dictionary[unitFrom].label}
          </>
        )}
      </div>

      <div className="mb-3 text-lg font-medium text-gray-text-white dark:text-white text-black ">
        {result !== null && dictionary[unitFrom] && dictionary[unitTo] && (
          <>
            {value} {dictionary[unitFrom].label} vaut{' '}
            {(result * 100).toLocaleString('fr-FR', { maximumFractionDigits: 2 }).replace(',', '.')}% de{' '}
            {dictionary[unitTo].label}
          </>
        )}
      </div>

      {dictionary[unitFrom]?.info && (
        <>
          <br />
          <div className="max-w-150 min-w-60 text-left flex align-middle">
            <span>
              <img src={infoIcon} className="w-6 h-6 mr-2" />
            </span>
            <span dangerouslySetInnerHTML={{ __html: dictionary[unitFrom].info }} />
            <span>&nbsp;({dictionary[unitFrom].label})</span>
          </div>
        </>
      )}

      {dictionary[unitTo]?.info && dictionary[unitTo]?.info != dictionary[unitFrom]?.info && (
        <>
          <br />
          <div className="max-w-150 min-w-60 text-left flex align-middle">
            <span>
              <img src={infoIcon} className="w-6 h-6 mr-2" />
            </span>
            <span dangerouslySetInnerHTML={{ __html: dictionary[unitTo].info }} />
            <span>&nbsp;({dictionary[unitTo].label})</span>
          </div>
        </>
      )}

      {dictionary['infos'] && (
        <>
          <br />
          <br />
          <div className="max-w-150 min-w-60 text-left flex align-middle">
            <span className="mr-2">
              <img src={infoIcon} className="w-6 h-6 mr-4" />
            </span>
            <span dangerouslySetInnerHTML={{ __html: dictionary['infos'].label }} />
          </div>
        </>
      )}
    </div>
  )
}

export default UnitForm

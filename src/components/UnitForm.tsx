import { useState, useEffect } from 'react'
import { Unit } from '../types'

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
      {/* <h4>{label}</h4> */}
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
              viewBox="0 0 440.982 440.981"
            >
              <path
                d="M376.497,64.677c-86.054-86.161-225.66-86.246-311.82-0.192c-86.16,86.056-86.247,225.661-0.191,311.822
		c86.053,86.158,225.661,86.244,311.821,0.189C462.465,290.443,462.553,150.837,376.497,64.677z M95.774,200.401
		c0.482-3.9,2.153-10.057,2.397-10.943c7.501-28.359,24.128-54.332,46.821-73.141c23.007-19.068,52.085-30.584,81.879-32.424
		c2.869-0.178,5.788-0.268,8.676-0.268c21.354,0,42.628,4.843,61.858,14.047l25.991-21.35c1.406-1.153,3.146-1.757,4.909-1.757
		c0.916,0,1.836,0.163,2.72,0.495c2.587,0.972,4.457,3.25,4.908,5.976l9.226,114.8c0.451,2.726-0.586,5.484-2.721,7.238
		c-2.136,1.753-5.042,2.235-7.628,1.263L224.915,172.1c-2.586-0.972-4.457-3.249-4.907-5.975c-0.451-2.726,0.586-5.484,2.721-7.238
		l24.876-20.307c-5.756-0.79-11.623-1.017-17.396-0.661c-18.433,1.14-36.431,8.269-50.674,20.074
		c-14.088,11.676-24.401,27.774-29.04,45.33c-0.896,3.394-3.966,5.758-7.476,5.758h-39.57c-2.216,0-4.325-0.951-5.792-2.61
		C96.188,204.81,95.504,202.6,95.774,200.401z M345.207,240.58c-0.48,3.9-2.151,10.058-2.396,10.943
		c-7.502,28.359-24.129,54.332-46.822,73.141c-23.007,19.068-52.085,30.584-81.879,32.425c-2.87,0.178-5.788,0.269-8.675,0.269
		c-21.354,0-42.629-4.844-61.859-14.048l-25.991,21.351c-1.405,1.152-3.146,1.756-4.909,1.756c-0.916,0-1.836-0.162-2.72-0.494
		c-2.587-0.973-4.457-3.25-4.908-5.977l-9.226-114.8c-0.451-2.726,0.586-5.483,2.721-7.237c2.134-1.754,5.042-2.235,7.628-1.264
		l109.896,32.237c2.586,0.972,4.458,3.249,4.909,5.976c0.451,2.725-0.586,5.484-2.721,7.237l-24.876,20.308
		c5.755,0.789,11.622,1.016,17.395,0.66c18.433-1.14,36.431-8.27,50.674-20.074c14.088-11.676,24.401-27.773,29.041-45.33
		c0.896-3.394,3.966-5.758,7.475-5.758h39.57c2.216,0,4.326,0.951,5.793,2.61C344.793,236.172,345.479,238.382,345.207,240.58z"
              />
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
      <div className="mb-3 text-lg font-medium text-gray-text-white dark:text-white ">
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

      {dictionary[unitFrom]?.info && (
        <>
          <br />
          <div className="max-w-150 min-w-60 text-left">
            <span>* </span>
            <span dangerouslySetInnerHTML={{ __html: dictionary[unitFrom].info }} />
          </div>
        </>
      )}

      {dictionary[unitTo]?.info && (
        <>
          <br />
          <div className="max-w-150 min-w-60 text-left">
            <span>* </span>
            <span dangerouslySetInnerHTML={{ __html: dictionary[unitTo].info }} />
          </div>
        </>
      )}

      {dictionary['infos'] && (
        <>
          <br />
          <br />
          <div className="max-w-150 min-w-150 text-left">
            <span>* </span>
            <span dangerouslySetInnerHTML={{ __html: dictionary['infos'].label }} />
          </div>
        </>
      )}
    </div>
  )
}

export default UnitForm

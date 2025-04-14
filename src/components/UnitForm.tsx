import { useState, useEffect } from 'react'
import { Unit } from '../types'

function UnitForm({ label, dictionary }: { label: string; dictionary: Record<string, Unit> }) {
  const [unitFrom, setUnitFrom] = useState<string>('')
  const [unitTo, setUnitTo] = useState<string>('')
  const [value, setValue] = useState<number>(1)
  const [result, setResult] = useState<number | null>(null) // Utilisez `null` pour indiquer un état non calculé

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
            .map((v) => v + 's')
            .join(' ')
        : label
    } else {
      if (unit && unit.pluralize) {
        return result !== null && result >= 2
          ? label
              .split(' ')
              .map((v, i) => (i === 0 ? v + 's' : v)) // Pluralise uniquement le premier mot
              .join(' ')
          : label
      } else {
        return label
      }
    }
  }

  return (
    <div>
      {/* <h4>{label}</h4> */}
      <div className="mt-5 flex flex-col min-w-full items-baseline mb-5">
        <div className="mt-5 flex min-w-full justify-items-center items-baseline mb-5">
          <input
            type="number"
            className="w-40 mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus-within:ring-blue-500 dark:focus-within:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={label}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
          <select
            value={unitFrom}
            onChange={(e) => setUnitFrom(e.target.value)}
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
      <label className="mb-2 text-lg font-medium text-gray-text-white dark:text-white ">
        {value.toLocaleString('fr-FR', { minimumFractionDigits: 0 }).replace(',', '.')}{' '}
        {pluralize(result, dictionary[unitFrom]?.label, dictionary[unitFrom]) || ''} ={' '}
        {result !== null
          ? dictionary[unitTo]?.formater
            ? dictionary[unitTo].formater(result)
            : result.toLocaleString('fr-FR', { maximumFractionDigits: 2 }).replace(',', '.')
          : ''}{' '}
        {(!dictionary[unitTo]?.formater && pluralize(result, dictionary[unitTo]?.label, dictionary[unitTo])) || ''}
      </label>
      {dictionary['infos'] && (
        <>
          <br />
          <br />
          <label dangerouslySetInnerHTML={{ __html: dictionary['infos'].label }} />
        </>
      )}
    </div>
  )
}

export default UnitForm

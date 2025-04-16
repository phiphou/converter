import { useState, useEffect } from 'react'
import { Unit } from '../types'
import { pluralize } from '../utils/utils'
import UnitSelect from './UnitSelect'
import InfosBlock from './InfosBlock'
import SwitchUnitButton from './SwitchUnitButton'

function UnitForm({ label, dictionary }: { label: string; dictionary: Record<string, Unit> }) {
  const [unitFrom, setUnitFrom] = useState<string>('')
  const [unitTo, setUnitTo] = useState<string>('')
  const [rawValue, setRawValue] = useState<string>('1')
  const [value, setValue] = useState<number>(1)
  const [result, setResult] = useState<number | null>(1)

  useEffect(() => {
    const firstUnit = Object.keys(dictionary).find((key) => key !== 'infos' && dictionary[key]) || ''
    setUnitFrom(firstUnit)
    setUnitTo(firstUnit)
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

  const switchUnits = () => {
    setUnitFrom(unitTo)
    setUnitTo(unitFrom)
  }

  return (
    <div>
      <div className="mt-5 flex flex-col min-w-full items-baseline justify-items-center mx-auto mb-5">
        <div className="flex gap-6 flex-col md:flex-row justify-items-center mx-auto mb-5">
          <input
            type="number"
            min={0}
            className="w-40 mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus-within:ring-blue-500 dark:focus-within:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
          <div className="flex gap-2">
            <UnitSelect unit={unitFrom} setUnit={setUnitFrom} dictionary={dictionary} />
            <SwitchUnitButton switchUnits={switchUnits} />
          </div>
        </div>
        <div className="mt-3 flex justify-items-center items-baseline mb-5  md:ml-36">
          <label className="mr-3 ml-3 block mb-2 text-sm font-medium text-gray-900 dark:text-white">en</label>
          <UnitSelect unit={unitTo} setUnit={setUnitTo} dictionary={dictionary} />
        </div>
      </div>

      <div className="mb-3 mx-auto text-lg text-center font-medium text-gray-text-white dark:text-white text-black">
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

      {dictionary[unitFrom]?.info && <InfosBlock label={dictionary[unitFrom].label} info={dictionary[unitFrom].info} />}
      {dictionary[unitTo]?.info && dictionary[unitTo]?.info !== dictionary[unitFrom]?.info && (
        <InfosBlock label={dictionary[unitTo].label} info={dictionary[unitTo].info} />
      )}
      {dictionary['infos'] && (
        <div className=" mx-auto">
          <InfosBlock label="Infos" info={dictionary['infos'].label} />
        </div>
      )}
    </div>
  )
}

export default UnitForm

function SwitchButton({scientific, setScientific}: {scientific: boolean; setScientific: (value: boolean) => void}) {
  return (
    <div className="relative inline-block h-5 w-11">
      <input
        id="switch-component-teal"
        type="checkbox"
        className="peer h-5 w-11 cursor-pointer appearance-none rounded-full border border-slate-300 bg-slate-400 transition-colors duration-300 checked:bg-teal-500"
        checked={scientific}
        onChange={(e) => {
          setScientific(e.currentTarget.checked)
        }}
      />
      <label
        htmlFor="switch-component-teal"
        className="absolute top-0 left-0 h-5 w-5 cursor-pointer rounded-full border-2 border-slate-500 bg-white shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-teal-600"
      ></label>
    </div>
  )
}

export default SwitchButton

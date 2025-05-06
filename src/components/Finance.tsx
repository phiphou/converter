import {useEffect, useState} from "react"
import {Unit} from "../types"
import InfosBlock from "./InfosBlock"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Tooltip,
  Filler,
  TooltipItem,
  PointElement,
} from "chart.js"

import type {ChartData, ChartOptions} from "chart.js"

import {Line} from "react-chartjs-2"

ChartJS.register(CategoryScale, LinearScale, LineElement, Tooltip, Filler, PointElement)

interface UnitSelectProps {
  dictionary: Record<string, Unit>
}

function Finance({dictionary}: UnitSelectProps) {
  const [rate, setRate] = useState(1)
  const [initial, setInitial] = useState(1)
  const [period, setPeriod] = useState(1)
  const [invests, setInvests] = useState(1)
  const [rawInitial, setRawInitial] = useState<string>("1")
  const [rawInvests, setRawInvests] = useState<string>("1")
  const [rawRate, setRawRate] = useState<string>("1")
  const [periodicity, setPeriodicity] = useState<string>("1")
  const [result, setResult] = useState(1)

  interface VerticalLinePlugin {
    id: string
    afterDatasetsDraw: (chart: {
      tooltip: {
        _active: {element: {x: number}; index: number}[]
      }
      ctx: CanvasRenderingContext2D
      chartArea: {top: number; bottom: number}
    }) => void
  }

  const verticalLinePlugin: VerticalLinePlugin = {
    id: "verticalLine",
    afterDatasetsDraw: (chart) => {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        const ctx = chart.ctx
        const x = chart.tooltip._active[0].element.x
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(x, chart.chartArea.top)
        ctx.lineTo(x, chart.chartArea.bottom)
        ctx.lineWidth = 1
        ctx.strokeStyle = "#EEEEEE"
        ctx.stroke()
        ctx.restore()
      }
    },
  }

  ChartJS.register(verticalLinePlugin)

  const options: ChartOptions<"line"> = {
    responsive: true,
    interaction: {
      intersect: false as const,
      mode: "index" as const,
    },
    scales: {
      x: {
        type: "category",
        grid: {
          color: "rgba(127,127,127,0.2)",
          tickColor: "rgba(127,127,127,0.2)",
          z: 12,
        },
      },
      y: {
        type: "linear",
        stacked: false,
        grid: {
          color: "rgba(127,127,127,0.2)",
          tickColor: "rgba(127,127,127,0.2)",
          z: 12,
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
      tooltip: {
        backgroundColor: "#303030",
        borderColor: "#AAAAAA",
        borderWidth: 1,
        bodyFont: {size: 14},
        titleFont: {size: 14},
        bodySpacing: 8,
        padding: 14,
        boxPadding: 8,
        mode: "index",
        intersect: false,
        position: "nearest",
        callbacks: {
          label: function (tooltipItem) {
            let label = tooltipItem.dataset.label || ""

            if (label) {
              label += ": "
            }
            if (tooltipItem.parsed !== null) {
              label += new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR"}).format(
                tooltipItem.parsed.y as number
              )
            }
            return label
          },
          title: function (tooltipItems: TooltipItem<"line">[]) {
            return tooltipItems.length > 0 && tooltipItems[0].label ? "année " + tooltipItems[0].label : ""
          },
        },
      },
    },
  }

  const [data, setData] = useState<ChartData<"line">>({
    labels: [],
    datasets: [],
  })

  useEffect(() => {
    const p = periodicity === "mois" ? 12 : periodicity === "an" ? 1 : 365.25 / 7

    async function calculateResult() {
      const results =
        initial * Math.pow(1 + rate / 100, period) +
        (invests * (Math.pow(1 + rate / 100 / p, period * p) - 1)) / (rate / 100 / p)
      setResult(results)
    }

    const d2 = []

    const interestsA = []
    const valueA = []
    const somme_épargnéeA = []
    const labelsA = []

    for (let p2 = 0; p2 < period + 1; p2++) {
      const result =
        initial * Math.pow(1 + rate / 100, p2) +
        (invests * (Math.pow(1 + rate / 100 / p, p2 * p) - 1)) / (rate / 100 / p)

      const interests = result - initial - invests * p2 * p
      d2.push({
        name: "" + p2,
        intérêts: interests,
        valeur: result,
        somme_épargnée: invests * p2 * p,
      })
      interestsA.push(interests)
      somme_épargnéeA.push(invests * p2 * p)
      valueA.push(result)
      labelsA.push("" + p2)
    }

    const ds = {
      fill: true,
      pointHitRadius: 0,
      pointRadius: 0,
      pointHoverRadius: 0,
    }

    if (period > 1) {
      setData({
        labels: labelsA,
        datasets: [
          {
            ...ds,
            label: "Intérêts",
            data: interestsA,
            borderColor: "#8884d8",
            backgroundColor: "#8884d8",
          },
          {
            ...ds,
            label: "Epargné",
            data: somme_épargnéeA,
            borderColor: "#ccb866",
            backgroundColor: "#ffe780",
          },
          {
            ...ds,
            label: "Capital",
            data: valueA,
            borderColor: "#82ca9d",
            backgroundColor: "#82ca9d",
          },
        ],
      })
    }

    calculateResult()
  }, [initial, invests, rate, period, periodicity])

  // const CustomTooltip = ({
  //   active,
  //   payload,
  // }: {
  //   active?: boolean
  //   payload?: {payload: {name: string; valeur: number; intérêts: number; somme_épargnée: number}}[]
  //   label?: string
  // }) => {
  //   if (active && payload && payload.length) {
  //     return (
  //       <div className="custom-tooltip">
  //         <p className="text-black dark:text-white">{`année : ${payload[0].payload.name}`}</p>
  //         <p className="text-emerald-400">{`valeur : ${payload[0]["payload"].valeur.toLocaleString("fr-FR", {maximumFractionDigits: 2}).replace(",", ".")}€`}</p>
  //         <p className="text-amber-400">{`somme épargnée : ${payload[0]["payload"].somme_épargnée.toLocaleString("fr-FR", {maximumFractionDigits: 2}).replace(",", ".")}€`}</p>

  //         <p className="text-purple-400">{`intérêts : ${payload[0]["payload"].intérêts.toLocaleString("fr-FR", {maximumFractionDigits: 2}).replace(",", ".")}€`}</p>
  //       </div>
  //     )
  //   }
  //   return ""
  // }

  return (
    <>
      <div className="m-3 mx-auto flex flex-col items-center justify-center">
        <div className="flex w-125 flex-col items-start text-black dark:text-white">
          <div className="flex items-center text-black dark:text-white">
            <div className="min-w-8">Si je place</div>
            <input
              type="number"
              min={0}
              step="any"
              className="mr-3 ml-2 block w-25 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={rawInitial}
              onChange={(e) => {
                const inputValue = e.target.value.replace(",", ".")
                const numericValue = parseFloat(inputValue)
                setRawInitial(inputValue)
                if (!isNaN(numericValue)) setInitial(numericValue)
              }}
            />
            <span>€ à un taux de</span>
            <input
              type="text"
              min={0}
              className="mr-3 ml-2 block max-w-15 min-w-15 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={rawRate}
              onChange={(e) => {
                const inputValue = e.target.value.replace(",", ".")
                const numericValue = parseFloat(inputValue)
                setRawRate(inputValue)
                if (!isNaN(numericValue)) setRate(numericValue)
              }}
            />
            <span>% par an</span>
          </div>
          <div className="mt-6 flex items-center text-black dark:text-white">
            <div className="max-w-36 min-w-36">en mettant de côté</div>
            <input
              type="text"
              min={0}
              className="mr-3 ml-1 block w-25 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={rawInvests}
              onChange={(e) => {
                const inputValue = e.target.value.replace(",", ".")
                const numericValue = parseFloat(inputValue)
                setRawInvests(inputValue)
                if (!isNaN(numericValue)) setInvests(numericValue)
              }}
            />
            <div className="max-w-12 min-w-12">€ par</div>
            <select
              onChange={(e) => setPeriodicity(e.target.value)}
              className="ml block w-full max-w-50 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option key={0} value={"semaine"}>
                semaine
              </option>
              <option key={1} value={"mois"}>
                mois
              </option>
              <option key={2} value={"an"}>
                an
              </option>
            </select>
          </div>
          <div className="mt-3 flex items-center text-black dark:text-white">
            <div className="max-w-36 min-w-36">sur une période de</div>
            <input
              type="text"
              min={0}
              className="mr-3 ml-1 block w-25 rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus-within:ring-blue-500 focus:border-blue-500 focus:ring-blue-500 md:w-40 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus-within:ring-blue-500 dark:focus:border-blue-500 dark:focus:ring-blue-500"
              value={period}
              onKeyDown={(e) => {
                if (e.key === "-") e.preventDefault()
              }}
              onChange={(e) => {
                const inputValue = e.target.value.replace(",", ".")
                const numericValue = parseFloat(inputValue)

                if (!isNaN(numericValue)) setPeriod(numericValue)
              }}
            />
            <div className="max-w-19 min-w-19">ans</div>
          </div>
          <div className="relative mt-10 w-[100%] overflow-x-auto rounded-lg shadow">
            <table className="w-full text-left text-sm text-gray-500 rtl:text-right dark:text-gray-400">
              <tbody>
                <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th scope="row" className="px-6 py-1.5 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                    Capital initial
                  </th>
                  <td className="px-6 py-3 text-gray-900 dark:text-white">
                    {initial.toLocaleString("fr-FR", {maximumFractionDigits: 2}).replace(",", ".") + "€"}
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th scope="row" className="px-6 py-1.5 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                    Somme épargnée
                  </th>
                  <td className="px-6 py-1.5 text-gray-900 dark:text-white">
                    {(invests * period * (periodicity === "mois" ? 12 : periodicity === "an" ? 1 : 365.25 / 7))
                      .toLocaleString("fr-FR", {maximumFractionDigits: 2})
                      .replace(",", ".") + "€"}
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th scope="row" className="px-6 py-1.5 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                    Intérêts
                  </th>
                  <td className="px-6 py-2 text-gray-900 dark:text-white">
                    {(
                      result -
                      initial -
                      invests * period * (periodicity === "mois" ? 12 : periodicity === "an" ? 1 : 365.25 / 7)
                    )
                      .toLocaleString("fr-FR", {maximumFractionDigits: 2})
                      .replace(",", ".") + "€"}
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                    Capital final
                  </th>
                  <td className="px-6 py-3 text-gray-900 dark:text-white">
                    {result.toLocaleString("fr-FR", {maximumFractionDigits: 2}).replace(",", ".") + "€"}
                  </td>
                </tr>
                <tr className="border-b border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800">
                  <th scope="row" className="px-6 py-3 font-medium whitespace-nowrap text-gray-900 dark:text-white">
                    Gains
                  </th>
                  <td className="px-6 py-3 text-gray-900 dark:text-white">
                    {"+" +
                      ((result * 100) / initial - 100)
                        .toLocaleString("fr-FR", {maximumFractionDigits: 2})
                        .replace(",", ".") +
                      "%"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="mt-6 flex">
        <div className="chart-container" style={{position: "relative", height: "40vh", width: "400vh"}}>
          <Line options={options} data={data} />
          <canvas id="chart"></canvas>
        </div>
      </div>

      <div className="pb-6">
        {" "}
        {typeof dictionary["infos"] === "object" && (dictionary["infos"] as {label: string})?.label && (
          <InfosBlock label={"intérêts composés"} info={(dictionary["infos"] as {label: string}).label} />
        )}
      </div>
    </>
  )
}

export default Finance

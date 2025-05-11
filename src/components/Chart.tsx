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

import type {ChartOptions, ChartData} from "chart.js"
import {Line} from "react-chartjs-2"

interface VerticalLinePlugin {
  id: string
  afterDatasetsDraw: (chart: {
    tooltip: {
      _active: {element: {x: number}; index: number}[]
    }
    ctx: CanvasRenderingContext2D
    chartArea: {top: number; bottom: number}
    canvas: HTMLCanvasElement
  }) => void
}

function Chart(data: ChartData<"line">) {
  ChartJS.register(CategoryScale, LinearScale, LineElement, Tooltip, Filler, PointElement)

  const verticalLinePlugin: VerticalLinePlugin = {
    id: "verticalLine",
    afterDatasetsDraw: (chart) => {
      if (chart.tooltip._active && chart.tooltip._active.length) {
        const ctx = chart.ctx
        const x = chart.tooltip._active[0].element.x
        const chartContainer = chart.canvas.parentNode as HTMLElement

        const lineColor = getComputedStyle(chartContainer).getPropertyValue("--line-color").trim()

        ctx.save()
        ctx.beginPath()
        ctx.moveTo(x, chart.chartArea.top)
        ctx.lineTo(x, chart.chartArea.bottom)
        ctx.lineWidth = 1
        ctx.strokeStyle = lineColor || "#FFFFFF" // Utiliser la couleur CSS ou une couleur par défaut
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
              label += " : "
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

  return (
    <div className="chart-container mr-0 ml-0 w-full md:ml-[10%] md:w-[80%]">
      <Line options={options} data={data} />
    </div>
  )
}

export default Chart

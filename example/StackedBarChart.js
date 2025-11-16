import { html } from 'htm/preact';
import { useEffect, useRef } from 'preact/hooks';
import { ChartistBarChart } from 'preact-chartist';

export function StackedBarChart({ title, data, seriesNames = [] }) {
  const chartRef = useRef(null);
  const tooltipRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const tooltip = document.createElement('div');
    tooltip.className = 'StackedBarChart-tooltip';
    tooltip.style.display = 'none';
    chartRef.current.appendChild(tooltip);
    tooltipRef.current = tooltip;

    return () => {
      if (tooltipRef.current && tooltipRef.current.parentNode) {
        tooltipRef.current.parentNode.removeChild(tooltipRef.current);
      }
    };
  }, []);

  const options = {
    stackBars: true,
    axisY: {
      labelInterpolationFnc: (value) => {
        return (value / 1000) + 'k';
      }
    },
    height: '450px',
    chartPadding: {
      top: 15,
      right: 15,
      bottom: 40,
      left: 15
    }
  };

  const listener = {
    draw(drawData) {
      if (drawData.type === 'bar') {
        drawData.element.attr({
          style: 'stroke-width: 30px'
        });

        const seriesIndex = drawData.seriesIndex;
        const value = drawData.value.y;
        const seriesName = seriesNames[seriesIndex] || `Series ${seriesIndex + 1}`;
        
        drawData.element._node.addEventListener('mouseenter', (e) => {
          if (tooltipRef.current) {
            const formattedValue = (value / 1000).toFixed(0) + 'k';
            tooltipRef.current.innerHTML = `<strong>${seriesName}</strong>${formattedValue}`;
            tooltipRef.current.style.display = 'block';
          }
        });

        drawData.element._node.addEventListener('mousemove', (e) => {
          if (tooltipRef.current) {
            const rect = chartRef.current.getBoundingClientRect();
            tooltipRef.current.style.left = (e.clientX - rect.left + 10) + 'px';
            tooltipRef.current.style.top = (e.clientY - rect.top - 10) + 'px';
          }
        });

        drawData.element._node.addEventListener('mouseleave', () => {
          if (tooltipRef.current) {
            tooltipRef.current.style.display = 'none';
          }
        });
      }
    }
  };

  const seriesColors = [
    'hsl(221.2 83.2% 53.3%)',
    'hsl(142.1 76.2% 36.3%)',
    'hsl(24.6 95% 53.1%)',
    'hsl(262.1 83.3% 57.8%)',
    'hsl(346.8 77.2% 49.8%)'
  ];

  return html`
    <div class="StackedBarChart">
      <div class="StackedBarChart-header">
        <h2 class="StackedBarChart-title">${title}</h2>
      </div>

      ${seriesNames.length > 0 && html`
        <div class="StackedBarChart-legend">
          ${seriesNames.map((name, index) => html`
            <div key=${index} class="StackedBarChart-legendItem">
              <span 
                class="StackedBarChart-legendColor" 
                style="background-color: ${seriesColors[index % seriesColors.length]}"
              ></span>
              <span class="StackedBarChart-legendLabel">${name}</span>
            </div>
          `)}
        </div>
      `}

      <div class="StackedBarChart-chartContainer" ref=${chartRef}>
        <${ChartistBarChart}
          data=${data}
          options=${options}
          listener=${listener}
        />
      </div>
    </div>
  `;
}


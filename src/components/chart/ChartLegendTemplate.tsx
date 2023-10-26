import { Component } from "solid-js";
import { GlobalState } from '@/@types';
import { volumeText } from "@/constants";

interface ChartLegendTemplateProps {
  globalState: GlobalState;
};

const ChartLegendTemplate: Component<ChartLegendTemplateProps> = props => {
  return (
    <>
    {!props.globalState.legend.hovered ? <>
      <div
        class="
          flex
          items-center
          gap-2
        "
      >
        <p>O<span
          style={{ color: props.globalState.legend.chartLegendUpdate.color ===
          'rgba(8, 153, 129, 0.5)' ?
            '#089981' :
            '#f23645'
        }}>
          {props.globalState.legend.chartLegendUpdate.open.toFixed(1)}
        </span></p>
        <p>H<span
          style={{ color: props.globalState.legend.chartLegendUpdate.color ===
          'rgba(8, 153, 129, 0.5)' ?
            '#089981' :
            '#f23645'
        }}>
          {props.globalState.legend.chartLegendUpdate.high.toFixed(1)}
        </span></p>
        <p>L<span
          style={{ color: props.globalState.legend.chartLegendUpdate.color ===
          'rgba(8, 153, 129, 0.5)' ?
            '#089981' :
            '#f23645'
        }}>
          {props.globalState.legend.chartLegendUpdate.low.toFixed(1)}
        </span></p>
        <p>C<span
          style={{ color: props.globalState.legend.chartLegendUpdate.color ===
          'rgba(8, 153, 129, 0.5)' ?
            '#089981' :
            '#f23645'
        }}>
          {props.globalState.legend.chartLegendUpdate.close.toFixed(1)}
        </span></p>
        <p><span
          style={{ color: props.globalState.legend.chartLegendUpdate.color ===
          'rgba(8, 153, 129, 0.5)' ?
            '#089981' :
            '#f23645'
        }}>
          {props.globalState.legend.chartLegendUpdate.change >= 0 && '+'}
          {props.globalState.legend.chartLegendUpdate.change.toFixed(1)}
        </span></p>
        <p><span
          style={{ color: props.globalState.legend.chartLegendUpdate.color ===
          'rgba(8, 153, 129, 0.5)' ?
            '#089981' :
            '#f23645'
        }}>({props.globalState.legend.chartLegendUpdate.change >= 0 && '+'}
          {props.globalState.legend.chartLegendUpdate.changePercentage.toFixed(2)}%)
        </span></p>
      </div>
      <div
        class="
          font-semibold
          w-full
        "
      >
        {volumeText}
        <span
          style={{ color: props.globalState.legend.chartLegendUpdate.color ===
            'rgba(8, 153, 129, 0.5)' ?
              '#089981' :
              '#f23645',
            "font-weight": 'normal'
          }}
        >
          {props.globalState.legend.chartLegendUpdate.volume.toFixed(2)}
        </span>
      </div>
      </> :
    <>
      <div
        class="
          flex
          items-center
          gap-2
        "
      >
        <p>O<span
          style={{ color: props.globalState.legend.chartLegendHovered.color ===
          'rgba(8, 153, 129, 0.5)' ?
            '#089981' :
            '#f23645'
        }}>
          {props.globalState.legend.chartLegendHovered.open.toFixed(1)}
        </span></p>
        <p>H<span
          style={{ color: props.globalState.legend.chartLegendHovered.color ===
          'rgba(8, 153, 129, 0.5)' ?
            '#089981' :
            '#f23645'
        }}>
          {props.globalState.legend.chartLegendHovered.high.toFixed(1)}
        </span></p>
        <p>L<span
          style={{ color: props.globalState.legend.chartLegendHovered.color ===
          'rgba(8, 153, 129, 0.5)' ?
            '#089981' :
            '#f23645'
        }}>
          {props.globalState.legend.chartLegendHovered.low.toFixed(1)}
        </span></p>
        <p>C<span
          style={{ color: props.globalState.legend.chartLegendHovered.color ===
          'rgba(8, 153, 129, 0.5)' ?
            '#089981' :
            '#f23645'
        }}>
          {props.globalState.legend.chartLegendHovered.close.toFixed(1)}
        </span></p>
        <p><span
          style={{ color: props.globalState.legend.chartLegendHovered.color ===
          'rgba(8, 153, 129, 0.5)' ?
            '#089981' :
            '#f23645'
        }}>
          {props.globalState.legend.chartLegendHovered.change >= 0 && '+'}
          {props.globalState.legend.chartLegendHovered.change.toFixed(1)}
        </span></p>
        <p><span
          style={{ color: props.globalState.legend.chartLegendHovered.color ===
          'rgba(8, 153, 129, 0.5)' ?
            '#089981' :
            '#f23645'
        }}>({props.globalState.legend.chartLegendHovered.change >= 0 && '+'}
          {props.globalState.legend.chartLegendHovered.changePercentage.toFixed(2)}%)
        </span></p>
      </div>
      <div
        class="
          font-semibold
          w-full
        "
      >
        {volumeText}
        <span
          style={{ color: props.globalState.legend.chartLegendHovered.color ===
            'rgba(8, 153, 129, 0.5)' ?
              '#089981' :
              '#f23645',
            "font-weight": 'normal'
          }}
        >
          {props.globalState.legend.chartLegendHovered.volume.toFixed(2)}
        </span>
      </div>
      </>
    }
    </>
  )
}

export default ChartLegendTemplate

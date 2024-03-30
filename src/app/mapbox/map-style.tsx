import type {GeoJSONSourceRaw, FillLayer, LineLayer} from 'react-map-gl';

// For more information on data-driven styles, see https://www.mapbox.com/help/gl-dds-ref/
export const dataLayer: FillLayer = {
  id: 'data',
  type: 'fill',
  paint: {
    'fill-color': {
      property: 'percentile',
      stops: [
        [0, '#3288bd'],
        [1, '#eeeeee'],
        [2, '#abdda4'],
        [3, '#e6f598'],
        [4, '#ffffbf'],
        [5, '#fee08b'],
        [6, '#fdae61'],
        [7, '#f46d43'],
        [8, '#d53e4f']
      ]
    },
    'fill-opacity': 0.8
  }
};

export const lineLayer: LineLayer = {
  id: 'sf-neighborhoods-outline',
  source: 'sf-neighborhoods',
  type: 'line',
  paint: {
    'line-width': 0.15,
    'line-color': '#0080ef'
  }
};
import * as React from 'react';

import { MapboxMapViewProps } from './MapboxMap.types';

export default function MapboxMapView(props: MapboxMapViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}

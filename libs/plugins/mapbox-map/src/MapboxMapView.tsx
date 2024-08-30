import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { MapboxMapViewProps } from './MapboxMap.types';

const NativeView: React.ComponentType<MapboxMapViewProps> =
  requireNativeViewManager('TestShit');

export default function TestShitView(props: MapboxMapViewProps) {
  return <NativeView {...props} />;
}

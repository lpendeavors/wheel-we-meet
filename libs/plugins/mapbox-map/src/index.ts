import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to TestShit.web.ts
// and on native platforms to TestShit.ts
import MapboxMapModule from './MapboxMapModule';
import MapboxMapView from './MapboxMapView';
import { ChangeEventPayload, MapboxMapViewProps } from './MapboxMap.types';

// Get the native constant value.
export const PI = MapboxMapModule.PI;

export function hello(): string {
  return MapboxMapModule.hello();
}

export async function setValueAsync(value: string) {
  return await MapboxMapModule.setValueAsync(value);
}

const emitter = new EventEmitter(MapboxMapModule ?? NativeModulesProxy.MapboxMap);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { MapboxMapView, MapboxMapViewProps, ChangeEventPayload };

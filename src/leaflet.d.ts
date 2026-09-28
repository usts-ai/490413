declare module 'leaflet' {
  export interface MapOptions {
    center?: [number, number];
    zoom?: number;
    zoomControl?: boolean;
    scrollWheelZoom?: boolean;
  }

  export interface TileLayerOptions {
    attribution?: string;
    maxZoom?: number;
  }

  export interface DivIconOptions {
    className?: string;
    html?: string;
    iconSize?: [number, number];
    iconAnchor?: [number, number];
  }

  export interface MarkerOptions {
    icon?: DivIcon;
  }

  export class Map {
    constructor(element: HTMLElement, options?: MapOptions);
    remove(): this;
    invalidateSize(): this;
    fitBounds(bounds: LatLngBounds): this;
    addLayer(layer: Layer): this;
  }

  export class LatLngBounds {
    pad(bufferRatio: number): LatLngBounds;
  }

  export class Layer {}

  export class LayerGroup extends Layer {
    clearLayers(): this;
    addLayer(layer: Layer): this;
    addTo(map: Map): this;
  }

  export class TileLayer extends Layer {
    addTo(map: Map): this;
  }

  export class DivIcon {}

  export class Marker extends Layer {
    constructor(latlng: [number, number], options?: MarkerOptions);
    on(type: string, fn: () => void): this;
  }

  export function map(element: HTMLElement, options?: MapOptions): Map;
  export function tileLayer(url: string, options?: TileLayerOptions): TileLayer;
  export function layerGroup(): LayerGroup;
  export function divIcon(options?: DivIconOptions): DivIcon;
  export function marker(latlng: [number, number], options?: MarkerOptions): Marker;
  export function latLngBounds(latlngs: Array<[number, number]>): LatLngBounds;

  interface LeafletStatic {
    map: typeof map;
    tileLayer: typeof tileLayer;
    layerGroup: typeof layerGroup;
    divIcon: typeof divIcon;
    marker: typeof marker;
    latLngBounds: typeof latLngBounds;
  }

  const L: LeafletStatic;
  export default L;
}

declare module 'leaflet/dist/leaflet.css';

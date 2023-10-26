import dynamic from 'next/dynamic';
import { forwardRef, ReactNode, Ref } from 'react';

export const LazyMapContainer = dynamic(() => import('./MapLazyComponents').then((m) => m.MapContainer),{
    ssr: false,
    loading: () => (<div style={{ height: '400px' }} />),}
);

export const MapContainer = forwardRef((props, ref) => (
  <LazyMapContainer props={undefined} {...props} forwardedRef={ref} />
));

MapContainer.displayName = 'MapContainer';

// direct import from 'react-leaflet'
export const GeoJSON = dynamic(
    () => import('react-leaflet').then((m) => m.GeoJSON),
    { ssr: false }
  );

/* TODO: Fix the Type error */

// export interface MapContainerProps {
//   children?: ReactNode;
//   center: [number, number];
//   zoom: number;
//   style: React.CSSProperties;
//   touchZoom: boolean;
//   zoomControl: boolean;
//   attributionControl: boolean;
//   dragging: boolean;
//   scrollWheelZoom: boolean;
//   doubleClickZoom: boolean;
// }

// export const LazyMapContainer = dynamic(
//   () => import('./MapLazyComponents').then((m) => m.MapContainer),
//   {
//     ssr: false,
//     loading: () => <div style={{ height: '400px' }} />,
//   }
// );

// export const MapContainer = forwardRef((props: MapContainerProps, ref) => (
//   <LazyMapContainer {...props} ref={ref} />
// ));

// MapContainer.displayName = 'MapContainer';

// export const GeoJSON = dynamic(
//     () => import('react-leaflet').then((m) => m.GeoJSON),
//     { ssr: false }
//   );
  
  
 
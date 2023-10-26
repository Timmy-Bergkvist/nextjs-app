import {MapContainer as LMapContainer} from 'react-leaflet'
import { Ref } from 'react';

export const MapContainer = ({ forwardedRef, ...props }: { forwardedRef: Ref<any>, props: any }) => (
    <LMapContainer {...props} ref={forwardedRef} />
);


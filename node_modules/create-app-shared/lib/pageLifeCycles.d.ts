import * as React from 'react';
import type { Listener } from './types';
export declare function emit(cycle: string, pathname?: string, ...args: any): void;
export declare function withPageLifeCycle<P>(Component: React.ComponentClass<P>): React.ComponentClass<{}, any>;
export declare function createUsePageLifeCycle({ useEffect }: {
    useEffect: any;
}): {
    usePageShow: (callback: Listener) => void;
    usePageHide: (callback: Listener) => void;
};

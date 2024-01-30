import { useEffect, useMemo, useRef } from 'react';
import { TCallback } from './type';

const useClickAway = (callback: TCallback) => {
    const ref = useRef(null);
    const saveCallback = useRef(callback);
    const events = useMemo(() => ['mousedown', 'touchstart'], []);

    useEffect(() => {
        saveCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const element = ref.current as HTMLElement | null;

        if (!element) {
            return;
        }

        const eventHandler = (e: Event) => {
            const { target } = e;

            if (element.contains(target as Node)) {
                return;
            }

            saveCallback.current(e);
        };

        for (const event of events) {
            document.addEventListener(event, eventHandler);
        }

        return () => {
            for (const eventName of events) {
                document.removeEventListener(eventName, eventHandler);
            }
        };
    }, [events, ref]);

    return ref;
};

export default useClickAway;

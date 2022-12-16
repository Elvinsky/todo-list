import {useCallback, useState} from 'react';

export default function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);
    const handler = useCallback((e) => {
        setValue(e.target.value);
    }, []);
    return [value, handler, setValue];
}

import React, { useState } from 'react';

const InstantType = (defaultValue=' ') => {
    const [findValue, setFindValue] = useState(defaultValue)

    const handleChnageInstant = (e)=>
    {
        setFindValue(e.target.value);
    }

    return [findValue,handleChnageInstant]
};

export default InstantType;

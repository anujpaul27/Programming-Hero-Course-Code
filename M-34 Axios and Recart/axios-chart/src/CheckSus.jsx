import React, { use } from 'react';

const CheckSus = ({data}) => {
    const dataInfo = use(data)
    console.log(dataInfo);
    return (
        <div>
            <p>Data Length {dataInfo.length}</p>
        </div>
    );
};

export default CheckSus;
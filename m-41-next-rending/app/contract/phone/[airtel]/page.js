import React from 'react';

const AirtelPage = async ({params}) => {
    const {airtel} = await params
    // console.log(airtel);
    return (
        <div>
            Number is -- {airtel}
        </div>
    );
};

export default AirtelPage;
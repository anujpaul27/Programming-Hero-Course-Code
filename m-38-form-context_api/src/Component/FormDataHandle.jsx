import React from 'react';

const FormDataHandle = () => {

    const handleSubmit = (e) => 
    {
        // Stop Default refresh after submit
        e.preventDefault()

        // Get target event
        const data = new FormData(e.target)
        const name = data.get('name')
        const password = data.get('password')
        console.log(name, password);
        

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name='name' placeholder='Enter Name: ' />
                <br />
                <input type="password" name="password" id="" placeholder='Password' />
                <br />
                <input type="submit" value="submit" />

            </form>
        </div>
    );
};

export default FormDataHandle;
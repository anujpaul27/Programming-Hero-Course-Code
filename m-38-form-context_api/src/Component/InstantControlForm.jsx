

const InstantControlForm = () => {

    const handleName = (e) => {
        console.log(e);
    }

    return (
        <div>
            <form >
                <input className="RedBorder" onKeyUp={(e) => handleName(e.target.value)} type="text" placeholder='Enter Name' name='name' />
                <br />
                <input type="text" name='password' placeholder='Enter Password' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default InstantControlForm;
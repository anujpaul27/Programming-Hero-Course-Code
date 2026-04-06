import InstantType from "../Custom Hook/InstantType";


const InstantControlForm = () => {
    const [password, onChnagePassword] = InstantType(' ')

    const handleName = (e) => {
        console.log(e);
        console.log(password);
    }

    return (
        <div>
            <form >
                <input className="RedBorder" onKeyUp={(e) => handleName(e.target.value)} type="text" placeholder='Enter Name' name='name' />
                <br />
                <input type="text" name='password' onChange={onChnagePassword} placeholder='Enter Password' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default InstantControlForm;
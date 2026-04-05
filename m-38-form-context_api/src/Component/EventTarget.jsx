import '../index.css';

const Main = () => {

    function handleSubmitForm(e) {
        e.preventDefault()
        console.log(e.target.name.value);
        console.log(e.target.password.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmitForm}>
                <input type="text" name='name' placeholder='Enter Name..' />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Main;
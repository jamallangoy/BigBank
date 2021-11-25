const Login = () => {

    const context = React.useContext(UserContext)


    return(
        <>
            <UserLogin 
                title="Login"
                status="All fields are required"
            />
        </>
    )
}
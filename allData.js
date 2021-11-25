const AllData = () => {

    const context = React.useContext(UserContext)


    return(
        <>
            <h5>{JSON.stringify(context)}</h5>
        </>
    )
}
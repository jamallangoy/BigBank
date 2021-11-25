const Withdraw = () => {

    const context = React.useContext(UserContext)


    return(
        <>
            <MakeWithdrawal
                title={(<div style={{fontSize:"5rem"}}>Withdraw</div>)}
                status={(<div style={{fontSize:"1.8rem"}}>Current Balance </div>)}
            />
        </>
    )
}
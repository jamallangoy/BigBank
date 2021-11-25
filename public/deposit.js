const Deposit = () => {

    const context = React.useContext(UserContext)


    return(
        <>
            <MakeDeposit 
                title={(<div style={{fontSize:"5rem"}}>Deposit</div>)}
                status={(<div style={{fontSize:"1.8rem"}}>Current Balance</div>)}
            />
        </>
    )
}
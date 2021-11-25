const Account = () => {

    const context = React.useContext(UserContext)


    return(
        <>
        <div className="account-grid">
            <MakeDeposit 
                title={(<div style={{fontSize:"5rem"}}>Deposit</div>)}
                status={(<div style={{fontSize:"1.8rem"}}>Current Balance</div>)}
            />
            <MakeWithdrawal
                title={(<div style={{fontSize:"5rem"}}>Withdraw</div>)}
                status={(<div style={{fontSize:"1.8rem"}}>Current Balance </div>)}
            />
        </div>
        </>
    )
}
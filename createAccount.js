const CreateAccount = () => {
    

    return(
        <>
        
        <div className="account-grid">
            <CreateUser 

                title={(<div style={{fontSize:"3.5rem"}}>New Users </div>)}
                status={(<div style={{fontSize:"2rem"}}>Please Create Your Account</div>)}
            
            />
            <UserLogin 
                title={(<div style={{fontSize:"3.5rem"}}>Returning Accounts </div>)}
                status={(<div style={{fontSize:"2rem"}}>All fields are required</div>)}
            />

        </div>

        </>
    )
}


                        
                            
                           
                        
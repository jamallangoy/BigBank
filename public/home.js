const Home = () => {
    
    const context = React.useContext(UserContext)
    console.log(context.users[0].name)
    


    return(
            <Template 
                title={(
                    <>
                        <h1 style={{fontSize:"8rem"}}> "The Biggest E-Bank Ever"</h1>
                    </>
                )}
                status={(<h4 style={{fontSize:"2rem"}}>Fortune Magazine, Aug 2021</h4>)}
                body={(
                    <>
                        
                        {(<Link to="/createaccount" style={{color: "white", textDecoration:"none"}}><button className="btn btn-light">Welcome</button></Link>)}
                    </>
                )}
                
            />
            
    )
}
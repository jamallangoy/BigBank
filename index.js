const App = () => {

    const context = React.useContext(UserContext)
    console.log(UserContext)

    return (
        <>
            <HashRouter>
                <Navbar />
                <UserContext.Provider
                    value={{users:[{
                        name: "Jamall",
                        email:"jamallangoy@gmail.com",
                        password: "secret",
                        balance: 100
                    }]}}
                >
                    <Route path="/" exact component={Home} />
                    <Route path="/createaccount" component={CreateAccount} />
                    <Route path="/login"  component={Login} />
                    <Route path="/account"  component={Account} />
                    <Route path="/deposit"  component={Deposit} />
                    <Route path="/withdraw"  component={Withdraw} />
                    <Route path="/alldata"  component={AllData} />
            
                </UserContext.Provider>
            </HashRouter>
            
        </>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
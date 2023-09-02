import "./accounts.css"

function Accounts () {
    return(
        <section>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account__wrapper">
                    <h3 className="account__wrapper__title">Argent Bank Checking (x8349)</h3>
                    <p className="account__wrapper__amount">$AmountChecking</p>
                    <p className="account__wrapper__description">Available Balance</p>
                </div>
                <div className="account__wrapperButton">
                    <button className="transactionButton">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account__wrapper">
                    <h3 className="account__wrapper__title">Argent Bank Savings (x8349)</h3>
                    <p className="account__wrapper__amount">$AmountSavings</p>
                    <p className="account__wrapper__description">Available Balance</p>
                </div>
                <div className="account__wrapperButton">
                    <button className="transactionButton">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account__wrapper">
                    <h3 className="account__wrapper__title">Argent Bank Credit Card (x8349)</h3>
                    <p className="account__wrapper__amount">$AmountCreditCard</p>
                    <p className="account__wrapper__description">Available Balance</p>
                </div>
                <div className="account__wrapperButton">
                    <button className="transactionButton">View transactions</button>
                </div>
            </section>
        </section>
    )
}

export default Accounts 
import "./Profile.css"

function Profile () {
    return(
        <main className="background">
            <div className="profile">
                <h1>Welcome back
                    <br />
                    $Username
                </h1>
                <button className="profile__button">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
            <section class="account">
                <div class="account__wrapper">
                    <h3 class="account__wrapper__title">Argent Bank Checking (x8349)</h3>
                    <p class="account__wrapper__amount">$AmountChecking</p>
                    <p class="account__wrapper__description">Available Balance</p>
                </div>
                <div class="account__wrapperButton">
                    <button class="transactionButton">View transactions</button>
                </div>
            </section>
            <section class="account">
                <div class="account__wrapper">
                    <h3 class="account__wrapper__title">Argent Bank Savings (x8349)</h3>
                    <p class="account__wrapper__amount">$AmountSavings</p>
                    <p class="account__wrapper__description">Available Balance</p>
                </div>
                <div class="account__wrapperButton">
                    <button class="transactionButton">View transactions</button>
                </div>
            </section>
            <section class="account">
                <div class="account__wrapper">
                    <h3 class="account__wrapper__title">Argent Bank Credit Card (x8349)</h3>
                    <p class="account__wrapper__amount">$AmountCreditCard</p>
                    <p class="account__wrapper__description">Available Balance</p>
                </div>
                <div class="account__wrapperButton">
                    <button class="transactionButton">View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default Profile
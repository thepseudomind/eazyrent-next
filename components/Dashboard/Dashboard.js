import Meta from '../Meta/Meta';
import Sidebar from '../Sidebar/Sidebar';
import MainContent from '../MainContent/MainContent';
import ProfileForm from '../ProfileForm/ProfileForm';
import ProfileBox from '../ProfileBox/ProfileBox';
import AlertBox from '../AlertBox/AlertBox';
import Bank from '../Bank/Bank';
import FloatingButton from '../FloatingButton/FloatingButton';
import PaymentForm from '../PaymentForm/PaymentForm';
import Searchbar from '../Searchbar/Searchbar';
import ListingTitle from '../ListingTitle/ListingTitle';
import Listings from '../Listings/Listings';

const Dashboard = (props)=> {
    let componentToRender;
    switch (props.route) {
        case "main":
            componentToRender = <p>I'm the main</p>;
            break;

        case "listings":
            componentToRender = (
                <div>
                    <Searchbar/>
                    <ListingTitle toggle={props.toggle}/>
                    <Listings listings={props.listings} toggleStatus={props.toggleStatus} testUser={props.testUser}/>
                </div>
            );
            break;

        case "profile":
            componentToRender = (
                <div>
                    <ProfileBox/>
                    <ProfileForm/>
                </div>
            );
            break;

        case "settings":
            componentToRender = <h1>Settings page</h1>;
            break;

        case "payment":
            componentToRender = (
                <div>
                    <AlertBox message={props.alert}/>
                    <Bank banks={props.banks} editBank={props.editBank} deleteBank={props.deleteBank} changeForm={props.changeForm}/>
                    <PaymentForm changeInput={props.changeInput} form={props.form} changeForm={props.changeForm} addToBanks={props.addBank} overwriteBank={props.overwriteBank} bankToEdit={props.bankToEdit}/>
                    {props.form === '' ? <FloatingButton changeForm={props.changeForm} showAlert={props.showAlert}/> : <span></span>}
                </div>
            );
            break;
    }

    return (
        <div>
            <Meta pageTitle={props.pageTitle}/>
            <div className="app">
                <Sidebar route={props.route}/>
                <MainContent>
                    {componentToRender}
                </MainContent>
                <style jsx>
                    {`
                        .app{
                            width: 100%;
                            height: 100vh;
                            display: flex;
                        }
                        
                        .app > *{
                            height: inherit;
                        }
                    `}
                </style>
            </div>
        </div>
    )
};

export default Dashboard;
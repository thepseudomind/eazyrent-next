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
import BackButton from '../BackButton/BackButton';
import ImageGallery from '../ImageGallery/ImageGallery';
import DetailBox from '../DetailBox/DetailBox';
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import Map from '../Map/Map';
import ImagePicker from '../ImagePicker/ImagePicker';
import ListingForm from '../ListingForm/ListingForm';

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

        case "add-listing":
            componentToRender = (
                <div>
                    <BackButton text="Back to listings" route="/listings"/>
                    <div className="app__main--details">
                        <ListingForm/>
                        <ImagePicker/>
                    </div>
                    <style jsx>
                        {`
                            .app__main--details{
                                display: flex;
                                justify-content: space-between;
                                margin: 5rem 0;
                                // background-color: red;
                            }
                        `}
                    </style>
                </div>
            );
            break;

        case "view-listing":
            componentToRender = (
                <div>
                    <BackButton text="Back to listings" route="/listings"/>
                    <div className="app__main--details">
                        <ImageGallery images={props.listing.images}/>
                        <DetailBox listing={props.listing}/>
                    </div>
                    <div className="app__main--details">
                        <DescriptionBox/>
                        <Map/>
                    </div>
                    <style jsx>
                        {`
                            .app__main--details{
                                display: flex;
                                justify-content: space-between;
                                margin: 5rem 0;
                                // background-color: red;
                            }
                            
                            // .app__main--details:not(:last-child){
                            //     margin-bottom: 5rem;
                            // }
                        `}
                    </style>
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
            </div>
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
    )
};

export default Dashboard;
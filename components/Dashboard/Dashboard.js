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
import WelcomeBox from '../WelcomeBox/WelcomeBox';
import ActionBox from '../ActionBox/ActionBox';
import Promotions from '../Promotions/Promotions';
import MultiFAB from '../MultiFAB/MultiFAB';
import DescriptionForm from '../DescriptionForm/DescriptionForm';
import LikedHomes from '../LikedHomes/LikedHomes';
import PageTitle from '../PageTitle/PageTitle';

const Dashboard = (props)=> {
    let componentToRender;
    switch (props.route) {
        case "main":
            componentToRender = (
                <div>
                    <WelcomeBox/>
                    <ActionBox numberOfLikes={props.numberOfLikes} numberOfHomes={props.numberOfHomes}/>
                    <Promotions/>
                </div>
            );
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
                        <ListingForm formTitle="Add new home" addListing={props.addListing}/>
                        <div className="other-form">
                            <DescriptionForm/>
                            <ImagePicker getImages={props.getImages}/>
                        </div>
                    </div>
                    <style jsx>
                        {`
                            .app__main--details{
                                display: flex;
                                justify-content: space-between;
                                margin: 5rem 0;
                                // background-color: red;
                            }

                            .other-form{
                                margin-top: 6rem;
                            }
                        `}
                    </style>
                </div>
            );
            break;
        
            case "edit-listing":
                componentToRender = (
                    <div>
                        <BackButton text="Cancel editing" route={`/view-listing/?id=${props.listingID}`}/>
                        <div className="app__main--details">
                            <ListingForm formTitle="Edit home" addListing={props.addListing} listingToEdit={props.listingToEdit} editMode={true} overwriteListing={props.overwriteListing}/>
                            <div className="other-form">
                                <DescriptionForm description={props.listingToEdit.description}/>
                                {/* <ImagePicker getImages={props.getImages} fetchedImages={props.listingToEdit.images}/> */}
                            </div>
                        </div>
                        <style jsx>
                            {`
                                .app__main--details{
                                    display: flex;
                                    justify-content: space-between;
                                    margin: 5rem 0;
                                    // background-color: red;
                                }

                                .other-form{
                                    margin-top: 6rem;
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
                        <DetailBox listing={props.listing} isLiked={props.isLiked} likeListing={props.likeListing} unlikeListing={props.unlikeListing}/>
                    </div>
                    <div className="app__main--details">
                        <DescriptionBox description={props.listing.description}/>
                        <Map/>
                    </div>
                    {(props.listing.user !== "abgfigu143668") ? <span></span> : <MultiFAB editListing={props.editListing} deleteListing={props.deleteListing}/>}
                    <style jsx>
                        {`
                            .app__main--details{
                                display: flex;
                                justify-content: space-between;
                                align-items: flex-start;
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

        case "likes":
            componentToRender = (
                <div>
                    <PageTitle title="Liked Homes"/>
                    <LikedHomes likedHomes={props.housesLiked}/>
                </div>
            );
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
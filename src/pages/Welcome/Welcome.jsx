import './Welcome.scss';
import Btn from '../../components/Btn/Btn';
import image from '../../assets/Images/image_4.jpg';
import icon1 from '../../assets/Icon/icon_1.svg';
import icon2 from '../../assets/Icon/icon_2.svg';
import icon3 from '../../assets/Icon/icon_3.svg';
 

export default function Welcome(){
    return(
        <div className='welcome_container'>
            <h1 className='welcome_title'>Great, now let's get started!</h1>
            <p className='welcome_subtitle'>We'll be calling you on the next business day to help you set your free trial.</p>
            <div className="welcome_wrapper">
                <div className="welcome_wrapper__one">
                    <p className='welcome_wrapper_text'>In the mean time, if you have specific checking, saving or credit cards we need to set those up. We'll use these connections to complete your free month of bookkeeping.</p>
                    <div className="welcome_wrapper__list_container">
                        <p className="welcome_wrapper_item">
                            <img src={icon1} alt="store data" /> We never store your bank account credentials
                        </p>
                        <p className="welcome_wrapper_item">
                            <img src={icon2} alt="protect data" /> We encrypt data with the same level of security as online banking
                        </p>
                        <p className="welcome_wrapper_item">
                            <img src={icon3} alt="disconnect data" /> You'll have the ability to disconnect personnala accounts
                        </p>
                    </div>
                    <p className="welcome_wrapper_faq">
                        Can't find your institution, or having trouble linking? No worries, we'll cover this on our call. Need to set up business specific banking? We can help with that too!
                    </p>
                </div>
                <div className="welcome_wrapper__two">
                    <img  className='welcome_wrapper__two_img' src={image} alt="checking account display" />
                </div>
            </div>
            <div className="welcome_btn_container">
                <span className='welcome_btn_span'>Ready for a chat</span>
                <Btn text='Link to business account' class_name='welcome_btn'/>
            </div>
        </div>
    );
}
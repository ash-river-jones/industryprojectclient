import './ContactInfo.scss';

export default function ContactInfo() {
	return (
		<>
        {/* <div>
            <img src="" alt="logo" className=''/>
        </div> */}
            <div className='c-info'>
                <form action="" className='c-info__form'>
                
                    <h2 className='c-info__subheader'>How can our team contact you?</h2>

                    <p>Before we can get your free month of bookkeeping started, we’ll need a few more details. Let us know the best phone number to reach you, and we’ll get in touch ASAP to get started.</p>

                    <label htmlFor="" className='c-info__form-label'>1. COMPANY NAME
                        <input type="text" className='c-info__form-input-name'/>
                    </label>
                    

                    <label htmlFor="" className='c-info__form-label'>2. PHONE NUMBER
                        <input type="text" className='c-info__form-input-phone' />
                    </label>

                    <div className='c-info__wrper-labels'>
                        <label htmlFor="" className='c-info__form-label'>3. COUNTRY
                            <input type="text" className='c-info__form-input-country'/>
                        </label>
                        

                        <label htmlFor="" className='c-info__form-label'>3. TIME ZONE
                            <input type="text" className='c-info__form-input-time' />
                        </label>
                        
                    </div>

                    <button></button>
                </form>
		    </div>
		</>
	);
}
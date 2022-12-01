import './ContactInfo.scss';

export default function ContactInfo() {
	return (
		<>
        {/* <div>
            <img src="" alt="logo" className=''/>
        </div> */}
            <div className='c-info'>
                <form action="" className='c-info__form'>
                    <h2 className='c-info__subheader'>Contact</h2>
                    <label htmlFor="" className='c-info__form-label'>1. Company Name
                        <input type="text" className='c-info__form-input-name'/>
                    </label>
                    <label htmlFor="" className='c-info__form-label'>2. Phone Number
                        <input type="text" className='c-info__form-input-phone' />
                    </label>
                    <div className='c-info__wrper-labels'>
                        <label htmlFor="" className='c-info__form-label'>3. Country
                            <input type="text" className='c-info__form-input-country'/>
                        </label>
                        <label htmlFor="" className='c-info__form-label'>3. Time zone
                            <input type="text" className='c-info__form-input-time' />
                        </label>
                    </div>
                    <button></button>
                </form>
		    </div>
		</>
	);
}
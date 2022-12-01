import './BusinessInfo.scss';

export default function BusinessInfo() {
	return (
		<>
        <div>
            <img src="" alt="logo" className=''/>
        </div>
        <div className='b-info'>
            <form action="" className='b-info__form'>
                <h2 className='b-info__form-header'>Tell us about your business</h2>

                <label htmlFor="" className='b-info__form-label'>1. Company Size</label>
                <input type="text" />

                <label htmlFor="" className='b-info__form-label'>2. Monthly Revenue</label>
                <input type="text" className='b-info__form-input'/>

                <label htmlFor="" className='b-info__form-label'>3. Monthly Revenue</label>
                <input type="text" className='b-info__form-input'/>

                <br />

                <h2 className='b-info-header'>Contact</h2>

                <label htmlFor="" className='b-info__form-label'>1. Company Name</label>
                <input type="text" className='b-info__form-input'/>

                <label htmlFor="" className='b-info__form-label'>2. Phone Number</label>
                <input type="text" className='b-info__form-input' />

                <div className='b-info-wrper-tags'>

                <label htmlFor="" className='b-info__form-label'>3. Country</label>
                <input type="text" className='b-info__form-input'/>

                <label htmlFor="" className='b-info__form-label'>3. Time zone</label>
                <input type="text" className='b-info__form-input' />

                </div>

                <button></button>
            </form>
            <div className='b-info__side-wrapper'>
                <div className='b-info__side-wrapper-up'>
                    <img src="" alt="" />
                    <h2></h2>
                    <p></p>
                </div>
                <div className='b-info__side-wrapper-down'>
                    <img src="" alt="" />
                    <p></p>
                </div>
            </div>
		</div>
		</>
	);
}
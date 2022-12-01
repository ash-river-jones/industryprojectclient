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

                    <p className='c-info__paragraph'>Before we can get your free month of bookkeeping started, we’ll need a few more details. Let us know the best phone number to reach you, and we’ll get in touch ASAP to get started.</p>

                    <label htmlFor="" className='c-info__form-label'>1. COMPANY NAME
                        <input type="text" className='c-info__form-input-name'/>
                    </label>
                    

                    <label htmlFor="" className='c-info__form-label'>2. PHONE NUMBER
                        <input type="text" className='c-info__form-input-phone' />
                    </label>

                    {/* <div className='c-info__wrper-country'> */}
                        {/* <label htmlFor="" className='c-info__form-label-country'>3. COUNTRY
                            <div className='c-info__wrper-country'>
                                <input type="radio" className='c-info__form-input-country' name='selector' id='Canada'/>
                                <input type="radio" className='c-info__form-input-country-2' name='selector' id='UnitedStates'/>
                            </div>
                        </label> */}
                        

                        {/* <label htmlFor="" className='c-info__form-label'>
                            <input type="text" className='c-info__form-input-time' />
                        </label> */}
                        
                    {/* </div> */}

                    {/* Ratio btns */}

                    {/* <div class="container"> */}
                        <div className='c-info__selector'>
                            <p className='c-info__country-label'>3. COUNTRY</p>
                            <div className='c-info__country-btns-wrpr'>
                            <div className='c-info__selecotr-item'>
                                <input type="radio" id="radio1" name="selector" className='c-info__selector-item-radio' checked />
                                <label for="radio1" className='c-info__selector-item-label'>Canada</label>
                            </div>
                            <div className='c-info__selecotr-item'>
                                <input type="radio" id="radio2" name="selector" className='c-info__selector-item-radio' />
                                <label for="radio2" className='c-info__selector-item-label'>United States</label>
                            </div>
                            </div>
                            {/* <div class="selecotr-item">
                                <input type="radio" id="radio3" name="selector" class="selector-item_radio" />
                                <label for="radio3" class="selector-item_label">radio 3</label>
                            </div> */}
                        </div>
                    {/* </div> */}

                    <label htmlFor="" className='c-info__form-label-time'>3. TIME ZONE
                            {/* <input type="text" className='c-info__form-input-time' /> */}
                            <select className='c-info__form-input-time' name="" id="">
                                <option value="" className='c-info__form-input-time-combo'>Newfoundland (UTC-3:30)</option>
                                <option value="" className='c-info__form-input-time-combo'>Atlantic (UTC-4)</option>
                                <option value="" className='c-info__form-input-time-combo'>Eastern (UTC-5)</option>
                                <option value="" className='c-info__form-input-time-combo'>Central (UTC-6)</option>
                                <option value="" className='c-info__form-input-time-combo'>Mountain (UTC-7)</option>
                                <option value="" className='c-info__form-input-time-combo'>Pacific (UTC-8)</option>
                                <option value="" className='c-info__form-input-time-combo'>Alaska (UTC-9)</option>
                                <option value="" className='c-info__form-input-time-combo'>Hawaii-Aleutian (UTC-10)</option>
                            </select>
                    </label>
                    {/* <button></button> */}
                </form>
		    </div>
		</>
	);
}
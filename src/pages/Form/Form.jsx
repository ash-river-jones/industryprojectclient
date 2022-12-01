import './Form.scss';
import '../../components/CompanySize/CompanySize.scss';
import '../../components/ContactInfo/ContactInfo.scss';
import '../../components/AccountForm/AccountForm.scss';
import Btn from '../../components/Btn/Btn'; 

// import ContactInfo from '../../components/ContactInfo/ContactInfo';
// import CompanySize from '../../components/CompanySize/CompanySize';
// import AccountForm from '../../components/AccountForm/AccountForm';
import FormArticle from '../../components/FormArticle/FormArticle';

import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const { v4: uuid } = require('uuid');

export default function Form() {
	const navigate = useNavigate();

	const [companySize, setCompanySize] = useState('');
	const [monthyRevenue, setMonthyRevenue] = useState('');
	const [lastTaxReturn, setLastTaxReturn] = useState('');
	const [companyName, setCompanyName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [country, setCountry] = useState('');
	const [timeZone, setTimeZone] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const [companySizeError, setCompanySizeError] = useState(null);
	const [monthyRevenueError, setMonthyRevenueError] = useState(null);
	const [lastTaxReturnError, setLastTaxReturnError] = useState(null);
	const [companyNameError, setCompanyNameError] = useState(null);
	const [phoneNumberError, setPhoneNumberError] = useState(null);
	const [countryError, setCountryError] = useState(null);
	const [timeZoneError, setTimeZoneError] = useState(null);
	const [firstNameError, setFirstNameError] = useState(null);
	const [lastNameError, setLastNameError] = useState(null);
	const [emailError, setEmailError] = useState(null);
	const [passwordError, setPasswordError] = useState(null);

	useEffect(() => {
		if (companySize !== '') {
			setCompanySizeError(null);
		} else {
			setCompanySizeError(true);
		}
	}, [companySize]);

	useEffect(() => {
		if (monthyRevenue !== '') {
			setMonthyRevenueError(null);
		} else {
			setMonthyRevenueError(true);
		}
	}, [monthyRevenue]);

	useEffect(() => {
		if (lastTaxReturn !== '') {
			setLastTaxReturnError(null);
		} else {
			setLastTaxReturnError(true);
		}
	}, [lastTaxReturn]);

	useEffect(() => {
		if (companyName !== '') {
			setCompanyNameError(null);
		} else {
			setCompanyNameError(true);
		}
	}, [companyName]);

	useEffect(() => {
		if (phoneNumber !== '') {
			setPhoneNumberError(null);
		} else {
			setPhoneNumberError(true);
		}
	}, [phoneNumber]);

	useEffect(() => {
		if (country !== '') {
			setCountryError(null);
		} else {
			setCountryError(true);
		}
	}, [country]);

	useEffect(() => {
		if (timeZone !== '') {
			setTimeZoneError(null);
		} else {
			setTimeZoneError(true);
		}
	}, [timeZone]);

	useEffect(() => {
		if (firstName !== '') {
			setFirstNameError(null);
		} else {
			setFirstNameError(true);
		}
	}, [firstName]);

	useEffect(() => {
		if (lastName !== '') {
			setLastNameError(null);
		} else {
			setLastNameError(true);
		}
	}, [lastName]);

	useEffect(() => {
		if (email !== '') {
			setEmailError(null);
		} else {
			setEmailError(true);
		}
	}, [email]);

	useEffect(() => {
		if (password !== '') {
			setPasswordError(null);
		} else {
			setPasswordError(true);
		}
	}, [password]);

	const formData = {
		id: uuid(),
		company_size: companySize,
		monthy_revenu: monthyRevenue,
		last_tax_return: lastTaxReturn,
		company_name: companyName,
		country: country,
		time_zone: timeZone,
		first_name: firstName,
		last_name: lastName,
		email: email,
		password: password
	};

	const handelFormSubmit = function (event) {
		event.preventDefault();

		if (
			companySizeError === true ||
			monthyRevenueError === true ||
			lastTaxReturnError === true ||
			companyNameError === true ||
			phoneNumberError === true ||
			countryError === true ||
			timeZoneError === true ||
			firstNameError === true ||
			lastNameError === true ||
			emailError === true ||
			passwordError === true
		) {
			console.log('The required information has not been provided');
		} else {
			console.log(formData);
			alert('Welcome to Bench Accounting -- Form data has been received');
			navigate('/');
		}
	};

	const [formPartOneDone, setFormPartOneDone] = useState(false);

	const handelFormPartOneDone = function (event) {
		setFormPartOneDone(true);
	};

	return (
		<>
			<div className='form-wrapper'>
				<main className='form-main'>
					<form onSubmit={handelFormSubmit}>
						{!formPartOneDone && (
							<section>
								<section className='company-size'>
									<div className="company__info">
										<h1>Tell Us About Your Business</h1>
										<div className="company__info--input">
											<label>1. Company Size</label>
											<div className="company__info--input__list">
												<input type="radio" id="size-1" className="company__info--input__radio" name="size" value="1" onChange={(e) => {setCompanySize(e.target.value)}}></input>
												<label className="company__info--input__label" for="size-1">1</label>
												<input type="radio" id="size-2" className="company__info--input__radio" name="size" value="2-5" onChange={(e) => {setCompanySize(e.target.value)}}></input>
												<label className="company__info--input__label" for="size-2">2-5</label>
												<input type="radio" id="size-3" className="company__info--input__radio" name="size" value="6-10" onChange={(e) => {setCompanySize(e.target.value)}}></input>
												<label className="company__info--input__label" for="size-3">6-10</label>
												<input type="radio" id="size-4" className="company__info--input__radio" name="size" value="11-25" onChange={(e) => {setCompanySize(e.target.value)}}></input>
												<label className="company__info--input__label" for="size-4">11-25</label>
												<input type="radio" id="size-5" className="company__info--input__radio" name="size" value="25+" onChange={(e) => {setCompanySize(e.target.value)}}></input>
												<label className="company__info--input__label" for="size-5">25+</label>
												<input type="radio" id="size-6" className="company__info--input__radio" name="size" value="not sure" onChange={(e) => {setCompanySize(e.target.value)}}></input>
												<label className="company__info--input__label" for="size-6">I'm not sure</label>
											</div>
											<label>2. Monthly Revenue</label>
											<div className="company__info--input__list">
												<input type="radio" id="rev-1" className="company__info--input__radio" name="revenue" value="0" onChange={(e) => {setMonthyRevenue(e.target.value)}}></input>
												<label className="company__info--input__label" for="rev-1">$0 (Pre-revenue)</label>
												<input type="radio" id="rev-2"className="company__info--input__radio" name="revenue" value="$1-$1,000" onChange={(e) => {setMonthyRevenue(e.target.value)}}></input>
												<label className="company__info--input__label" for="rev-2">$1-$1,000</label>
												<input type="radio" id="rev-3" className="company__info--input__radio" name="revenue" value="$1,000-$10,000" onChange={(e) => {setMonthyRevenue(e.target.value)}}></input>
												<label className="company__info--input__label" for="rev-3">$1,000-$10,000</label>
												<input type="radio" id="rev-4" className="company__info--input__radio" name="revenue" value="$10,000-$100,000" onChange={(e) => {setMonthyRevenue(e.target.value)}}></input>
												<label className="company__info--input__label" for="rev-4">$10,000-$100,000</label>
												<input type="radio" id="rev-5" className="company__info--input__radio" name="revenue" value="more than $100,000" onChange={(e) => {setMonthyRevenue(e.target.value)}}></input>
												<label className="company__info--input__label" for="rev-5">more than $100,000</label>
											</div>
											<label>3. Last Tax Return</label>
											<div className="company__info--input__list">
												<input type="radio" id="year-1" className="company__info--input__radio" name="year" value="2021" onChange={(e) => {setLastTaxReturn(e.target.value)}}></input>
												<label className="company__info--input__label" for="year-1">Tax Year 2021</label>
												<input type="radio" id="year-2" className="company__info--input__radio" name="year" value="2020" onChange={(e) => {setLastTaxReturn(e.target.value)}}></input>
												<label className="company__info--input__label" for="year-2">Tax Year 2020</label>
												<input type="radio" id="year-3" className="company__info--input__radio" name="year" value="2019" onChange={(e) => {setLastTaxReturn(e.target.value)}}></input>
												<label className="company__info--input__label" for="year-3">Tax Year 2019 or prior</label>
												<input type="radio" id="year-4" className="company__info--input__radio" name="year" value="n/a" onChange={(e) => {setLastTaxReturn(e.target.value)}}></input>
												<label className="company__info--input__label" for="year-4">My business is new, I'm not sure.</label>
											</div>
										</div>
									</div>
								</section>
								<section className='contact-info'>
									<div className='c-info'>
											<h2 className='c-info__subheader'>Contact</h2>
											<label htmlFor="" className='c-info__form-label'>1. Company Name
												<input type="text" className='c-info__form-input-name' onChange={(e) => {setCompanyName(e.target.value)}}/>
											</label>
											<label htmlFor="" className='c-info__form-label'>2. Phone Number
												<input type="text" className='c-info__form-input-phone' onChange={(e) => {setPhoneNumber(e.target.value)}}/>
											</label>
											<div className='c-info__wrper-labels'>
												<label htmlFor="" className='c-info__form-label'>3. Country
													<input type="text" className='c-info__form-input-country' onChange={(e) => {setCountry(e.target.value)}}/>
												</label>
												<label htmlFor="" className='c-info__form-label'>3. Time zone
													<input type="text" className='c-info__form-input-time' onChange={(e) => {setTimeZone(e.target.value)}}/>
												</label>
											</div>
											<div onClick={handelFormPartOneDone}><Btn text='Next' class_name='account_btn'/></div>
									</div>
								</section>
							</section>
						)}
						{formPartOneDone && (
							<section>
								<h1 className='account_title'>Create your bench account</h1>
								<label htmlFor="first_name" className='account_label'> First Name
									<input type="text" name='first_name' id='first_name' className='account_input' onChange={(e) => {setFirstName(e.target.value)}}/>
									<div></div>
								</label>
								<label htmlFor="last_name" className='account_label'> Last Name
									<input type="text"name='last_name' id='last_name' className='account_input' onChange={(e) => {setLastName(e.target.value)}}/>
									<div></div>
								</label>
								<label htmlFor="email" className='account_label'> Email
									<input type="email" name='email' id='email' className='account_input' onChange={(e) => {setEmail(e.target.value)}}/>
									<div></div>
								</label>
								<label htmlFor="password" className='account_label'> Password
									<input type="password" name='password' id='password' className='account_input' onChange={(e) => {setPassword(e.target.value)}}/>
									<div></div>
								</label>
								<Btn text='Next' class_name='account_btn'/>
							</section>
						)}
					</form>
				</main>
				<article className='form-article'>
					<FormArticle />
				</article>
			</div>
		</>
	);
}

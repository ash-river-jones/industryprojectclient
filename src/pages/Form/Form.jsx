import './Form.scss';
import ContactInfo from '../../components/ContactInfo/ContactInfo';
import CompanySize from '../../components/CompanySize/CompanySize';
import AccountForm from '../../components/AccountForm/AccountForm';
import FormArticle from '../../components/FormArticle/FormArticle';

import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const { v4: uuid } = require('uuid');


export default function Form() {
	const navigate = useNavigate();


	const [companySize, setCompanySize] = useState('')
	const [monthyRevenue, setMonthyRevenue] = useState('')
	const [lastTaxReturn, setLastTaxReturn] = useState('')
	const [companyName, setCompanyName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [country, setCountry] = useState('')
	const [timeZone, setTimeZone] = useState('')
	const [firstName, setFirstName]= useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [companySizeError, setCompanySizeError] = useState(null)
	const [monthyRevenueError, setMonthyRevenueError] = useState(null)
	const [lastTaxReturnError, setLastTaxReturnError] = useState(null)
	const [companyNameError, setCompanyNameError] = useState(null)
	const [phoneNumberError, setPhoneNumberError] = useState(null)
	const [countryError, setCountryError] = useState(null)
	const [timeZoneError, setTimeZoneError] = useState(null)
	const [firstNameError, setFirstNameError]= useState(null)
	const [lastNameError, setLastNameError] = useState(null)
	const [emailError, setEmailError] = useState(null)
	const [passwordError, setPasswordError] = useState(null)
	
	useEffect(() => {
		if (companySize !== '') {
			setCompanySizeError(null)
		} else {
			setCompanySizeError(true)
		}
	}, [companySize])

	useEffect(() => {
		if (monthyRevenue !== '') {
			setMonthyRevenueError(null)
		} else {
			setMonthyRevenueError(true)
		}
	}, [monthyRevenue])

	useEffect(() => {
		if (lastTaxReturn !== '') {
			setLastTaxReturnError(null)
		} else {
			setLastTaxReturnError(true)
		}
	}, [lastTaxReturn])

	useEffect(() => {
		if (companyName !== '') {
			setCompanyNameError(null)
		} else {
			setCompanyNameError(true)
		}
	}, [companyName])

	useEffect(() => {
		if (phoneNumber !== '') {
			setPhoneNumberError(null)
		} else {
			setPhoneNumberError(true)
		}
	}, [phoneNumber])

	useEffect(() => {
		if (country !== '') {
			setCountryError(null)
		} else {
			setCountryError(true)
		}
	}, [country])

	useEffect(() => {
		if (timeZone !== '') {
			setTimeZoneError(null)
		} else {
			setTimeZoneError(true)
		}
	}, [timeZone])

	useEffect(() => {
		if (firstName !== '') {
			setFirstNameError(null)
		} else {
			setFirstNameError(true)
		}
	}, [firstName])

	useEffect(() => {
		if (lastName !== '') {
			setLastNameError(null)
		} else {
			setLastNameError(true)
		}
	}, [lastName])

	useEffect(() => {
		if (email !== '') {
			setEmailError(null)
		} else {
			setEmailError(true)
		}
	}, [email])

	useEffect(() => {
		if (password !== '') {
			setPasswordError(null)
		} else {
			setPasswordError(true)
		}
	}, [password])

	const formData = 	{
		"id": uuid(),
		"company_size": companySize,
		"monthy_revenu": monthyRevenue,
		"last_tax_return": lastTaxReturn,
		"company_name": companyName,
		"country": country,
		"time_zone": timeZone,
		"first_name": firstName,
		"last_name": lastName,
		"email": email,
		"password": password
	}

	function handelFormSubmit(event) {
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
			console.log("The required information has not been provided")
		} else {
			console.log(formData)
			alert("Welcome to Bench Accounting -- Form data has been received")
			navigate('/')
		}

	}
	
	const [formPartOneDone, setFormPartOneDone] = useState(false)

	return (
		<>
			<div className='form-wrapper'>
				<main className='form-main'>
					{!formPartOneDone && (
						<section>
							<CompanySize />
							<ContactInfo />
						</section>
					)}
					{formPartOneDone && (
						<section>
							<AccountForm />
						</section>
					)}
				</main>
				<article className='form-article'>
					<FormArticle />
				</article>
			</div>
		</>
	);
}
import "./Form.scss";
import "../../components/CompanySize/CompanySize.scss";
import "../../components/ContactInfo/ContactInfo.scss";
import "../../components/AccountForm/AccountForm.scss";
import "../../components/Btn/Btn.scss";
import Btn from "../../components/Btn/Btn";
import PageHeader from "../../components/PageHeader/PageHeader";

import FormArticle from "../../components/FormArticle/FormArticle";

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const { v4: uuid } = require("uuid");

export default function Form() {
  const navigate = useNavigate();

  const [companySize, setCompanySize] = useState("");
  const [monthyRevenue, setMonthyRevenue] = useState("");
  const [lastTaxReturn, setLastTaxReturn] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    if (companySize !== "") {
      setCompanySizeError(null);
    } else {
      setCompanySizeError(true);
    }
  }, [companySize]);

  useEffect(() => {
    if (monthyRevenue !== "") {
      setMonthyRevenueError(null);
    } else {
      setMonthyRevenueError(true);
    }
  }, [monthyRevenue]);

  useEffect(() => {
    if (lastTaxReturn !== "") {
      setLastTaxReturnError(null);
    } else {
      setLastTaxReturnError(true);
    }
  }, [lastTaxReturn]);

  useEffect(() => {
    if (companyName !== "") {
      setCompanyNameError(null);
    } else {
      setCompanyNameError(true);
    }
  }, [companyName]);

  useEffect(() => {
    if (phoneNumber !== "") {
      setPhoneNumberError(null);
    } else {
      setPhoneNumberError(true);
    }
  }, [phoneNumber]);

  useEffect(() => {
    if (phoneNumber !== "") {
      setPhoneNumberError(null);
    } else {
      setPhoneNumberError(true);
    }
  }, [phoneNumber]);

  useEffect(() => {
    if (country !== "") {
      setCountryError(null);
    } else {
      setCountryError(true);
    }
  }, [country]);

  useEffect(() => {
    if (timeZone !== "") {
      setTimeZoneError(null);
    } else {
      setTimeZoneError(true);
    }
  }, [timeZone]);

  useEffect(() => {
    if (firstName !== "") {
      setFirstNameError(null);
    } else {
      setFirstNameError(true);
    }
  }, [firstName]);

  useEffect(() => {
    if (lastName !== "") {
      setLastNameError(null);
    } else {
      setLastNameError(true);
    }
  }, [lastName]);

  useEffect(() => {
    if (email !== "") {
      setEmailError(null);
    } else {
      setEmailError(true);
    }
  }, [email]);

  useEffect(() => {
    if (password !== "") {
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
    password: password,
  };

  const handelFormSubmit = function (event) {
    event.preventDefault()
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
    } else {
      console.log(formData);
      navigate("/welcome");
    }
  };

  const [formPartOneDone, setFormPartOneDone] = useState(false);

  const handelFormPartOneDone = function () {
    if (
      companySizeError === true ||
      monthyRevenueError === true ||
      lastTaxReturnError === true ||
      companyNameError === true ||
      phoneNumberError === true ||
      countryError === true ||
      timeZoneError === true
    ) {
      setFormPartOneDone(true);
    } else {
      setFormPartOneDone(false);
      alert("Please fill out all required forms");
    }
  };

  const handelFormPartTwoBack = function () {
    setFormPartOneDone(false);
  };


  return (
    <>
      <div className="form-wrapper">
        <div className="form-main">
          <PageHeader />
          <main>
            <form>
              {!formPartOneDone && (
                <section>
                  <section className="company-size">
                    <div className="company__info">
                      <h1 className="company__info--header">Tell Us About Your Business</h1>
                      <div className="company__info--input">
                        <label>1. Company Size</label>
                        <p className="c-info__paragraph">Select number of owners, employees, and contractors</p>
                        <div className="company__info--input__list">
                          <input
                            type="radio"
                            id="size-1"
                            className="company__info--input__radio"
                            name="size"
                            value="1"
                            checked={companySize === "1" ? true : false}
                            onChange={(e) => {
                              setCompanySize(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="size-1"
                          >
                            1
                          </label>
                          <input
                            type="radio"
                            id="size-2"
                            className="company__info--input__radio"
                            name="size"
                            value="2-5"
                            checked={companySize === "2-5" ? true : false}
                            onChange={(e) => {
                              setCompanySize(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="size-2"
                          >
                            2-5
                          </label>
                          <input
                            type="radio"
                            id="size-3"
                            className="company__info--input__radio"
                            name="size"
                            value="6-10"
                            checked={companySize === "6-10" ? true : false}
                            onChange={(e) => {
                              setCompanySize(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="size-3"
                          >
                            6-10
                          </label>
                          <input
                            type="radio"
                            id="size-4"
                            className="company__info--input__radio"
                            checked={companySize === "11-25" ? true : false}
                            name="size"
                            value="11-25"
                            onChange={(e) => {
                              setCompanySize(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="size-4"
                          >
                            11-25
                          </label>
                          <input
                            type="radio"
                            id="size-5"
                            className="company__info--input__radio"
                            checked={companySize === "25+" ? true : false}
                            name="size"
                            value="25+"
                            onChange={(e) => {
                              setCompanySize(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="size-5"
                          >
                            25+
                          </label>
                          <input
                            type="radio"
                            id="size-6"
                            className="company__info--input__radio"
                            name="size"
                            checked={companySize === "not sure" ? true : false}
                            value="not sure"
                            onChange={(e) => {
                              setCompanySize(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="size-6"
                          >
                            I'm not sure
                          </label>
                        </div>
                        <label>2. Monthly Revenue</label>
                        <p className="c-info__paragraph">Select average monthly revenue before deductions</p>
                        <div className="company__info--input__list">
                          <input
                            type="radio"
                            id="rev-1"
                            className="company__info--input__radio"
                            name="revenue"
                            value="0"
                            checked={monthyRevenue === 0 ? true : false}
                            onChange={(e) => {
                              setMonthyRevenue(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="rev-1"
                          >
                            $0 (Pre-revenue)
                          </label>
                          <input
                            type="radio"
                            id="rev-2"
                            className="company__info--input__radio"
                            name="revenue"
                            value="$1-$1,000"
                            checked={monthyRevenue === "$1-$1,000" ? true : false}
                            onChange={(e) => {
                              setMonthyRevenue(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="rev-2"
                          >
                            $1-$1,000
                          </label>
                          <input
                            type="radio"
                            id="rev-3"
                            className="company__info--input__radio"
                            name="revenue"
                            checked={monthyRevenue === "$1,000-$10,000" ? true : false}
                            value="$1,000-$10,000"
                            onChange={(e) => {
                              setMonthyRevenue(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="rev-3"
                          >
                            $1,000-$10,000
                          </label>
                          <input
                            type="radio"
                            id="rev-4"
                            className="company__info--input__radio"
                            name="revenue"
                            value="$10,000-$100,000"
                            checked={monthyRevenue === "$10,000-$100,000" ? true : false}
                            onChange={(e) => {
                              setMonthyRevenue(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="rev-4"
                          >
                            $10,000-$100,000
                          </label>
                          <input
                            type="radio"
                            id="rev-5"
                            className="company__info--input__radio"
                            name="revenue"
                            value="more than $100,000"
                            checked={monthyRevenue === "more than $100,000" ? true : false}
                            onChange={(e) => {
                              setMonthyRevenue(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="rev-5"
                          >
                            more than $100,000
                          </label>
                        </div>
                        <label>3. Last Tax Return</label>
                        <p className="c-info__paragraph">Select most recent business income taxt filling</p>
                        <div className="company__info--input__list">
                          <input
                            type="radio"
                            id="year-1"
                            className="company__info--input__radio"
                            name="year"
                            value="2021"
                            checked={lastTaxReturn === "2021" ? true : false}
                            onChange={(e) => {
                              setLastTaxReturn(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="year-1"
                          >
                            Tax Year 2021
                          </label>
                          <input
                            type="radio"
                            id="year-2"
                            className="company__info--input__radio"
                            checked={lastTaxReturn === "2020" ? true : false}
                            name="year"
                            value="2020"
                            onChange={(e) => {
                              setLastTaxReturn(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="year-2"
                          >
                            Tax Year 2020
                          </label>
                          <input
                            type="radio"
                            id="year-3"
                            className="company__info--input__radio"
                            checked={lastTaxReturn === "2019" ? true : false}
                            name="year"
                            value="2019"
                            onChange={(e) => {
                              setLastTaxReturn(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="year-3"
                          >
                            Tax Year 2019 or prior
                          </label>
                          <input
                            type="radio"
                            id="year-4"
                            className="company__info--input__radio"
                            name="year"
                            value="n/a"
                            checked={lastTaxReturn === "n/a" ? true : false}
                            onChange={(e) => {
                              setLastTaxReturn(e.target.value);
                            }}
                          ></input>
                          <label
                            className="company__info--input__label"
                            htmlFor="year-4"
                          >
                            My business is new, I'm not sure.
                          </label>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="contact-info">
                    <div className="c-info">
                      {/* <form action="" className='c-info__form'>                 */}
                      <h2 className="c-info__subheader">
                        How can our team contact you?
                      </h2>

                      <p className="c-info__paragraph">
                        Before we can get your free month of bookkeeping started,
                        we???ll need a few more details. Let us know the best phone
                        number to reach you, and we???ll get in touch ASAP to get
                        started.
                      </p>

                      <label htmlFor="" className="c-info__form-label">
                        1. COMPANY NAME
                        <input type="text" className="c-info__form-input-name" value={companyName} onChange={(e)=>{setCompanyName(e.target.value)}}/>
                      </label>

                      <label htmlFor="" className="c-info__form-label">
                        2. PHONE NUMBER
                        <input type="text" className="c-info__form-input-phone" value={phoneNumber} onChange={(e)=>{setPhoneNumber(e.target.value)}}/>
                      </label>

                      {/* Ratio btns */}

                      {/* <div class="container"> */}
                      <div className="c-info__selector">
                        <p className="c-info__country-label">3. COUNTRY</p>
                        <div className="c-info__country-btns-wrpr">
                          <div className="c-info__selecotr-item">
                            <input
                              type="radio"
                              id="radio1"
                              name="selector"
                              className="c-info__selector-item-radio"
                              onChange={(e) => {
                                setCountry(e.target.value);
                              }}
                              value="Canada"
                              checked={country === "Canada" ? true : false}
                            />
                            <label
                              htmlFor="radio1"
                              className="c-info__selector-item-label"
                            >
                              Canada
                            </label>
                          </div>
                          <div className="c-info__selecotr-item">
                            <input
                              type="radio"
                              id="radio2"
                              name="selector"
                              className="c-info__selector-item-radio"
                              value="US"
                              onChange={(e) => {
                                setCountry(e.target.value);
                              }}
                              checked={country === "US" ? true : false}
                            />
                            <label
                              htmlFor="radio2"
                              className="c-info__selector-item-label"
                            >
                              United States
                            </label>
                          </div>
                        </div>
                      </div>
                      {/* </div> */}

                      <label htmlFor="" className="c-info__form-label-time">
                        3. TIME ZONE
                        {/* <input type="text" className='c-info__form-input-time' /> */}
                        <select className="c-info__form-input-time" name="" id="" onChange={(e)=>{setTimeZone(e.target.value)}}>
                          <option
                            value=""
                            className="c-info__form-input-time-combo"
                          >
                            Pacific
                          </option>
                          <option
                            value=""
                            className="c-info__form-input-time-combo"
                          >
                            Newfoundland
                          </option>
                          <option
                            value=""
                            className="c-info__form-input-time-combo"
                          >
                            Atlantic
                          </option>
                          <option
                            value=""
                            className="c-info__form-input-time-combo"
                          >
                            Eastern
                          </option>
                          <option
                            value=""
                            className="c-info__form-input-time-combo"
                          >
                            Central
                          </option>
                          <option
                            value=""
                            className="c-info__form-input-time-combo"
                          >
                            Mountain
                          </option>
                          <option
                            value=""
                            className="c-info__form-input-time-combo"
                          >
                            Alaska
                          </option>
                          <option
                            value=""
                            className="c-info__form-input-time-combo"
                          >
                            Hawaii
                          </option>
                        </select>
                      </label>
            <div><Btn onClick={handelFormPartOneDone} text='Next' class_name='account_btn'/></div>
                      {/* </form> */}
                    </div>
                  </section>
                </section>
              )}
              {formPartOneDone && (
                <section className="account-form">
                  <h1 className="account_title">Create your bench account</h1>
                  <p className='account_text'>Review your account details and create a password</p>
                  <label htmlFor="first_name" className="account_label">
                    {" "}
                    First Name
                    <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="account_input"
                      value={firstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                    <div></div>
                  </label>
                  <label htmlFor="last_name" className="account_label">
                    {" "}
                    Last Name
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="account_input"
                      value={lastName}
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                    <div></div>
                  </label>
                  <label htmlFor="email" className="account_label">
                    {" "}
                    Email
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="account_input"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <div></div>
                  </label>
                  <label htmlFor="password" className="account_label">
                    {" "}
                    Password
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="account_input"
                      value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <div></div>
                  </label>
                  <p className='account_text'>by signing up you accept our <a href='https://bench.co/terms/'>End User License Agreement and Terms of Service</a></p>
                  <div className='form_btn_container'>
                    <button className="btn_back" onClick={handelFormPartTwoBack}></button>
                    <Btn onClick={()=>{navigate('/welcome')}} text="Next" class_name="account_btn" />
                  </div>
                </section>
              )}
            </form>
          </main>
        </div>
        <article className="form-article">
          <FormArticle />
        </article>
      </div>
    </>
  );
}

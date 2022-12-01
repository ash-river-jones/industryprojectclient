import "./CompanySize.scss"

const CompanySize = () => {
    return (
        <div className="company__info">
            <h1>Tell Us About Your Business</h1>
            <div className="company__info--input">
                <label>1. Company Size</label>
                <div className="company__info--input__list">
                    <input type="radio" id="size-1" className="company__info--input__radio" name="size" value="1"></input>
                    <label className="company__info--input__label" for="size-1">1</label>
                    <input type="radio" id="size-2" className="company__info--input__radio" name="size" value="2-5"></input>
                    <label className="company__info--input__label" for="size-2">2-5</label>
                    <input type="radio" id="size-3" className="company__info--input__radio" name="size" value="6-10"></input>
                    <label className="company__info--input__label" for="size-3">6-10</label>
                    <input type="radio" id="size-4" className="company__info--input__radio" name="size" value="11-25"></input>
                    <label className="company__info--input__label" for="size-4">11-25</label>
                    <input type="radio" id="size-5" className="company__info--input__radio" name="size" value="25+"></input>
                    <label className="company__info--input__label" for="size-5">25+</label>
                    <input type="radio" id="size-6" className="company__info--input__radio" name="size" value="not sure"></input>
                    <label className="company__info--input__label" for="size-6">I'm not sure</label>
                </div>
                <label>2. Monthly Revenue</label>
                <div className="company__info--input__list">
                    <input type="radio" id="rev-1" className="company__info--input__radio" name="revenue" value="0"></input>
                    <label className="company__info--input__label" for="rev-1">$0 (Pre-revenue)</label>
                    <input type="radio" id="rev-2"className="company__info--input__radio" name="revenue" value="$1-$1,000"></input>
                    <label className="company__info--input__label" for="rev-2">$1-$1,000</label>
                    <input type="radio" id="rev-3" className="company__info--input__radio" name="revenue" value="$1,000-$10,000"></input>
                    <label className="company__info--input__label" for="rev-3">$1,000-$10,000</label>
                    <input type="radio" id="rev-4" className="company__info--input__radio" name="revenue" value="$10,000-$100,000"></input>
                    <label className="company__info--input__label" for="rev-4">$10,000-$100,000</label>
                    <input type="radio" id="rev-5" className="company__info--input__radio" name="revenue" value="more than $100,000"></input>
                    <label className="company__info--input__label" for="rev-5">more than $100,000</label>
                </div>
                <label>3. Last Tax Return</label>
                <div className="company__info--input__list">
                    <input type="radio" id="year-1" className="company__info--input__radio" name="year" value="2021"></input>
                    <label className="company__info--input__label" for="year-1">Tax Year 2021</label>
                    <input type="radio" id="year-2" className="company__info--input__radio" name="year" value="2020"></input>
                    <label className="company__info--input__label" for="year-2">Tax Year 2020</label>
                    <input type="radio" id="year-3" className="company__info--input__radio" name="year" value="2019"></input>
                    <label className="company__info--input__label" for="year-3">Tax Year 2019 or prior</label>
                    <input type="radio" id="year-4" className="company__info--input__radio" name="year" value="n/a"></input>
                    <label className="company__info--input__label" for="year-4">My business is new, I'm not sure.</label>
                </div>
            </div>
        </div>
    )
}

export default CompanySize
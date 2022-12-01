import './FormArticle.scss';
import articleImage1 from '../../assets/Images/image_2.jpg'
import articleImage2 from '../../assets/Images/photo_1.png'
import articleImage3 from '../../assets/Images/photo_2.png'
import articleImage4 from '../../assets/Images/photo_3.png'

export default function FormArticleCard() {
	return (
		<>
			<section className='form-article'>
				<div className='form-article__section'>
					<img src={articleImage1} alt="headshot of bookkeeper" className='form-article__section--img--1'/>
					<div className='form-article__section--wrapper'>
						<div className='form-article__section--message'>
							<p className='form-article__section--body-large'>Bench takes bookkeeping off your hands, pairing you with a real, human bookkeeper. Try our services for free deciding if we’re the right fit for you.</p>
						</div>
					</div>
				</div>
				<div className='form-article__section'>
					<div className='form-article__section--wrapper'>
						<img src={articleImage2} alt="headshot of bookkeeper" className='form-article__section--img--2'/>
						<div className='form-article__section--message'>
							<h1 className='form-article__section--title'>We get you set up</h1>
							<p className='form-article__section--body-small'>First, we’ll introduce you to a dedicated bookkeeper. They’ll get to know your business, show you how Bench works, and gather everything they need from you.</p>
						</div>
					</div>
				</div>
				<div className='form-article__section'>
					<div className='form-article__section--wrapper'>
						<img src={articleImage3} alt="headshot of bookkeeper" className='form-article__section--img--3'/>
						<div className='form-article__section--message'>
							<h1 className='form-article__section--title'>We do your booking</h1>
							<p className='form-article__section--body-small'>Each month, your bookkeeper organizes your business transactions and prepares financial statements. If they need anything from you, they’ll get in touch.</p>
						</div>
					</div>
				</div>
				<div className='form-article__section'>
					<div className='form-article__section--wrapper'>
						<img src={articleImage4} alt="headshot of bookkeeper" className='form-article__section--img--4'/>
						<div className='form-article__section--message'>
							<h1 className='form-article__section--title'>We deliver tax-ready financials</h1>
							<p className='form-article__section--body-small form-article__section--body-small--last'>Track business health with monthly financial reporting. At tax time, we send a package with everything you need to file. Or, let us do it for you with our Premium plan.</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
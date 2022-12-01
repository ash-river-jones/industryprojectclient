import './FormArticle.scss';
// import imgTop from '../../assets/Images/form-article-top.png'
// import imgBottom from '../../assets/Images/form-article-bottom.png'

export default function FormArticleCard() {
	return (
		<>
			<section className='form-article'>
				<div className='form-article__top'>
					<div className='form-article__top--wrapper'>
						<img src='' alt="headshot of bookkeeper" className='form-article__top--img'/>
						<div className='form-article__top--message'>
							<h3 className='form-article__top--title'>Get a Free Month of Bookkeeping On Us</h3>
							<p className='form-article__top--body'>Bench takes bookkeeping off your hands, paring you with a real, human bookkeeper at a price you can afford. Try our services for free before deciding if we're the right fit for you.</p>
						</div>
					</div>
				</div>
				<div className='form-article__bottom'>
					<div className='form-article__bottom--wrapper'>
						<img src='' alt="" className='form-article__bottom--img'/>
						<div className='form-article__bottom--message'>
							<h3 className='form-article__bottom--title'>Text</h3>
							<p className='form-article__bottom--body'>Text</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
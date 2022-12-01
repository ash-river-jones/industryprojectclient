import './PageHeader.scss';
import logo from '../../assets/Logo/Logo.png'

export default function PageHeader() {
	return (
		<>
			<section className='header__wrapper'>
                <header className='header__card'>
                    <div className='header__logo-wrapper'><img src={logo} alt="Bench Accounting Logo" className='header_logo'/></div>
                </header>
            </section>
		</>
	);
}
import './AccountForm.scss';
import Btn from '../Btn/Btn'; 

export default function AccountForm(){

    return (
        <form className='account'>
            <h1 className='account_title'>Create your bench account</h1>
            <p className='account_text'>Review your account details and create a password</p>
            <label htmlFor="first_name" className='account_label'> First Name
                <input type="text" name='first_name' id='first_name' className='account_input'/>
                <div></div>
            </label>
            <label htmlFor="last_name" className='account_label'> Last Name
                <input type="text"name='last_name' id='last_name' className='account_input' />
                <div></div>
            </label>
            <label htmlFor="email" className='account_label'> Email
                <input type="email" name='email' id='email' className='account_input'/>
                <div></div>
            </label>
            <label htmlFor="password" className='account_label'> Password
                <input type="password" name='password' id='password' className='account_input'/>
                <div></div>
            </label>
            <p className='account_text'>by signing up you accept our <a href='https://bench.co/terms/'>End User License Agreement and Terms of Service</a></p>
            <Btn text='Next' class_name='account_btn'/>
        </form>
    );

}
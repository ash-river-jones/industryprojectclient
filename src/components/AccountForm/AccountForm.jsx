import './AccountForm.scss';
import Btn from '../Btn/Btn'; 

export default function AccountForm(){

    return (
        <form className='account'>
            <h1 className='account_title'>Create your bench account</h1>
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
            <Btn text='Next' class_name='account_btn'/>
        </form>
    );

}
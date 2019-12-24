import { Bank } from '../../types/types';
import PaymentFormStyle from './PaymentFormStyle';

const PaymentForm = ({changeInput, form, changeForm, addToBanks, overwriteBank, bankToEdit})=>{
    {
        switch (form) {
            case 'add':
                return (
                    <div>
                        <div className="payment-bg">
                            <div className="payment-form__header">
                                <div className="payment-form__row">
                                    <h1 className="payment-form__title">Add new bank</h1>
                                    <a href="#" className="payment-form__close" onClick={()=>changeForm('')}><span className="payment-from__close--icon">X</span></a>
                                </div>
                            </div>
                            <form className="payment-form">
                                <div className="payment-form__row">
                                    <div className="payment-form__form">
                                    <label htmlFor="bank" className="payment-form__form--label">bank name</label>
                                        <input type="input" placeholder="XYZ Bank" className="payment-form__form--input" id="bank" autoComplete="off"/>
                                        <label htmlFor="bank" className="payment-form__form--error" id="bank-label">Kindly put in a valid bank name</label>
                                    </div>
                                    <div className="payment-form__form">
                                        <label htmlFor="account" className="payment-form__form--label">account number</label>
                                        <input type="input" placeholder="0011223344" className="payment-form__form--input" id="account" autoComplete="off"/>
                                        <label htmlFor="account" className="payment-form__form--error" id="account-label">Invalid account number</label>
                                    </div>
                                </div>
                                <div className="payment-form__row">
                                    <div className="payment-form__form">
                                        <label htmlFor="bvn" className="payment-form__form--label">bvn number</label>
                                        <input type="text" placeholder="99887766554433" className="payment-form__form--input" id="bvn" autoComplete="off"/>
                                        <label htmlFor="bvn" className="payment-form__form--error" id="bvn-label">Invalid BVN number</label>
                                    </div>
                                    <div className="payment-form__form">
                                        <label htmlFor="type" className="payment-form__form--label">Account Type</label>
                                        <select className="payment-form__form--select" id="type">
                                            <option value="none">None</option>
                                            <option value="current">Current</option>
                                            <option value="savings">Savings</option>
                                            <option value="domiciliary">Domicilary</option>
                                        </select>
                                        <label htmlFor="type" className="payment-form__form--error" id="type-label">Kindly choose account type</label>
                                    </div>
                                </div>
                                <a href='#' className="payment-form__btn" onClick={
                                    ()=>{
                                        validateForm();
                                        addToBankAfterValidation(addToBanks, changeForm);
                                    }
                                }>Save changes</a>
                            </form>
                        </div>
                        <PaymentFormStyle/>
                    </div>
                );
    
            case 'edit':
                return (
                    <div>
                        <div className="payment-bg">
                            <div className="payment-form__row">
                                <h1 className="payment-form__title">Edit bank</h1>
                                <a href="#" className="payment-form__close" onClick={()=>changeForm('')}><span className="payment-from__close--icon">X</span></a>
                            </div>
                            <form className="payment-form">
                                <div className="payment-form__row">
                                    <div className="payment-form__form">
                                    <label htmlFor="bank" className="payment-form__form--label">bank name</label>
                                        <input type="input" placeholder="XYZ Bank" className="payment-form__form--input" id="bank" autoComplete="off" defaultValue={bankToEdit.name}/>
                                        <label htmlFor="bank" className="payment-form__form--error" id="bank-label">Kindly put in a valid bank name</label>
                                    </div>
                                    <div className="payment-form__form">
                                        <label htmlFor="account" className="payment-form__form--label">account number</label>
                                        <input type="input" placeholder="0011223344" className="payment-form__form--input" id="account" autoComplete="off" defaultValue={bankToEdit.account}/>
                                        <label htmlFor="account" className="payment-form__form--error" id="account-label">Invalid account number</label>
                                    </div>
                                </div>
                                <div className="payment-form__row">
                                    <div className="payment-form__form">
                                        <label htmlFor="bvn" className="payment-form__form--label">bvn number</label>
                                        <input type="text" placeholder="99887766554433" className="payment-form__form--input" id="bvn" autoComplete="off" defaultValue={bankToEdit.bvn}/>
                                        <label htmlFor="bvn" className="payment-form__form--error" id="bvn-label">Invalid BVN number</label>
                                    </div>
                                    <div className="payment-form__form">
                                        <label htmlFor="type" className="payment-form__form--label">Account Type</label>
                                        <select className="payment-form__form--select" id="type" defaultValue={bankToEdit.type}>
                                            <option value="none">None</option>
                                            <option value="current">Current</option>
                                            <option value="savings">Savings</option>
                                            <option value="domiciliary">Domicilary</option>
                                        </select>
                                        <label htmlFor="type" className="payment-form__form--error" id="type-label">Kindly choose account type</label>
                                    </div>
                                </div>
                                <a href='#' className="payment-form__btn" onClick={
                                    ()=>{
                                        validateForm();
                                        overwriteBankAfterValidation(overwriteBank, bankToEdit, changeForm);
                                    }
                                }>Save changes</a>
                            </form>
                        </div>
                        <PaymentFormStyle/>
                    </div>
                );
        
            default:
                return (
                    <div>
                        <div className="payment-bg">
                            <p className="payment-bg__text">Click on a bank card to edit it or add a new Bank with the floating button</p>
                        </div>
                        <PaymentFormStyle/>
                    </div>
                );
        }
    }
}

export default PaymentForm;

//FUNCTIONS FOR FORM VALIDATION AND SUBMITTING

 const validateForm = ()=>{
        if(!document.getElementById('bank').value){
            console.log('Kindly put in a valid bank name');
            document.getElementById('bank').classList.toggle('invalid');
            document.getElementById('bank-label').classList.toggle('active');
        }
        if(document.getElementById('account').value.length !== 10 && !isNaN(document.getElementById('account').value)){
            console.log('Invalid account number');
            document.getElementById('account').classList.toggle('invalid');
            document.getElementById('account-label').classList.toggle('active');
        }
        if(document.getElementById('bvn').value.length !== 11  && !isNaN(document.getElementById('bvn').value)){
            console.log('Invalid BVN number');
            document.getElementById('bvn').classList.toggle('invalid');
            document.getElementById('bvn-label').classList.toggle('active');
        }
        if(document.getElementById('type').value === 'none'){
            console.log('Kindly choose account type');
            document.getElementById('type').classList.toggle('invalid');
            document.getElementById('type-label').classList.toggle('active');
        }
    }

    //ADD TO BANK IF ALL VALIDATION IS PASSED
    const addToBankAfterValidation = (addToBanks, changeForm)=>{
        if(document.getElementById('bank').value && document.getElementById('account').value.length === 10 && document.getElementById('bvn').value.length === 11 && document.getElementById('type').value !== 'none'){
            addToBanks(
                new Bank(
                    Math.floor(Math.random() * (100000 - 10000) + 10000),
                    document.getElementById('bank').value, 
                    document.getElementById('account').value, 
                    document.getElementById('type').value, 
                    document.getElementById('bvn').value,
                    'under review'
                )
            );
            changeForm('');
        }
    }

    //OVERWRITE BANK IF ALL VALIDATION IS PASSED
    const overwriteBankAfterValidation = (overwriteBank, bankToEdit, changeForm)=>{
        if(document.getElementById('bank').value && document.getElementById('account').value.length === 10 && document.getElementById('bvn').value.length === 11 && document.getElementById('type').value !== 'none'){
            overwriteBank(
                new Bank(
                    bankToEdit.id,
                    document.getElementById('bank').value, 
                    document.getElementById('account').value, 
                    document.getElementById('type').value, 
                    document.getElementById('bvn').value,
                    bankToEdit.status
                )
            );
            changeForm('');
        }
    }

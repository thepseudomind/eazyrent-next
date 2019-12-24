import { useState, useEffect } from 'react';
import { Bank } from '../types/types';
import Dashboard from '../components/Dashboard/Dashboard';
import Cookie from 'js-cookie';
import cookie from 'next-cookies';

const payment = ({initialBanks})=> {
    const [message, setAlertMessage] = useState('');
    const [banks, bankStatus] = useState((initialBanks) ? initialBanks : []);
    const [bankToEdit, setBankToEdit] = useState(undefined);

    useEffect(()=>{
        Cookie.set('banks', banks);
    });

    const showAlert = (newMessage) =>{
        setAlertMessage(newMessage);
    }

    const addNewBank = (newBank) =>{
        if(banks.length === 3){
            setAlertMessage('Maximum of 3 banks allowed');
        }else if(banks.length >= 1){
            for (const bank of banks) {
                if(bank.account === newBank.account){
                    setAlertMessage('Bank already added');
                }else{
                    bankStatus([...banks, newBank]);
                    setAlertMessage('Bank added');
                }
            }
        }else{
            bankStatus([...banks, newBank]);
            setAlertMessage('Bank added');
        }
    }

    const editBank = (id)=>{
        setAlertMessage('');
        setBankToEdit(banks[id]);        
    }

    const changeInput = (id, value)=>{
        console.log(value);
        setBankToEdit({...bankToEdit, id : value});
    }

    const overwriteBank = (newBank)=>{
        let index = banks.indexOf(bankToEdit);
        banks.splice(index, 1, newBank);
        bankStatus(banks);
        setAlertMessage('Bank details changed');
    }

    const deleteBank = (id) =>{
        banks.splice(id, 1);
        bankStatus([...banks]);
        setAlertMessage('Bank deleted');
        setTimeout(()=>setAlertMessage(''), 2000);
    }

    const [form, changeForm] = useState('');

    const changeActiveForm = (newForm) => {
        changeForm(newForm);
    }

    return <Dashboard pageTitle="Payments - EazyRent" route="payment" changeInput={changeInput} banks={banks} addBank={addNewBank} editBank={editBank} deleteBank={deleteBank} overwriteBank={overwriteBank} bankToEdit={bankToEdit} form={form} changeForm={changeActiveForm} alert={message} showAlert={showAlert}/>;
};

payment.getInitialProps = (ctx)=>{
    const cookies = cookie(ctx);
    return {
        initialBanks: cookies.banks
    };
}

export default payment;
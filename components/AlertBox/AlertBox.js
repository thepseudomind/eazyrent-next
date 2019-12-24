import AlertBoxStyle from './AlertBoxStyle';

const AlertBox = ({message})=>{
    switch (message) {
        case 'Bank added':
            return (
                <div>
                    <div className="alert-box">
                        <p className="alert-box__message">Bank added</p>
                    </div>
                    <AlertBoxStyle/>
                </div>
            );

        case 'Bank already added':
            return (
                <div>
                    <div className="alert-box">
                        <p className="alert-box__message">Bank already added</p>
                    </div>
                    <AlertBoxStyle/>
                </div>
            );
        
        case 'Maximum of 3 banks allowed':
                return (
                    <div>
                        <div className="alert-box">
                            <p className="alert-box__message">Maximum of 3 banks allowed</p>
                        </div>
                        <AlertBoxStyle/>
                    </div>
                );

        case 'Bank details changed':
                return (
                    <div>
                        <div className="alert-box">
                            <p className="alert-box__message">Bank details changed</p>
                        </div>
                        <AlertBoxStyle/>
                    </div>
                );

        case 'Bank deleted':
                return (
                    <div>
                        <div className="alert-box">
                            <p className="alert-box__message">Bank deleted</p>
                        </div>
                        <AlertBoxStyle/>
                    </div>
                );

        default:
            return <span></span>; 
    }
}

export default AlertBox;
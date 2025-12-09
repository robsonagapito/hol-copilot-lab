interface ThankYouModalProps {
    onContinue: () => void;
}

const ThankYouModal = ({ onContinue }: ThankYouModalProps) => {
    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>Thank you for your message.</h2>
                <div className="checkout-modal-actions">
                    <button onClick={onContinue}>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default ThankYouModal;

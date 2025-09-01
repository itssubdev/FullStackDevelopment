import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const EsewaForm = () => {
  const location = useLocation();
  const formRef = useRef()
  const esewaData = location?.state?.esewaData

  if(!esewaData) return <p>No esewa data found!</p>

  useEffect(() => {
    if(esewaData && formRef.current){
      formRef.current.submit()
    }
  }, [esewaData])
  

  return (
    <form
      ref={formRef}
      action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
      method="POST"
      className="my-20"
    >
      <input type="hidden" id="amount" name="amount" value={esewaData.amount} required />
      <input
        type="hidden"
        id="tax_amount"
        name="tax_amount"
        value={esewaData.tax_amount}
        required
      />
      <input
        type="hidden"
        id="total_amount"
        name="total_amount"
        value={esewaData.total_amount}
        required
      />
      <input
        type="hidden"
        id="transaction_uuid"
        name="transaction_uuid"
        value={esewaData.transaction_uuid}
        required
      />
      <input
        type="hidden"
        id="product_code"
        name="product_code"
        value="EPAYTEST"
        required
      />
      <input
        type="hidden"
        id="product_service_charge"
        name="product_service_charge"
        value={esewaData.product_service_charge}
        required
      />
      <input
        type="hidden"
        id="product_delivery_charge"
        name="product_delivery_charge"
        value={esewaData.product_delivery_charge}
        required
      />
      <input
        type="hidden"
        id="success_url"
        name="success_url"
        value={esewaData.success_url}
        required
      />
      <input
        type="hidden"
        id="failure_url"
        name="failure_url"
        value="https://developer.esewa.com.np/failure"
        required
      />
      <input
        type="hidden"
        id="signed_field_names"
        name="signed_field_names"
        value="total_amount,transaction_uuid,product_code"
        required
      />
      <input
        type="hidden"
        id="signature"
        name="signature"
        value={esewaData.signature}
        required
      />
      <input value="Submit" type="hidden" />
    </form>
  );
};
export default EsewaForm;
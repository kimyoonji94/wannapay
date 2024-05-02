import { useState } from 'react';
import CardRequest from '../model/CardRequest';
import PayRequestDetail from '../model/PayRequestDetail';
import Metadata from '../model/Metadata';
import Product from '../model/Product';
import { CardInput } from '../components/CardInput';

export const Main = () => {
  const [formData, setFormData] = useState(new PayRequestDetail());
  const [cardData, setCardData] = useState(new CardRequest());
  const [product, setProduct] = useState(new Product());
  const [metaData, setMetaData] = useState(new Metadata());
  const [errorMessage, setErrorMessage] = useState('');

  const regex = /[^0-9]/g;
  const handleCardData = (event) => {
    const { name, value, type } = event.target;
    setCardData({ ...cardData, [name]: value.replace(regex, '') });
  };
  const handleMetaData = (event) => {
    const { name, value, type } = event.target;
    setMetaData({ ...metaData, [name]: value.replace(regex, '') });
  };
  const handleNumber = (value) => {};
  const handleExpiry = (value) => {};

  return (
    <div className='container'>
      <div className='notice_box'>
        <span>로또, 주식관련 절대 결제 금지!!</span>
        <span>무조건 강제취소 됩니다.</span>
      </div>
      <div className='pay_cont'>
        <form action=''>
          <div className='pay_box'>
            <label htmlFor='type'>결제타입</label>
            <input name='' type='' />
          </div>
          <div className='pay_box'>
            <label htmlFor='name'>상품명</label>
            <input name='name' type='text' placeholder='상품명을 사업자특성에 맞게 정확히 입력해주세요.' />
          </div>
          <div className='pay_box one_box'>
            <label htmlFor='amount'>결제금액</label>
            <input name='amount' type='number' placeholder='결제금액' />
          </div>
          <div className='pay_box one_box'>
            <label htmlFor='payerName'>카드주 성명</label>
            <input name='payerName' type='text' placeholder='카드주 성명' />
          </div>
          <div className='pay_box one_box'>
            <label htmlFor='payerTel'>카드주 전화번호</label>
            <input name='payerTel' type='number' placeholder="'-' 를 제외하고 작성해주세요." />
          </div>
          <CardInput
            cardData={cardData}
            metaData={metaData}
            onCardChange={handleCardData}
            onMetaChange={handleMetaData}
          />
          <button className='pay_Btn'>결제하기</button>
        </form>
      </div>
    </div>
  );
};

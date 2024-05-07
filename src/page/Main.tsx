import React from 'react';
import { useState } from 'react';
import CardRequest from '../model/CardRequest';
import Metadata from '../model/Metadata';
import Product from '../model/Product';
import PayRequestDetail from '../model/PayRequestDetail';
import { CardInput } from '../components/CardInput';
import PayRequest from '../model/PayRequest';
import { paymentPay } from '../api/API';

export const Main = () => {
  const [cardData, setCardData] = useState<CardRequest>({ number: '', expiry: '', cvv: '', installment: 0 });
  const [product, setProduct] = useState<Product>({ name: '', price: 0, qty: 1, desc: '' });
  const [metadata, setMetadata] = useState<Metadata>({ authPw: '', authDob: '', cardAuth: true });

  const [requestData, setRequestData] = useState<PayRequestDetail>({
    payerName: '',
    payerEmail: '',
    payerTel: '',
    card: {} as CardRequest,
    products: [],
    trxId: '',
    trxType: 'ONTR',
    trackId: '',
    amount: 0,
    udf1: '',
    udf2: '',
    metadata: {} as Metadata,
  });

  const regex = /[^0-9]/g;
  const handleCardData = (event: any) => {
    const { name, value } = event.target;
    if (name === 'month' || name === 'year') {
      updateExpiryDate(value);
    } else {
      setCardData((cardData: any) => ({ ...cardData, [name]: value.replace(regex, '') }));
    }
  };
  const handleMetaData = (event: any) => {
    const { name, value } = event.target;
    setMetadata((metaData: any) => ({ ...metaData, [name]: value.replace(regex, '') }));
  };
  const handleFormData = (event: any) => {
    const { name, value } = event.target;
    if (name === 'payerTel') {
      setRequestData((requestData: any) => ({ ...requestData, [name]: formatTelNumber(value) }));
    } else {
      setRequestData((requestData: any) => ({ ...requestData, [name]: value }));
    }
  };
  const handleProduct = (event: any) => {
    const { name, value } = event.target;
    if (name === 'price') {
      setProduct((product: any) => ({ ...product, [name]: value.replace(regex, '') }));
    } else {
      setProduct((product: any) => ({ ...product, [name]: value }));
    }
  };

  const formatTelNumber = (input: string) => {
    const digits = input.replace(/[^\d]/g, '');
    const match = digits.match(/^(\d{3})(\d{1,4})?(\d{1,4})?$/);
    if (match) {
      return `${match[1]}${match[2] ? '-' + match[2] : ''}${match[3] ? '-' + match[3] : ''}`;
    }
    return digits;
  };
  const updateExpiryDate = (newYear?: string, newMonth?: string) => {
    const newExpiryDate = `${newYear}${newMonth}`;
    setCardData((cardData: any) => ({ ...cardData, expiry: newExpiryDate }));
  };

  const pay = async (event: any) => {
    event.preventDefault();
    try {
      const request = new PayRequest({
        payerName: requestData.payerName,
        payerEmail: requestData.payerEmail,
        payerTel: requestData.payerTel,
        card: cardData || ({} as CardRequest),
        products: [product || ({} as Product)],
        trxId: '',
        trxType: 'ONTR',
        trackId: '',
        amount: product?.price || 0,
        udf1: '',
        udf2: '',
        metadata: metadata || ({} as Metadata),
      });
      const result = await paymentPay(request);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='mainBox'>
      <div className='container'>
        <div className='notice_box'>
          <span>로또, 주식관련 절대 결제 금지!!</span>
          <span>무조건 강제취소 됩니다.</span>
        </div>
        <div className='pay_cont'>
          <form onSubmit={pay}>
            <div className='pay_box'>
              <label htmlFor='type'>결제타입</label>
              <input name='' type='' />
            </div>
            <div className='pay_box'>
              <label htmlFor='name'>상품명</label>
              <input
                name='name'
                type='text'
                value={product?.name}
                placeholder='상품명을 사업자특성에 맞게 정확히 입력해주세요.'
                onChange={handleProduct}
              />
            </div>
            <div className='pay_box one_box'>
              <label htmlFor='price'>결제금액</label>
              <input name='price' type='text' value={product?.price} placeholder='결제금액' onChange={handleProduct} />
            </div>
            <div className='pay_box one_box'>
              <label htmlFor='payerName'>카드주 성명</label>
              <input
                name='payerName'
                type='text'
                value={requestData.payerName}
                placeholder='카드주 성명'
                onChange={handleFormData}
              />
            </div>
            <div className='pay_box one_box'>
              <label htmlFor='payerTel'>카드주 전화번호</label>
              <input
                name='payerTel'
                type='text'
                value={requestData.payerTel}
                placeholder='번호를 입력하세요'
                onChange={handleFormData}
                minLength={10}
                maxLength={13}
              />
            </div>
            <CardInput
              metadata={metadata}
              onCardChange={handleCardData}
              onMetaChange={handleMetaData}
              expiry={updateExpiryDate}
            />
            <button className='pay_Btn'>결제하기</button>
          </form>
        </div>
      </div>
    </div>
  );
};

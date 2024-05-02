import React from 'react';
import { Installment } from './Installment';
import { useState } from 'react';

export const CardInput = ({ cardData, metaData, onCardChange, onMetaChange }) => {
  const [cardNumber, setCardNumber] = useState();
  const formatCardNumber = (event) => {
    const { value } = event.target;
    setCardNumber(value.replace(/(\d{4})(?=\d)/g, '$1-'));
  };

  return (
    <>
      <Installment onChange={onCardChange} />
      <div className='pay_box one_box'>
        <label htmlFor='number'>카드번호</label>
        <input
          name='number'
          type='text'
          placeholder='카드번호를 입력해주세요.'
          value={cardNumber}
          onChange={(event) => {
            onCardChange(event);
            formatCardNumber(event);
          }}
          maxLength={19}
        />
      </div>
      <div className='pay_box one_box'>
        <label htmlFor='expiry'>유효기간</label>
        <div className='expiry_box'>
          <input name='month' type='text' placeholder='MM' onChange={onCardChange} maxLength={2} />
          <input name='year' type='text' placeholder='YY' onChange={onCardChange} maxLength={2} />
        </div>
      </div>
      <div className='pay_box one_box'>
        <label htmlFor='authPw'>비밀번호</label>
        <input
          name='authPw'
          type='text'
          placeholder='카드 비밀번호 앞 2자리'
          value={metaData.authPw}
          onChange={onMetaChange}
          maxLength={2}
        />
        <p className='reference'>※ 카드 비밀번호 앞2자리</p>
      </div>
      <div className='pay_box one_box'>
        <label htmlFor='authDob'>생년월일</label>
        <input name='authDob' type='text' onChange={onMetaChange} value={metaData.authDob} maxLength={10} />
        <div className='ms_box reference'>
          ※<span>개인</span> : 생년월일 6자리 | <span>법인</span> : 사업자 10자리
        </div>
      </div>
    </>
  );
};

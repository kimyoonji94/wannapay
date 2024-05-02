import React from 'react';

export const Installment = ({ onChange }) => {
  const options = [
    { label: '할부선택', value: 'null' },
    { label: '일시불', value: 0 },
    { label: '2개월', value: 2 },
    { label: '3개월', value: 3 },
    { label: '4개월', value: 4 },
    { label: '5개월', value: 5 },
    { label: '6개월', value: 6 },
    { label: '7개월', value: 7 },
    { label: '8개월', value: 8 },
    { label: '9개월', value: 9 },
    { label: '10개월', value: 10 },
    { label: '11개월', value: 11 },
    { label: '12개월', value: 12 },
  ];

  return (
    <div className='pay_box one_box'>
      <label htmlFor='installment'>할부선택</label>
      <select name='installment' id='installment' onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

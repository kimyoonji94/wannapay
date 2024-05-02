export const Main = () => {
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
            <label htmlFor='pd_name'>상품명</label>
            <input name='pd_name' type='text' placeholder='상품명을 사업자특성에 맞게 정확히 입력해주세요.' />
          </div>
          <div className='pay_box one_box'>
            <label htmlFor='price'>결제금액</label>
            <input name='price' type='text' placeholder='결제금액' />
          </div>
          <div className='pay_box one_box'>
            <label htmlFor='installment'>할부선택</label>
            <select name='installment' id='installment'>
              <option value='할부선택'>할부선택</option>
              <option value='일시불'>일시불</option>
              <option value='2개월'>2개월</option>
              <option value='3개월'>3개월</option>
              <option value='4개월'>4개월</option>
              <option value='5개월'>5개월</option>
              <option value='6개월'>6개월</option>
              <option value='7개월'>7개월</option>
              <option value='8개월'>8개월</option>
              <option value='9개월'>9개월</option>
              <option value='10개월'>10개월</option>
              <option value='11개월'>11개월</option>
              <option value='12개월'>12개월</option>
            </select>
          </div>
          <div className='pay_box one_box'>
            <label htmlFor='name'>카드주 성명</label>
            <input name='name' type='text' placeholder='카드주 성명' />
          </div>
          <div className='pay_box one_box'>
            <label htmlFor='num'>카드주 전화번호</label>
            <input name='num' type='text' placeholder="'-' 를 제외하고 작성해주세요." />
          </div>

          <div className='pay_box one_box'>
            <label htmlFor='ca_num'>카드번호</label>
            <input name='ca_num' type='text' placeholder='카드번호를 입력해주세요.' />
          </div>
          <div className='pay_box one_box'>
            <label htmlFor='expiry'>유효기간</label>
            <div class='expiry_box'>
              <input name='mon' type='text' />
              <input name='year' type='text' />
            </div>
          </div>
          <div className='pay_box one_box'>
            <label htmlFor='pw'>비밀번호</label>
            <input name='pw' type='password' />
            <p className='reference'>※ 카드 비밀번호 앞2자리</p>
          </div>
          <div className='pay_box one_box'>
            <label htmlFor=''>생년월일</label>
            <input name='pw' type='text' />
            <div className='ms_box reference'>
              ※<span>개인</span> : 생년월일 6자리 | <span>법인</span> : 사업자 10자리
            </div>
          </div>
          <button className='pay_Btn'>결제하기</button>
        </form>
      </div>
    </div>
  );
};

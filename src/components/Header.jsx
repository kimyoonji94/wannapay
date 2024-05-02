//import { Routes, Route, Link} from 'react-router-dom';
//import member from './page/member';

export const Header = () => {
    return (
    <header className="header_box">
      <div className="container">
        <div className="lnb_box">
          {/* <Link to="/page/member"></Link> */}
          <div className="lnb_box_top">
            <div>회원관리</div>
            <div>최고관리자님</div>
            <div>로그아웃</div>
          </div>
          <div className="lnb_box_botm">
            <div>수기결제</div>
            <div>결제내역</div>
            <div>URL결제</div>
          </div>
        </div>
      </div>
    </header>
    )
}
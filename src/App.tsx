import React from "react";
import { ToastContainer, toast } from "react-toastify";
import * as S from "./styled";

import "react-toastify/dist/ReactToastify.css";

export const App: React.FC = () => {
  const notify = () => {
    toast.success("toast prac-prac-"); //toast()를 사용해서 토스트 메시지를 띄웁니다.
  };
  return (
    <>
      <h1>hello</h1>
      <button onClick={notify}>Notify!</button>
      <ToastContainer
        position="bottom-right" //토스트 메시지가 나타날 위치
        limit={3} //토스트 메시지가 최대 3개까지만 나타나도록 설정
        closeButton={false} //닫기 버튼 없애기
        autoClose={5000} //5초 뒤에 자동으로 닫힘
        hideProgressBar //시간 바 없애기
        pauseOnFocusLoss={true} //화면을 벗어나면 알림 정지
      />
      <S.StyleToastContainer
        position="bottom-right"
        limit={3}
        closeButton={false}
        autoClose={5000}
        hideProgressBar
        pauseOnFocusLoss={true}
      />
    </>
  );
};

export default App;

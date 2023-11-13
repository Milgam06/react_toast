import * as S from "./styled";

export interface SubjectProps {
  back_colors: string;
}

export const ChoicePage: React.FC = () => {
  return (
    <S.Screen>
      <S.ChoiceTitleContainer>
        <S.ChoiceTitle>REACT-PRAC</S.ChoiceTitle>
      </S.ChoiceTitleContainer>
      <S.SubjectContainer>
        <S.Subject back_colors="lightblue">
          <S.SubjectTitle>Keyframes</S.SubjectTitle>
        </S.Subject>
        <S.Subject back_colors="lightpink">
          <S.SubjectTitle>Toastify</S.SubjectTitle>
        </S.Subject>
      </S.SubjectContainer>
    </S.Screen>
  );
};

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";
import { useThemeContext } from "../../../context/Theme/ThemeContext";

const LoadingColumn = () => {
  const { currentTheme } = useThemeContext();
  const array: string[] = new Array(4).fill("");
  return (
    <div>
      <SkeletonTheme
        baseColor={currentTheme.colors["bg-cards"]}
        highlightColor={currentTheme.colors["bg-main"]}>
        <Wrapper>
          {array.map((item) => {
            return (
              <>
                <Container>
                  <Skeleton
                    style={{ marginBottom: "2.4rem" }}
                    height="2.7rem"
                    count={1}
                  />
                  <Skeleton
                    style={{ marginBottom: "2rem" }}
                    height="9.45rem"
                    count={4}
                  />
                </Container>
              </>
            );
          })}
        </Wrapper>
      </SkeletonTheme>
    </div>
  );
};

const Container = styled.div`
  width: 28rem;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;
`;
export default LoadingColumn;

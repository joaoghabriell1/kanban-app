import { useThemeContext } from "../../../context/theme/ThemeContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

const LoadingColumn = () => {
  const { currentTheme } = useThemeContext();
  const array: string[] = new Array(2).fill("");
  return (
    <div>
      <SkeletonTheme
        baseColor={currentTheme.colors["bg-cards"]}
        highlightColor={currentTheme.colors["bg-main"]}
      >
        <Wrapper>
          {array.map((item, index) => {
            return (
              <Container key={index}>
                <Skeleton
                  style={{ marginBottom: "2.4rem" }}
                  height="2.7rem"
                  count={1}
                />
                <TaskCard>
                  <Skeleton
                    height="1.7rem"
                    style={{ marginBottom: "1rem" }}
                    count={1}
                  />
                  <Skeleton style={{ marginBottom: "2rem" }} count={1} />
                </TaskCard>
                <TaskCard>
                  <Skeleton style={{ marginBottom: "2rem" }} count={1} />
                  <Skeleton style={{ marginBottom: "2rem" }} count={1} />
                </TaskCard>
              </Container>
            );
          })}
        </Wrapper>
      </SkeletonTheme>
    </div>
  );
};

const TaskCard = styled.div`
  height: 9.45rem;
  margin-bottom: 2rem;
  padding: 2.3rem 1.6rem;
  border: 1px solid ${(props) => props.theme.colors["bg-cards"]};
  border-radius: 8px;
  min-width: 28rem;
`;
const Container = styled.div`
  width: 28rem;
`;

const Wrapper = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;
`;
export default LoadingColumn;

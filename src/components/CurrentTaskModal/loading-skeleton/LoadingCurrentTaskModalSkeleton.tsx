import { useThemeContext } from "../../../context/theme/ThemeContext";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingCurrentTaskModalSkeleton = () => {
  const { currentTheme } = useThemeContext();
  return (
    <>
      <div>
        <SkeletonTheme
          baseColor={currentTheme.colors["bg-main"]}
          highlightColor={currentTheme.colors["bg-cards"]}
        >
          <Skeleton height="3.6rem" count={1} />
          <Skeleton style={{ marginBlock: "2.4rem" }} height="2rem" />
          <Skeleton style={{ marginBottom: "2rem" }} height="1.6rem" />
          <Skeleton style={{ marginBottom: "2.4rem" }} height="4.4rem" />
          <Skeleton style={{ marginBottom: ".8rem" }} height="2rem" />
          <Skeleton height="4rem" />
        </SkeletonTheme>
      </div>
    </>
  );
};

export default LoadingCurrentTaskModalSkeleton;

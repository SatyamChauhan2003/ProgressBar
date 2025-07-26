import { useEffect, useState } from "react";
import "./styles.css";

const Progress = ({ progress }) => {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimationProgress(progress), 100);
  }, [progress]);
  return (
    <>
      <div className="outer">
        <div
          className="inner"
          style={{
            width: `${animationProgress}%`,
            //transform: `translateX(${animationProgress - 100}% )`,
            color: animationProgress < 5 ? "black" : "white",
          }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemax="100"
          aria-valuemin="0"
        >
          {progress}%
        </div>
      </div>
    </>
  );
};

export default function App() {
  //const array = [0, 10, 50, 35, 80, 95, 25, 100];
  return (
    <div className="App">
      {[0, 10, 50, 35, 80, 95, 25, 100].map((data) => {
        return (
          <>
            <Progress key={data} progress={data} />
          </>
        );
      })}
    </div>
  );
}

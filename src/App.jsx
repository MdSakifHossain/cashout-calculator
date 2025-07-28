import CashoutCalcStar from "./components/CashoutCalc";
// import BreakpointChecker from "./components/utils/BreakPointsChecker";

const App = () => {
  return (
    <div
      className="bg-brand text-light font-base min-h-svh min-w-svw
                py-6
                flex justify-center items-center"
    >
      <CashoutCalcStar />
      {/* <BreakpointChecker /> */}
    </div>
  );
};

export default App;

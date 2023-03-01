import { PomodoroTimer, QuickNote, SoundContainer } from './components';

function App() {
  return (
    <section className=" container flex h-full w-full flex-col items-center justify-center gap-4 px-6 py-8 sm:flex-row sm:py-8 sm:px-0">
      <div className=" mt-4 flex h-[80vh] w-full flex-col  items-center justify-center gap-y-6  sm:mt-0 sm:h-full sm:w-[50%] sm:gap-4">
        <PomodoroTimer />
        <SoundContainer />
      </div>
      <div className=" item-center mt-16 flex h-[80vh] w-full  justify-center sm:mt-0  sm:h-full sm:w-[50%]">
        <QuickNote />
      </div>
    </section>
  );
}

export default App;

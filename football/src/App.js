import './App.css';
import CompetitionSection from './components/organisms/CompetitionSection';
import PopularTeamsSection from './components/organisms/PopularTeamsSection';
import UpGamesSection from './components/organisms/UpGamesSection';
import RankingSection from './components/organisms/RankingSection';

function App() {
  return (
    <div className='flex justify-center' id="App">
      <div className='w-10/12 space-y-40'>
        <CompetitionSection />
        <PopularTeamsSection />
        <UpGamesSection />
        <RankingSection />
      </div>
    </div>
  );
}

export default App;

import sounds from './sounds'
import Sound from './Sound'

function App() {
  console.log(sounds)
  return <>{Object.entries(sounds).map(([key, value]) =>
    <div key={key}>
      <Sound sound={value} />{key}
    </div>)}
  </>
}
export default App

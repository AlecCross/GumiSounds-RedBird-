import sounds from './sounds'
import Sound from './Sound'

function App() {
  return <div style={{
    minHeight: "100vh",
    backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScKOt5EXtS4NzwyykWgKHuoEx2T9ppm0QTwZL3G9uONmO2SLGRuXPUVAous9ADjMrNzj4&usqp=CAU)"
  }}>
    <h1 style={{ textAlign: "center", color: "white", background: "rgba(0,0,0,0.4)" }}>GUMI notification sounds</h1>
    <div style={{
      display: "flex",
      flexWrap: "wrap",
    }}>
      {Object.entries(sounds).map(([key, value]) =>
        <div style={{ border: "solid grey", margin: 5, background: "rgba(255,255,255,0.4)" }} key={key}>
          <Sound sound={value} /><span style={{ margin: 10 }}>{key}</span>
          <a href={value} download>🔗</a>
        </div>)}
    </div>
  </div>
}
export default App

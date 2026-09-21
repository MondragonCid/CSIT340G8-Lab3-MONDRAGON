
const Content = (props) => {
  return (
    <div>
      <p>
        Part {props.part1}
        Part {props.part2}
        Part {props.part3}
      </p>
    </div>
  )
}


const App = () => {
  
  const part1 = 'Fundamentals of React'
  
  const part2 = 'Using props to pass data'
  
  const part3 = 'State of a component'
  

  return (
    <div>
      <Content part1 = {part1} />
      <Content part2 = {part2} />
      <Content part3 = {part3} />
    </div>
  )
}

export default App

import React from 'react';



//child
class Great extends React.Component{
  render(){
  //console.log(prop)
  return <h1>Hello {this.props.name} also K.A. {this.props.hero}</h1>
}
}


//parent
function App () {
  return (
   <div className="App">
    <Great name='Ahmed' hero='myself'/>

    from function component props

   </div>
 );
}
export default App;

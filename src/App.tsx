import React, { useState } from 'react';
import './App.css';
import List from "./components/List";


interface IState {
  people: {
      name: string
      age: number
      url: string
      note?: string
  }[];
}


function App() {

const [people, setPeople] = useState<IState["people"]>( [
    {
      name: "Giko Megrelishvili",
      url: "https://scontent.ftbs5-3.fna.fbcdn.net/v/t1.6435-9/120013139_4401889183216711_4907294256895663160_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=NZM83K0AA_QAX8HGSyE&tn=fnGUHrQXfJJ9b15H&_nc_ht=scontent.ftbs5-3.fna&oh=00_AT-Dn8NmVrNx8no3gUdScHLoJ8vYoxZE8BjOVzdflzbC0A&oe=62E20CED",
      age: 24,
      note: "Co-Founder of  'Cypher' "
    }
] )


  return (
    <div className="App">
        <h1>People invited to Cypher's party 2022</h1>
        <List people={people}/>
    </div>
  );
}

export default App;

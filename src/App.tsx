import React, { useState } from 'react';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Giko Megrelishvili",
      age: 24,
      img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t1.6435-9/120013139_4401889183216711_4907294256895663160_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=aZ0wuCtW9DMAX8j2-43&tn=fnGUHrQXfJJ9b15H&_nc_ht=scontent.fkut1-1.fna&oh=00_AT-g7SYhK4zhsHPx69APrDTrwakY8HoHGl5cEn-CWBdkug&oe=62F5D36D",
      note: "MC Givi",
    },
    {
      name: "Dato Zumadze",
      age: 23,
      img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t1.6435-9/30713406_1674355399312162_5288213272435097600_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=vi9Qz-BBXYIAX-kGoiw&tn=fnGUHrQXfJJ9b15H&_nc_ht=scontent.fkut1-1.fna&oh=00_AT_X0MRF9kVM-XpX83iF7dxnepPeykTfLfLI_jHrxsromw&oe=62F56B77",
      note: "MC Zuma",
    },
    {
      name: "Akaki Spanderashvili",
      age: 23,
      img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t39.30808-6/237144880_4549506908416626_8897614776585106797_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=174925&_nc_ohc=dS-BzIVtbkAAX8t5HXr&_nc_ht=scontent.fkut1-1.fna&oh=00_AT_6l006sB3FvU3CSlDy7es0kp9tZ76FQt9UxXgqhLHB-A&oe=62D3F9A6",
      note: "MC Spanderako99",
    },
    {
      name: "Tornike Bratchuli",
      age: 23,
      img: "https://scontent.fkut1-1.fna.fbcdn.net/v/t1.6435-9/29541803_1528720610590476_2530224440197775360_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=174925&_nc_ohc=JzenHCr6RWMAX-AXYEq&_nc_ht=scontent.fkut1-1.fna&oh=00_AT-1QZxM1hno1VLvc0fYg6Vugh_zEePH7xQCwHZYjYrPdQ&oe=62F38DA0",
      note: "MC Bratchika",
    },
  ])

  return (
    <div className='Main-div'>
        <div className="App">
          <h1 className='header'>CYPHER'S SUMMER PARTY 2022 </h1>

        <div className='Wrapper-div'>
            <List people={people}/>
            <AddToList setPeople={setPeople} people={people}/>
        </div>
        </div>\
    </div>
  );
}

export default App;
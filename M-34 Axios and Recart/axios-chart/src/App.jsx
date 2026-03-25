
import { Line, LineChart, XAxis, YAxis } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';
const studentAr = [
  {
    "id": 101,
    "name": "Arun",
    "gender": "Male",
    "physics": 88,
    "maths": 87,
    "english": 78,
    "total": 253,
    "result": "Pass"
  },
  {
    "id": 102,
    "name": "Rajesh",
    "gender": "Male",
    "physics": 96,
    "maths": 100,
    "english": 95,
    "total": 291,
    "result": "Pass"
  },
  {
    "id": 103,
    "name": "Moorthy",
    "gender": "Male",
    "physics": 89,
    "maths": 90,
    "english": 70,
    "total": 249,
    "result": "Pass"
  },
  {
    "id": 104,
    "name": "Usha",
    "gender": "Female",
    "physics": 67,
    "maths": 45,
    "english": 78,
    "total": 190,
    "result": "Pass"
  },
  {
    "id": 105,
    "name": "Priya",
    "gender": "Female",
    "physics": 56,
    "maths": 46,
    "english": 78,
    "total": 180,
    "result": "Pass"
  },
  {
    "id": 106,
    "name": "Kavitha",
    "gender": "Female",
    "physics": 78,
    "maths": 71,
    "english": 67,
    "total": 216,
    "result": "Pass"
  },
  {
    "id": 107,
    "name": "Dinesh",
    "gender": "Male",
    "physics": 56,
    "maths": 45,
    "english": 67,
    "total": 168,
    "result": "Pass"
  },
  {
    "id": 108,
    "name": "Hema",
    "gender": "Female",
    "physics": 71,
    "maths": 90,
    "english": 23,
    "total": 184,
    "result": "Pass"
  },
  {
    "id": 109,
    "name": "Ram",
    "gender": "Male",
    "physics": 78,
    "maths": 55,
    "english": 47,
    "total": 180,
    "result": "Pass"
  },
  {
    "id": 110,
    "name": "Jenifer",
    "gender": "Female",
    "physics": 67,
    "maths": 88,
    "english": 90,
    "total": 245,
    "result": "Pass"
  }
]
const App = () => {
  console.log(studentAr);
  return (
    <div >
      <LineChart width={'90%'} height={'300px'} responsive data={studentAr}>
        <Line dataKey={'maths'} ></Line>
        <XAxis dataKey={'name'}></XAxis>
        <YAxis/>
      </LineChart>
    </div>
  );
};

export default App;
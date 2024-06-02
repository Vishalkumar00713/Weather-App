
import './App.css'
import Items from "./Items"
import Counter from './Counter'
import Dumbo from './Dumbo'
import ScoreKeeper from "./ScoreKeeper"
import EmojiClicker from './EmojiClicker'
import Dice from './Dice'
import LuckyN from "./LuckyN"
import {sum} from './utils';
import Box from "./Box"
import BoxGrid from './BoxGrid'
import BetterSignUpForm from "./BetterSignUpForm"
import ShoppingList from './ShoppingList'
import Pounter from "./Pounter"
import NewsApi from "./NewsApi"
import Weather from "./Weather"




// const item=[
//       {name:"Milk",price:45,quantity:0},
//       {name:"Chips",price:10,quantity:0},
//       {name:"Bagii",price:67,quantity:0}
// ]

// function lessThan4(dice){

//   return sum(dice)<4;
// }

// function allSame(dice){
//   let count=0;
//   let i=0
//  while(i<dice.length){
//       if(dice[0]===dice[i])
//         {
//           count++;
//         }
//         i++;
//       }

    
//     if(count===dice.length)
//       {
//         return true;
//       }

  
// }

function App() {

  return (
    <>
   {/* <LuckyN isWinner={lessThan4} title="Roll less then 4"/>
   <LuckyN isWinner={allSame} title="Roll The Same Number"/> */}
  
   {/* <BoxGrid/> */}
   {/* <BetterSignUpForm/> */}
 
   {/* <ShoppingList/> */}

    {/* <NewsApi/> */}
   {/* <Pounter/> */}
   <Weather/>



   
    </>
  )
}

export default App

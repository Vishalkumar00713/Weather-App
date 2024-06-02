import {useState,useEffect} from 'react'
import "./news.css"
import "./loading.css"

export default function NewsApiLoader(){

   
    const [names,setName]=useState();
    const [news,setNews]=useState()
    const [image,setImage]=useState()
    const [dis,setDis]=useState()
    const [time,setTime]=useState()
    const[cloud,setCloud]=useState();
    const[wind,setWind]=useState();
    const[humidity,setHumidity]=useState();
    const[airp,setAirp]=useState();
    const[bangalore,setBangalore]=useState();
    const[mumbai,setMumbai]=useState();
    const [loading,setLoading]=useState(true);


 
 
  
      
    useEffect(()=>{
        async function fetchQuote(){
            const Random_quote="https://api.weatherapi.com/v1/current.json?key=1a543cb7d103477285d114145240206&q=delhi&aqi=no";
 

            const response= await fetch(Random_quote);
            const jasonResponse= await response.json();
            console.log(jasonResponse);
            const randoNews=jasonResponse.location.name;
            const imageUrl=jasonResponse.current.condition.icon;
            const description=jasonResponse.current.temp_c;
            const time=jasonResponse.location.localtime;
            const cloud=jasonResponse.current.condition.text;
            const windSpeed=jasonResponse.current.wind_mph;
            const humi=jasonResponse.current.humidity;
            const air=jasonResponse.current.pressure_mb;
            setNews(randoNews);
            setImage(imageUrl)
            setDis(description);
            setTime(time);
            setCloud(cloud)
            setWind(windSpeed);
            setHumidity(humi)
            setAirp(air)
            setLoading(false);
            setName("")
        }

        
    

        fetchQuote();
     

    },[])
          
    useEffect(()=>{
        async function fetchQuote(){
            const Random_quote="https://api.weatherapi.com/v1/current.json?key=1a543cb7d103477285d114145240206&q=Mumbai&aqi=no";
 

            const response= await fetch(Random_quote);
            const jasonResponse= await response.json();
            console.log(jasonResponse);
           
            
            const description=jasonResponse.current.temp_c;
           
            setMumbai(description);
           
        }

        
    

        fetchQuote();
     

    },)

    useEffect(()=>{
        async function fetchQuote(){
            const Random_quote="https://api.weatherapi.com/v1/current.json?key=1a543cb7d103477285d114145240206&q=Bangalore&aqi=no";
 

            const response= await fetch(Random_quote);
            const jasonResponse= await response.json();
            console.log(jasonResponse);
           
            
            const description=jasonResponse.current.temp_c;
           
            setBangalore(description);
           
        }

        
    

        fetchQuote();
     

    },)



    let Random_quotes=`https://api.weatherapi.com/v1/current.json?key=1a543cb7d103477285d114145240206&q=${names}&aqi=no`;
 
    async function fetchQuote(e){


      
       

        const response= await fetch(Random_quotes);
        const jasonResponse= await response.json();
        console.log(jasonResponse);
        const randoNews=jasonResponse.location.name;
        const imageUrl=jasonResponse.current.condition.icon;
        const description=jasonResponse.current.temp_c;
        const time=jasonResponse.location.localtime;
        const cloud=jasonResponse.current.condition.text;
        const windSpeed=jasonResponse.current.wind_mph;
        const humi=jasonResponse.current.humidity;
        const air=jasonResponse.current.pressure_mb;
        setNews(randoNews);
        setImage(imageUrl)
        setDis(description);
        setTime(time);
        setCloud(cloud)
        setWind(windSpeed);
        setHumidity(humi);
        setAirp(air);
        setLoading(false);

       
    }

    
   
     
      
    function handelChange1(e)
    {

        e.target.value="Mumbai"
        setName(e.target.value);
    }
    function handelChange2(e)
    {

        e.target.value="Bangalore"
        setName(e.target.value);
    }
  
       

        
    function handelChange(e)
    {
        setName(e.target.value);
    }

    function handelSubmit(evt){
        evt.preventDefault();


    }
   

    



    return (

        
       <div className="news"  >
        <div>
           <h1 style={{color:"white"}}>Weather App</h1>
        <form action="" onSubmit={handelSubmit}>
            <input style={{height:"35px",backgroundColor:"grey",color:"white",}} type="text"  value={names} onChange={handelChange} placeholder="Enter The Name of City"/>
            <button  style={{backgroundColor:"blue",color:"white",borderRadius:"none"}} onClick={fetchQuote}>Search Weather</button>
        </form>
        <p className="loading" style={{opacity:loading?"1":"0"}}>Loading...</p>
        <h1 style={{color:"white"}}>{dis}<sup>o</sup>C</h1>
     
        <img style={{boxShadow:"5px 5px 5px 5px grey",borderRadius:"50%"}}src={image} alt="No Image" />
        <h3>{cloud}</h3>

        <h1 style={{color:"white"}}>{news}</h1>
        <h3 style={{color:"white"}}>{time}</h3>
        </div>

        <div >
        
        <h3 style={{marginTop:"125px"}}>Today's HighLights</h3>
        <div class="Extras">
        <div className="div"  style={{width:"125px"}}><h2>{wind}mph</h2><p>💨Wind Speed</p></div>
        <div  className="div" style={{width:"125px"}}><h2>{humidity}%</h2><p>Humidity💧</p></div>
        <div  className="div" style={{width:"125px"}}><h2>{airp}mbps</h2><p>Air Pressure</p></div>
        </div>

        <h3 style={{margin:"50px"}}>Weather Of Some Other Famous Cities in India</h3>
        <div  style={{width:"125px",display:"flex",justifyContent:"space-around",width:"500px",boxShadow:"10px 10px 10px 10px grey"}} >
            <div onClick={handelChange1} className="div"style= {{width:"150px",height:"170px"}}><h2>Mumbai</h2>
        <h1 >{mumbai}<sup>o</sup>C</h1></div>
        <div onClick={handelChange2}className="div"  style= {{width:"150px",height:"170px"}}>
        <h2>Bangalore</h2>
        <h1 >{bangalore}<sup>o</sup>C</h1>
        </div>

        </div>
      
     

       
        </div>
       
       </div>

 


    )
}
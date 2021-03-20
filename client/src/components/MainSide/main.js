const getInfo = async () => {
    try {
      const searchString = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address={zipcode}&key=AIzaSyCdgqZ9mJc1Qxkg4JcgRLX1d2_ToFGq1hU`
      const response = await fetch(searchString)
      const myStuff = await response.json()
      //setWeather(myStuff.main)
    } 
      catch (err){
    }
  }

const [address, setAddress] = useState ([])

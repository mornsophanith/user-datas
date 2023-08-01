import React, {useState} from "react";
import './App.css';
import CardItem from "./components/card/Card";
import LoadingCard from "./components/loading/Loading";
import SearchInput from "./components/searchInput/Input";
import Grid from '@mui/material/Grid';
import UserFill from "./types/usersFill";
import { getMany } from "./service/user";


const App: React.FC = () => {
  const [userDatas, setUserDatas] = useState<UserFill[]>([]);
  const [filterUser, setFilterUser] = useState<UserFill[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingSearch, setLoadingSearch] = useState(false);
  let timer = null;

  React.useEffect(() => {
    const fetchUsers = async () => {
      try {
          const response = await getMany();
          if (response) {
            const data = response.map((user: UserFill) => {
                return {
                  id: user.id,
                  login: user.login,
                  company: "",
                  html_url: "",
                  name: "",
                  avatar_url: "",
                  following: 0,
                  followers: 0
                };
              });
            setUserDatas(data)
            setFilterUser(data)
            setLoading(false)
            
          }
      } catch (error) {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  React.useEffect(() => {

  },[])

  const handleSearch = (value: string) => {
    clearTimeout(timer);

    timer = setTimeout(() => {
      let filterDataUser = filterUser;
      if (value.toLowerCase()) {
        filterDataUser = filterUser.filter(userData => 
          userData.name?.toLowerCase().includes(value.toLowerCase()) || 
          userData.company?.toLowerCase().includes(value.toLowerCase())
        )
        setUserDatas(filterDataUser);
        setLoadingSearch(false)
        console.log(value, filterDataUser);
        
      } else {
        setUserDatas(filterDataUser);
      }
    }, 1000);
  };

return (<div>
    <header className="header-container">
      <div className="header-content">
          <a href="/" className="logo"><img src="./unnamed.png" alt="logo"/></a>
          <div className="search-input">
            <SearchInput onSearch={handleSearch} />
          </div>
      </div>
    </header>
    
    <main>
      <div className="main-container">
        <Grid container spacing={8}>
            {
              loading || loadingSearch ? 
              <LoadingCard item={25}/>
              : (
                userDatas.map((userData: UserFill, index: number) => 
                  <CardItem key={userData.id} index={index} userDatas={userDatas} userLogin={userData.login}/>
                )
              )
            }
        </Grid>

      </div>
    </main>
  </div>);
};

export default App;
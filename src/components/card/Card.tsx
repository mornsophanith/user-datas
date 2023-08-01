import React, { useState } from 'react';
import './Style.css';
import Grid from '@mui/material/Grid';
import { getOne } from '../../service/user';
import UserFill from '../../types/usersFill';
import { formatNumberToK } from '../../helper/helpers';

interface PropData {
    userLogin: string;
    userDatas: UserFill[];
    index: number;
}

const  CardItem: React.FC<PropData> = ({userLogin, userDatas, index}) => {
    const [userData, setUserData] = useState<UserFill | null>(null);
    const [loading, setLoading] = useState(true);
    
    React.useEffect(() => {
        const fetchUserData = async () => {
          try {
            if (userLogin) {
              const result = await getOne(userLogin);
              userDatas[index].name = result.name;
              userDatas[index].company = result.company;
              
              setUserData({
                id: result.id,
                login: result.login,
                company: result.company,
                html_url: result.html_url,
                name: result.name,
                avatar_url: result.avatar_url,
                following: result.following,
                followers: result.followers
              });
              setLoading(false);
            }
          } catch (error) {
            setLoading(false);
            console.error("Failed to fetch user data:", error);
          }
        };
    
        fetchUserData();
    }, []);

    const NoImage = () => {
        return(<img src="../../vector-users-icon.webp" alt="avatr" />)
    }

    return(
            <Grid item xs={3}>
                <a href="#/" className="item-card">
                    <div className="img-item">
                        {
                            userData && userData.avatar_url ? 
                            <img src={userData && userData.avatar_url} alt={userData&&userData.name?userData.name: 'N/A'}  />
                            : 
                            <NoImage />
                        }
                    </div>
                    <div className="card-info">
                        <h2 className="title">{userData && userData.name ? userData.name : 'N/A' }</h2>
                        <p className="sub-title">{userData && userData.company ? userData.company : 'N/A'}</p>
                    </div>
                    <div className="socail-media">
                        <a href="#/" className="icon facebook"><i className='bx bxl-facebook' ></i></a>
                        <a href="#/" className="icon twitter"><i className='bx bxl-twitter' ></i></a>
                        <a href="#/" className="icon instagram"><i className='bx bxl-instagram' ></i></a>
                        <a href="#/" className="icon youtube"><i className='bx bxl-youtube' ></i></a>
                    </div>
                    <div className="follower-following">
                        <div className="pull-left">
                            <p className="follower-qauntity">{userData && userData.followers ? formatNumberToK(userData.followers) : 'N/A'}</p>
                            <p className="text">Follower</p>
                        </div>
                        <div className="pull-right">
                            <p className="following-qauntity">{userData && userData.followers ? formatNumberToK(userData.following) : 'N/A'}</p>
                            <p className="text">Following</p>
                        </div>
                    </div>
                </a>
            </Grid>
    )
}

export default CardItem;
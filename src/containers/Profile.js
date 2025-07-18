import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      navigate('/login');
      return;
    }
    setUser(JSON.parse(userData));
  }, [navigate]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className='profile_page'>
      <div class="sidenav">
        <div class="profile">
          <img src="images/jaspreet-logo.jpg" alt="" width="100" height="100"/>
            <div class="name">
              Jaspreet Cafe
            </div>
            <div class="job">
            Food Is Always A Good Idea
            </div>
        </div>

        <div class="sidenav-url">
          <div class="url">
            <a href="#profile" class="active">Profile</a>
            <hr align="center"/>
          </div>
          {/* <div class="url">
            <a href="#settings">Booking Details</a>
            <hr align="center"/>
          </div> */}
        </div>
      </div>

      <div class="main">
        <h2>IDENTITY</h2>
        <div class="card" style={{color:"white"}}>
          <div class="card-body">
            <i class="fa fa-pen fa-xs edit"></i>
            <table>
              <tbody>
                <tr>
                  <td>Name</td>
                  <td>:</td>
                  <td>{user.name || 'N/A'}</td>
                </tr>
                <tr>
                  <td>Email</td>
                  <td>:</td>
                  <td>{user.email || 'N/A'}</td>
                </tr>
                <tr>
                  <td>Phone</td>
                  <td>:</td>
                  <td>{user.phone || 'N/A'}</td>
                </tr>
                <tr>
                  <td>Mobile</td>
                  <td>:</td>
                  <td>Diving, Reading Book</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <h2>SOCIAL MEDIA</h2>
        <div class="card">
          <div class="card-body">
            <i class="fa fa-pen fa-xs edit"></i>
            <div class="social-media">
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-facebook fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-twitter fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-instagram fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-invision fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-github fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-whatsapp fa-stack-1x fa-inverse"></i>
              </span>
              <span class="fa-stack fa-sm">
                <i class="fas fa-circle fa-stack-2x"></i>
                <i class="fab fa-snapchat fa-stack-1x fa-inverse"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

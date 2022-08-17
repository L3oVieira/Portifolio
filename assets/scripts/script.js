
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,800;1,100;1,400;1,700&display=swap');


* {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    box-sizing: border-box;
}

body {
    background: #080808;
    color: #fff;
}

#header {
    width: 100%;
    height: 100vh;
    background-image: url(assets/img/background.png);
    background-size: cover;
    background-position: center;
    
}

.container {
    padding: 10px 10px;
}

nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border-bottom: 3px solid #111111 ;
    padding-bottom: 16px;

}
nav ul li a{
    color: #fff;
    text-decoration: none;
    font-size: 18px;
    position: relative;
}
nav ul li {
    display: inline-block;
    list-style: none;
    margin: 10px 20px;
}
nav ul li a::after{
    content: '';
    width: 15%; 
    height: 3px;
    background: #141414;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: .5s;
}
nav ul li a:hover::after{
    content: '';
    width: 105%; 
    height: 3px;
    background: #9e0038;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: .5s;
}
nav ul li a .active {
    content: '';
    width: 100%; 
    height: 3px;
    background: #9e0038;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: .5s;
}

nav .logo {
    color: #9e0038;
    font-size: 34px;
    padding-left: 10px;
}

.header-text{
    margin-top: 22%;
    margin-left: 5%;
    font-size: 34px;
}
.header-text h1{
    font-size: 48px;
    font-weight: 800;
}
.header-text span{
    color: #9e0038;
    font-weight: 800;
}

.header-text span:hover::after{
    font-size: 55px;
    transition: .5s ease-in-out;
}
.header-text span:hover{
    transition: .4s;
    animation: colors 3s infinite ease-in-out;
}

@keyframes colors {
    0% {color: #9e0038;}
    30% {color: #fb4e4e;}
    100% {color: #9e0038;}
}

/*  About Section */

#about {
    padding: 80px 0;
    color: #ababab;
}

.row {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.about-col-1 {
    flex-basis: 35%;
}
.about-col-1 img{
    width: 100%;
    border-radius: 15%;
}
.about-col-2 {
    flex-basis: 60%;
}
.sub-title {
    font-size: 50px;
    font-weight: 600;
    color: #fff;
}

.tab-titles{
    display: flex;
    margin: 20px 0 40px;
}
.tab-links{
    margin-right: 15px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    position: relative;
}

.tab-links::after {
    content: '';
    width: 0%; 
    height: 3px;
    background: #9e0038;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: .5s;
}
.tab-links:hover::after {
    content: '';
    width: 105%; 
    height: 3px;
    background: #9e0038;
    position: absolute;
    left: 0;
    bottom: -6px;
    transition: .5s;
}
.tab-links.active-link::after {
    width: 100%; 
}
.tab-contents ul li{
    list-style: none;
    margin: 10px 0;
}
.tab-contents ul li span{
    color:#9e0038;
    font-weight: 800;
}

.tab-contents {
    display: none;
}
.tab-contents.active-tab{
    display: block;
}

/*  Services Section */

#services {
    padding: 30px;
}
.services-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    margin-top: 50px;
    font-size: 14px;
    
}
.services-list div{
    background-color: #151515;
    border-radius: 10px;
    padding: 22px 22px;
    transition: background 1s, transform .6s ;
}
.services-list div:hover{
    background-color: #9e0038;
    transform: translateY(-10px);
   
}
.services-list div:hover a {
    background-color: #fff;
    padding: 2px 4px;
    border-radius: 8px;
    transition: .8s;
}
.services-list h2{
    font-size: 20px;
    font-weight: 800;
    margin-bottom: 10px;
    margin-top: 12px;
}
.services-list a{
    color: #9e0038;
    text-decoration: none;
    font-size: 16px;
    font-weight: 800;
    
}
.services-list p{
    margin-bottom: 15px;
}
.services-list i{
    color: #ffffff;
    font-size: 36px;

}

#portifolio{
    padding: 50px;
}
.work-list{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 40px;
    margin-top: 50px;
}
.work {
    border-radius: 10px;
    position: relative;
    overflow: hidden;
}
.work img{
    width: 100%;
    border-radius: 10px;
    display: block;
    transition: transform 0.5s;
}

.layer {
    width: 100%;
    height: 0;
    background: linear-gradient(rgba(0,0,0,0.6), #ff004f);
    border-radius: 10px;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 40px;
    text-align: center;
    transition: height 0.5s;
}
.layer h3 {
    font-weight: 500;
    margin-bottom: 20px;
}
.layer a {
    margin-top: 20px;
    color:#ff004f;
    text-decoration: none;
    font-size: 18px;
    line-height: 60px;
    background: #fff;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    text-align: center;
    font-size: 14px;
}
.work:hover img{
    transform: scale(1.1);
}
.work:hover .layer {
    height: 100%;
}

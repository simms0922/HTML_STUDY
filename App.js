/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let [글제목, 글제목변경] = useState(['프론트엔드 공부 후기!', '순천대 맛집', '대머리깎아라']);
  let [하트1, 하트변경1] = useState(0);
  let [하트2, 하트변경2] = useState(0);
  let [하트3, 하트변경3] = useState(0);

  function 함수1(){
    하트변경1(하트1+1);
  }
  function 함수2(){
    하트변경2(하트2+1);
  }
  function 함수3(){
    하트변경3(하트3+1);
  }


  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>
      
      <div className="container">

        <Modal></Modal>
        <Intro></Intro>
        <Main></Main>

        <div className="list">
          <h3>{ 글제목[0] } <span onClick={ 함수1 }>❤️</span> {하트1} </h3>
          <p className="content">동아리에서 REACT로 프론트엔드를 공부하고있다.</p>
          <h5>2025.3.25</h5>
          <button className="chat">댓글</button>
        </div>
        <div className="list">
          <h3>{ 글제목[1] } <span onClick={ 함수2 }>❤️</span> {하트2} </h3>
          <p className="content">순천대 앞 맛집 어디가 있을까</p>
          <h5>2025.1.15</h5>
          <button className="chat">댓글</button>
        </div>
        <div className="list">
          <h3>{ 글제목[2] } <span onClick={ 함수3 }>❤️</span> {하트3} </h3>
          <p className="content">박효연 머리 깎아라</p>
          <h5>2024.8.27</h5>
          <button className="chat">댓글</button>
        </div>
        <Under></Under>
      </div>

    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
      <h1>BLOG</h1>
      <p>민서</p>
      <p>👧43명의 이웃✌️</p>
      <button className="neighbor">이웃</button>
      <button className="neighbor">서로이웃</button>
    </div>
  )
}

function Under(){
  return(
    <div className="under">
      <p>민서</p>
      <p>👧43명의 이웃✌️</p>
      <button className="neighbor">블로그 공유</button>
    </div>
  )
}

function Intro(){
  return(
    <div className="intro">
      <h2>소개</h2>
      <p>
        (ง˙∇˙)ว
      </p>
    </div>
  )
}

function Main(){
  return(
    <div className="main">
      <h2>블로그글</h2>
    </div>
  )
}

export default App;
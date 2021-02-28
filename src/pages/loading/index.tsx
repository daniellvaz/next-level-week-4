import { GetServerSideProps } from "next";
import Lottie from "lottie-react";
import { useEffect } from "react";
import router from "next/router";
import cookie from "js-cookie";


import Animation from "../../loading.json";
import styles from "../../styles/pages/Loading.module.css";

interface IProps {
  name: string;
  image: string;
  twitter: string;
  logged: string; 
}

export default function Loading(props: IProps){

  useEffect(() => {
    cookie.set('name', props.name);
    cookie.set('image', props.image);
    cookie.set('twitter', props.twitter);
    localStorage.setItem('logged', 'true');
  }, []);
  
  useEffect(() => {
    setTimeout(() => {
      router.push('/dashboard');
    }, 2000)
  }, []);

  return (
    <div className={styles.loadingContainer}>
      <Lottie animationData={Animation} style={{width: '20%'}} />
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { name, image, twitter } = ctx.query

  return {
    props: {
      name: name,
      image: image,
      twitter: twitter,
      logged: 'yes'
    }
  }
}